import { useEffect, useState } from "react";



import styles from "./styles.module.css"

const Theme = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "light"
    );

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>Выбор темы</h2>

            <div className={styles.grid}>
                <button
                    className={`${styles.card} ${
                        theme === "light" ? styles.active : ""
                    }`}
                    onClick={() => setTheme("light")}
                >
                    🌞 Светлая
                </button>

                <button
                    className={`${styles.card} ${
                        theme === "dark" ? styles.active : ""
                    }`}
                    onClick={() => setTheme("dark")}
                >
                    🌙 Тёмная
                </button>

                <button
                    className={`${styles.card} ${
                        theme === "system" ? styles.active : ""
                    }`}
                    onClick={() => setTheme("system")}
                >
                    💻 Системная
                </button>
            </div>
        </div>
    );
}


export default Theme