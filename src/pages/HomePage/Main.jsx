import LinkShortener from '../../components/LinkShortener/LinkShortener'
import SupportService from '../../components/SupportService/SupportService'
import TermsNote from '../../components/TermsNote/TermsNote'
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