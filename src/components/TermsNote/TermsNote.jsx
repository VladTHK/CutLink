import { Link } from "react-router-dom";
import styles from './styles.module.css';

const TermsNote = () => {
    return (
        <div className={styles.termsNote}>
            <p>
                Тыкаешь — значит согласен с <Link to="/settings/terms">этими буквами и цифрами</Link>
            </p>
        </div>
    );
};

export default TermsNote;
