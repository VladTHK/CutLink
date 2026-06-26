import Navigation from '../Navigation/Navigation'

import styles from './styles.module.css'
import logo from '../../assets/img/logo_cutlink.png'


const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src={logo} alt="logo"/>
            </div>
            <Navigation />
        </header>
    )
}

export default Header