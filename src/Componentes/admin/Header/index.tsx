import Logo from "@/Componentes/admin/Header_Logo";
import styles from "./styles.module.css";
import { AuthContext } from "@/cotexts/AuthContext";
import { useContext } from "react";

export default function Header() {
  const { logout } = useContext(AuthContext);
  return (
    <>
      <header className={styles.header}>
        <Logo />
        <div>
          <button onClick={logout}>Sair</button>
        </div>
      </header>
    </>
  );
}
