import styles from './styles.module.css';

const TermsNote = () => {
    return (
        <div className={styles.termsNote}>
            <p>
                Тыкаешь — значит согласен с <a href="#">этими буквами и цифрами</a>
            </p>
        </div>
    );
};

export default TermsNote;
