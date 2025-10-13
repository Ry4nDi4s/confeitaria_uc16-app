import Pesquisa from "../Barra_Busca";
import Logo from "../Header_Logo";
import Menu from "../Menu";
import styles from "./styles.module.css";

export default function Header(){
    return(
        <>
        <header className={styles.header}>
            <Logo/>
            <Pesquisa/>
            <Menu/>
        </header>
        </>
    );
}