import styles from './styles.module.css';

const ResultBox = ({ shortUrl }) => {
    if (!shortUrl) return null;

    const handleCopy = () => {
        navigator.clipboard.writeText(shortUrl);
        alert('✅ Ссылка скопирована!');
    };

    return (
        <div className={styles.resultBox}>
            <div className={styles.result}>
                {shortUrl}
                <button 
                    onClick={handleCopy} 
                    style={{
                        marginLeft: '10px',
                        padding: '5px 10px',
                        cursor: 'pointer',
                        backgroundColor: '#007bff',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px'
                    }}
                >
                    📋 Копировать
                </button>
            </div>
        </div>
    );
};

export default ResultBox;