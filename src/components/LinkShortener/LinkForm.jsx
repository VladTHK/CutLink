import { useState } from 'react';
import linkIcon from "../../assets/img/link.png";
import styles from './styles.module.css';

const LinkForm = ({ onShorten, loading }) => {
    const [url, setUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!url.trim()) return;

        onShorten(url);
    };

    return (
        <form
            className={styles.linkShortener_form}
            noValidate
            onSubmit={handleSubmit}
        >
            <img className={styles.linkShortener_icon} src={linkIcon} alt="link" />

            <input
                type="url"
                className={styles.linkShortener_input}
                placeholder="вставь ссылку сюда"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                disabled={loading}
                required
            />

            <button type="submit" className={styles.linkShortener_button} disabled={loading}>
                {loading ? 'Сокращаю...' : 'Cut link'}
            </button>
        </form>
    );
};

export default LinkForm;