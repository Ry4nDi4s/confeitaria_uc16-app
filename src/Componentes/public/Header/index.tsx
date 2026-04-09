import { useContext } from "react";
import Icons from "../Icons/Icons";
import Pesquisa from "../Barra_Busca";
import Logo from "../Header_Logo";
import styles from "./styles.module.css";
import { AuthContext } from "@/cotexts/AuthContext";

export default function Header() {
  const { logout } = useContext(AuthContext);

  return (
    <>
      <header className={styles.header}>
        <Logo />
        <div className={styles.Pesquisa}>
          <Pesquisa />
        </div>
        <div className={styles.Icones}>
          <Icons />
        </div>
        <div>
          <button onClick={logout}>Sair</button>
        </div>
      </header>
    </>
  );
}
