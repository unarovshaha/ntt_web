
import styles from "./loader.module.sass";

export const Loader = () => {
    return (
        <div className={styles.loaderBox}>
            <div className={styles.loader}></div>
        </div>

    );
};
