import { useState } from 'react';
import styles from './styles.module.css';

const SupportService = () => {
    const [isClosing, setIsClosing] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const supportLinks = [
        'http://',
        'https://',
        'teez://',
        'Deep Links',
        'AI Links',
        'tel://',
        'sms://',
        'mailto://',
        'query string',
        'file url',
    ];

    const handleClick = () => {
        if (isActive) {
            setIsClosing(true);
            setTimeout(() => {
                setIsActive(false);
                setIsClosing(false);
            }, 300);
        } else {
            setIsActive(true);
        }
    };

    return (
        <div className={styles.supportContainer}>
            <button
                className={`${styles.supportService} ${isActive ? styles.active : ''}`}
                onClick={handleClick}
            >
                <span className={`${styles.supportIcon} ${isActive ? styles.rotate : ''}`}>⨉</span>
                Поддерживаемые ссылки
            </button>

            <div className={`${styles.supportList} ${isActive ? styles.active : ''} ${isClosing ? styles.closing : ''}`}>
                <ul>
                    {supportLinks.map((link, idx) => (
                        <li key={idx}>{link}</li>
                    ))}
                </ul>
                <p className={styles.supportDescription}>
                    Таким образом наш сервис поддерживает практически все виды ссылок.
                </p>
            </div>
        </div>
    );
};

export default SupportService;
