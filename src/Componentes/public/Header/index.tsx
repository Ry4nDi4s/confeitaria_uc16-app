import IconCart from "../../../../public/Icons/IconCart";
import IconPerson from "../../../../public/Icons/IconPerson";
import Pesquisa from "../Barra_Busca";

import Logo from "../Header_Logo";
import Menu from "../Menu";
import styles from "./styles.module.css";

export default function Header() {
    return (
        <>
            <header className={styles.header}>
                <Logo />
                <div className={styles.Pesquisa}>
                    <Pesquisa />
                </div>
                <div className={styles.Menu}>
                    <Menu />
                </div>
                <div className={styles.Icones}>
                    <IconCart />
                    <IconPerson />
                </div>
            </header>
        </>
    );
}