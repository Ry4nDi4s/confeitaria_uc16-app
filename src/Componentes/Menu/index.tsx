import Link from "next/link";
import styles from "./styles.module.css";

export default function Menu(){
    return(
        <>
        <nav className={styles.menu}>
        <Link href="/">Sobre nós</Link>
        </nav>
        </>
    );
}
