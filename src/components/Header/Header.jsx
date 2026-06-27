import { useNavigate } from 'react-router-dom'
import Navigation from '../Navigation/Navigation'

import styles from './styles.module.css'
import logo from '../../assets/img/logo_cutlink.png'


const Header = () => {
    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate('/');
    };

    return (
        <header className={styles.header}>
            <div className={styles.logo} onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
                <img src={logo} alt="logo" title="На главную"/>
            </div>
            <Navigation />
        </header>
    )
}

export default Header