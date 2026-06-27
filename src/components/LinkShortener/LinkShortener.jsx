import { useState } from 'react';

import Description from './Description';
import LinkForm from './LinkForm';
import ResultBox from './ResultBox';

import styles from './styles.module.css';

const LinkShortener = () => {
    const [shortUrl, setShortUrl] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const shortenWithAPI = async (url) => {
        const apis = [
            // API 1: clck.ru (русский, работает хорошо)
            async (u) => {
                const res = await fetch(`https://clck.ru/--?url=${encodeURIComponent(u)}`);
                if (!res.ok) throw new Error('clck.ru failed');
                const shortUrl = await res.text();
                if (shortUrl && shortUrl.includes('clck')) return shortUrl.trim();
                throw new Error('No URL returned');
            },
            // API 2: da.gd
            async (u) => {
                const res = await fetch(`https://da.gd/s?url=${encodeURIComponent(u)}`);
                if (!res.ok) throw new Error('da.gd failed');
                const shortUrl = await res.text();
                if (shortUrl && !shortUrl.includes('<!')) return shortUrl.trim();
                throw new Error('No URL returned');
            },
            // API 3: v.gd
            async (u) => {
                const res = await fetch(`https://v.gd/?url=${encodeURIComponent(u)}&format=json`);
                const data = await res.json();
                if (data.short_url) return data.short_url;
                throw new Error('v.gd failed');
            },
            // API 4: is.gd
            async (u) => {
                const res = await fetch(`https://is.gd/?url=${encodeURIComponent(u)}&format=json`);
                const data = await res.json();
                if (data.shorturl) return data.shorturl;
                throw new Error('is.gd failed');
            }
        ];

        let lastError;
        for (const api of apis) {
            try {
                console.log('Пробуем API...');
                const result = await Promise.race([
                    api(url),
                    new Promise((_, reject) => 
                        setTimeout(() => reject(new Error('timeout')), 5000)
                    )
                ]);
                console.log('✅ API сработал');
                return result;
            } catch (err) {
                lastError = err;
                console.log('❌ API ошибка:', err.message);
            }
        }
        throw new Error('Все API не сработали. Проверьте интернет и попробуйте позже');
    };

    const handleShorten = async (url) => {
        setLoading(true);
        setError('');
        setShortUrl('');

        try {
            // Проверка валидности URL
            new URL(url);

            const shortened = await shortenWithAPI(url);
            
            // Проверяем, что вернулось не HTML
            if (shortened.includes('<!DOCTYPE') || shortened.includes('<html')) {
                throw new Error('API вернул ошибку (HTML вместо ссылки)');
            }

            setShortUrl(shortened);
            console.log('✅ Ссылка сокращена:', shortened);
        } catch (err) {
            const errorMsg = err.message || 'Не удалось сокращить ссылку. Попробуйте позже';
            setError(errorMsg);
            console.error('❌ Ошибка:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.linkShortener_container}>
            <Description />
            <LinkForm onShorten={handleShorten} loading={loading} />
            {error && <div style={{ color: 'red', textAlign: 'center', margin: '10px' }}>{error}</div>}
            <ResultBox shortUrl={shortUrl} />
        </div>
    );
};

export default LinkShortener;