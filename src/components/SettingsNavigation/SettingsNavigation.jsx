import { Link } from "react-router-dom";

import broomIcon from "../../assets/img/broom-solid.svg";
import thanksIcon from "../../assets/img/book-heart-solid.svg";
import bankIcon from "../../assets/img/bank-solid.svg";

import styles from "./styles.module.css"

const SettingsNavigation = () => {
    const items = [
    { icon: broomIcon, text: "Внешний вид", path: "/settings/theme" },
    { icon: thanksIcon, text: "Благодарности", path: "/settings/thanks" },
    { icon: bankIcon, text: "Условия и этика", path: "/settings/terms" },
    ];

    return (
        <div className={styles.Settings}>
            <span>V0.1</span>
            <h2>Настройки</h2>
                <ul className={styles.Settings__list}>
                    {items.map((item, index) => (
                        <li className={styles.Settings__listItem} key={index}>
                            <Link to={item.path}>
                                <img src={item.icon} />
                                <span>{item.text}</span>
                            </Link>
                        </li>
                    ))}
                </ul>       
        </div>
    )
    
}

export default SettingsNavigation;