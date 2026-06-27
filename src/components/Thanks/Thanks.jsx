import styles from "./styles.module.css"

const Thanks = () => {
    return (
        <div className={styles.Thanks}>
            <h1 className={styles.title}>Благодарность</h1>
            
            <h3 className={styles.indent}>От разработчика:</h3><br/>
            <p className={styles.text}>Данный проект я сделал в целях обучения и изучения React, он не идеален. рад вашему feedback'у </p><br/>
            <p className={styles.text}>Идею для оформления взял у <a href="https://cobalt.tools/">https://cobalt.tools/</a> ♥ </p> <br/>
            <p className={styles.text}>Проект лежит в публичном доступе у меня на гитхабе <a href="https://github.com/VladTHK/CutLink">https://github.com/VladTHK/CutLink</a> </p>
        </div>
    )
}


export default Thanks