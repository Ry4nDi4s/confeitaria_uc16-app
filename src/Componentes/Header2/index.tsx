import Links from "../Links";
import Logo from "../Logo";
import styles from "./styles.module.css";

export default function Header2() {
    return(
        <>
            <header className={styles.header2}>
                <Logo/>
                <Links/>
            </header>
        </>
    );
}