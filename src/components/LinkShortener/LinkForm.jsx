import { useState } from 'react';
import linkIcon from "../../assets/img/link.png";
import styles from './styles.module.css';

const LinkForm = ({ onShorten, loading }) => {
    const [url, setUrl] = useState('');
    const [clicked, setClicked] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!url.trim()) return;

        const success = await onShorten(url);

        if (success) {
            setClicked(true);

            setTimeout(() => {
                setClicked(false);
            }, 2000);
        }
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

            <button
                type="submit"
                className={`${styles.linkShortener_button} ${
                    clicked ? styles.active : ""
                }`}
                disabled={loading}
            >
                {loading ? "Сокращаю..." : "Cut link"}
            </button>
        </form>
    );
};

export default LinkForm;