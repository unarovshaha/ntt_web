import {motion} from "framer-motion";
import styles from "./loader.module.sass";

export const Loader = () => {
    return (
        <motion.div
            className={styles.loader}
            animate={{rotate: 360}}
            transition={{repeat: Infinity, duration: 1, ease: "linear"}}
        />
    );
};
