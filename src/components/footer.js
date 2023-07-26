import styles from "./main/main.module.css";
function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <div className={styles.footer}>
            Всі права захищені @ {currentYear}
        </div>
    );
}

export default Footer