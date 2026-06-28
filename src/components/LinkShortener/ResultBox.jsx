import {useState} from 'react'

import styles from './styles.module.css';
import copyIcon from "../../assets/img/copy.svg"
import checkIcon from "../../assets/img/check.svg"

const ResultBox = ({ shortUrl }) => {
    const [clicked, setClicked] = useState(false);

    

    if (!shortUrl) return null;

    const handleCopy = () => {
        navigator.clipboard.writeText(shortUrl);
        setClicked(true)
        setTimeout(() => {
            setClicked(false)
        }, 1000) 

    };

    return (
        <div className={styles.resultBox}>
            <div className={`${styles.result} ${clicked ? styles.active : ""}`} onClick={handleCopy} >
                <img src={!clicked ? copyIcon : checkIcon} alt="icon" />
                {`${clicked ? "Скопировано " : shortUrl}`}
            </div>
        </div>
    );
};

export default ResultBox;