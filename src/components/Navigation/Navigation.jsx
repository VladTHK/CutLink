import styles from './styles.module.css'

import cogIcon from "../../assets/img/cog.svg"
import telegramIcon from "../../assets/img/telegram.svg"
import websiteIcon from "../../assets/img/interface-essential-global-public--streamline-pixel.svg"

const Navigation = () => {
    return (
        <ul className={styles.navigation}>
            <li id="settings"><a title="Настройки" href=""><img src={cogIcon} alt="settings"/></a></li>
            <li><a title="Телеграм" href="https://t.me/Vlad_THK"><img src={telegramIcon} alt="telegram"/></a></li>
            <li><a title="Владелец" href="https://thk.c6t.ru"><img src={websiteIcon} alt="developer site"/></a></li>
        </ul>
    )
}

export default Navigation