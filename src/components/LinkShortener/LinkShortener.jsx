import { useState } from 'react';

import Description from './Description';
import LinkForm from './LinkForm';
import ResultBox from './ResultBox';

import styles from './styles.module.css';

const LinkShortener = () => {
    const [shortUrl, setShortUrl] = useState('');

    const handleShorten = (url) => {
        setShortUrl(url);
    };

    return (
        <div className={styles.linkShortener_container}>
            <Description />
            <LinkForm onShorten={handleShorten} />
            <ResultBox shortUrl={shortUrl} />
        </div>
    );
};

export default LinkShortener;