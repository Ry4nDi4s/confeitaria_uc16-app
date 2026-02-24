import Logo from "@/Componentes/admin/Header_Logo";
import styles from "./styles.module.css";

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <Logo />
      </header>
    </>
  );
}
