import Pesquisa from "../Barra_Busca";
import Logo from "../Logo";
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