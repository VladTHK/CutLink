import { useState } from "react";

import styles from "./styles.module.css";

const Terms = () => {
    const [tab, setTab] = useState("privacy");


    const content = {
        privacy: (
            <div>
                <h1 className={styles.title}>Политика конфиденциальности</h1>

                <h2 className={styles.indent}>Общие положения</h2>

                <p className={styles.text}>
                    Сервис CutLink не требует регистрации и не собирает персональные данные пользователей,
                    такие как имя или адрес электронной почты.
                </p>

                <h2 className={styles.indent}>Какие данные мы можем обрабатывать</h2>
                <ul className={styles.list}>
                    <li>введённые пользователем ссылки для их сокращения</li>
                    <li>техническая информация браузера (IP, устройство, тип браузера)</li>
                    <li>время и дата обращения к сервису</li>
                </ul>

                <h2 className={styles.indent}>Использование данных</h2>
                <p className={styles.text}>
                    Данные используются исключительно для работы сервиса, создания коротких ссылок
                    и обеспечения стабильной работы приложения.
                </p>

                <h2 className={styles.indent}>Cookies</h2>
                <p className={styles.text}>
                    Сервис может использовать cookies для улучшения пользовательского опыта.
                    Пользователь может отключить их в настройках браузера.
                </p>

                <h2 className={styles.indent}>Передача третьим лицам</h2>
                <p className={styles.text}>
                    Мы не продаём и не передаём данные пользователей третьим лицам,
                    кроме случаев, предусмотренных законом.
                </p>

                <h2 className={styles.indent}>Безопасность</h2>
                <p className={styles.text}>
                    Мы принимаем меры для защиты данных, однако не можем гарантировать абсолютную безопасность
                    передачи информации через интернет.
                </p>
            </div>
        ),

        terms: (
            <div>
                <h1 className={styles.title}>Условия использования</h1>

                <h2 className={styles.indent}>Общие положения</h2>
                <p className={styles.text}>
                    Используя CutLink, пользователь соглашается с настоящими условиями.
                    Сервис предоставляется "как есть".
                </p>

                <h2 className={styles.indent}>Запрещено использовать сервис для</h2>
                <ul className={styles.list}>
                    <li>фишинга и мошенничества</li>
                    <li>распространения вредоносных ссылок или вирусов</li>
                    <li>нарушения авторских прав</li>
                    <li>незаконной деятельности</li>
                </ul>

                <h2 className={styles.indent}>Ограничение ответственности</h2>
                <p className={styles.text}>
                    Мы не несем ответственности за содержимое сайтов, на которые ведут сокращённые ссылки,
                    а также за возможные убытки пользователей.
                </p>

                <h2 className={styles.indent}>Блокировка ссылок</h2>
                <p className={styles.text}>
                    Администрация может удалить или заблокировать ссылки,
                    которые нарушают правила сервиса или законодательство.
                </p>

                <h2 className={styles.indent}>Изменения условий</h2>
                <p className={styles.text}>
                    Условия могут быть изменены в любое время без предварительного уведомления.
                    Продолжение использования сервиса означает согласие с обновлениями.
                </p>
            </div>
        ),
    };

    return (
        <div className={styles.con}>
            <div className={styles.buttons}>
                <button className={`${styles.privacy} ${styles.button} ${tab === "privacy" ? styles.active : ""}`} onClick={() => setTab("privacy")}>
                    Политика конфиденциальности
                </button>

                <button className={`${styles.terms} ${styles.button} ${tab === "terms" ? styles.active : ""}`} onClick={() => setTab("terms")}>
                    Условия использования
                </button>
            </div>

            <div key={tab} className={styles.fadeIn}>
                {content[tab]}
            </div>
        </div>
    );
};

export default Terms;