import Icons from "../Icons/Icons";
import Pesquisa from "../Barra_Busca";
import Logo from "../Header_Logo";
import styles from "./styles.module.css";

export default function Header() {
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
      </header>
    </>
  );
}
