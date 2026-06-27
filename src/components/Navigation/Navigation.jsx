import { Link, useLocation } from 'react-router-dom'
import styles from './styles.module.css'

import cogIcon from "../../assets/img/cog.svg"
import telegramIcon from "../../assets/img/telegram.svg"
import websiteIcon from "../../assets/img/interface-essential-global-public--streamline-pixel.svg"

const Navigation = () => {
    const location = useLocation();

    const handleSettingsClick = () => {
        if (location.pathname === '/settings') {
            window.location.href = '/';
        }
    };

    return (
        <ul className={styles.navigation}>
            <li id="settings">
                <Link title="Настройки" to="/settings/themes" onClick={handleSettingsClick}>
                    <img src={cogIcon} alt="settings"/>
                </Link>
            </li>
            <li><a title="Телеграм" href="https://t.me/Vlad_THK"><img src={telegramIcon} alt="telegram"/></a></li>
            <li><a title="Владелец" href="https://thk.c6t.ru"><img src={websiteIcon} alt="developer site"/></a></li>
        </ul>
    )
}

export default Navigation