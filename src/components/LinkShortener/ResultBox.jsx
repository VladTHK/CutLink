import styles from './styles.module.css';

const ResultBox = ({ shortUrl }) => {
    if (!shortUrl) return null;

    return (
        <div className={styles.resultBox}>
            <div className={styles.result}>
                {shortUrl}
            </div>
        </div>
    );
};

export default ResultBox;