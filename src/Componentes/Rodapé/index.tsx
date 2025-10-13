import Links from "../Links";
import Logo2 from "../Rodapé_Logo";
import styles from "./styles.module.css";

export default function Rodapé() {
    return(
        <>
            <header className={styles.header2}>
                <Logo2/>
                <Links/>
            </header>
        </>
    );
}