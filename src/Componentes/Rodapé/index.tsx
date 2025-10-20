import Links from "../Links";
import Logo2 from "../Rodapé_Logo";
import styles from "./styles.module.css";

export default function Rodapé() {
    return(
        <>
            <footer className={styles.footer}>
                <Logo2/>
                <Links/>
            </footer>
        </>
    );
}