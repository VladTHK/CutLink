import LinkShortener from '../LinkShortener/LinkShortener'
import SupportService from '../SupportService/SupportService'
import TermsNote from '../TermsNote/TermsNote'
import styles from './styles.module.css';

const Main = () => {
    return (
        <main className={styles.main}>
            <SupportService />
            <LinkShortener />
            <TermsNote />
        </main>
    )
}

export default Main