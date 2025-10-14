import Logo from "@/Componentes/Header_Logo";
import styles from "./styles.module.css";
import Menu_ADM from "../Menu_ADM";

export default function Header(){
    return(
        <>
        <header className={styles.header}>
            <Logo/>
            <Menu_ADM/>
        </header>
        </>
    );
}