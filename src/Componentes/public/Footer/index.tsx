import Links from "../Links";
import Footer_Logo from "../Footer_Logo";
import styles from "./styles.module.css";

export default function Rodapé() {
    return(
        <>
            <div className={styles.footer}>
                <Footer_Logo/>
                <Links/>
            </div>
        </>
    );
}