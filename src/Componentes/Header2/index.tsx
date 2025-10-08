import Links from "../Links";
import Logo2 from "../Logo2";
import styles from "./styles.module.css";

export default function Header2() {
    return(
        <>
            <header className={styles.header2}>
                <Logo2/>
                <Links/>
            </header>
        </>
    );
}