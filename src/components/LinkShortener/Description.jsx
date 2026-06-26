import logo from '../../assets/img/logo_cutlink.png';
import styles from './styles.module.css';

const Description = () => {
    return (
        <div className={styles.description}>
            <img src={logo} alt="logo" />
            <p>
                Помогите клиентам мгновенно находить вашу страницу онлайн.
                Короткие ссылки избавляют от длинных URL, экономя место и
                повышая кликабельность в соцсетях и email-рассылках.
            </p>
        </div>
    );
};

export default Description;