import Link from "next/link";
import styles from "./styles.module.css";

export default function Menu(){
    return(
        <>
        <nav className={styles.menu}>
        <div id={styles.barraPesquisa}>
        <input type="text" className={styles.campoPesquisa} placeholder="Buscar..."/>
        <button className={styles.botaoPesquisa}>Pesquisar</button>
        </div>
        <Link href="/">Sobre nós</Link>
        <Link href="/contato" target="_blank">Contato</Link>
        </nav>
        </>
    );
}