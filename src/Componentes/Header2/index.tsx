import Contato from "../Contato";
import styles from "./styles.module.css";

export default function Header2() {
    return(
        <>
            <header className={styles.header2}>
                <Contato/>
            </header>
        </>
    );
}