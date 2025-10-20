import Link from "next/link";
import styles from "./styles.module.css";

export default function Menu_ADM(){
    return(
        <>
        <Link className={styles.menu} href="/">Sobre nós</Link>
        <Link className={styles.menu} href="/contato" target="_blank">Contato</Link>
        <Link className={styles.menu} href="../admin/Sistema_ADM" target="_blank">Gerenciar Sistema</Link>
        </>
    );
}