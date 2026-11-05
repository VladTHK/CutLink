import { useNavigate } from 'react-router-dom'
import Navigation from '../Navigation/Navigation'

import styles from './styles.module.css'
import logo from '../../assets/img/logo_cutlink.png'


const Aside = () => {
    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate('/');
    };

    return (
        <aside className={styles.aside}>
            <div className={styles.logo} onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
                <img src={logo} alt="logo" title="На главную"/>
            </div>
            <Navigation />
        </aside>
    )
}

export default Aside