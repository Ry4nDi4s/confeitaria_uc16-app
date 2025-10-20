import Link from "next/link";
import styles from "./styles.module.css";
import { FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Links() {
  return (
    <div className={styles.whats}>
      <Link href="https://wa.me/5516999999999" className={styles.item} target="_blank">
        <FaWhatsapp className={styles.icon} />
        <span>Fale por Whatsapp: <br/> (16) 99999-9999</span>
      </Link>

      <Link href="https://instagram.com/dani_bolos_doces" className={styles.item} target="_blank">
        <FaInstagram className={styles.icon} />
        <span>Fale pelo Instagram<br/>dani_bolos_doces</span>
      </Link>

      <Link href="email:danibolos@hotmail.com" className={styles.item}>
        <FaEnvelope className={styles.icon}/>
        <span>Fale pelo email<br/>danibolos@hotmail.com</span>
      </Link>
    </div>
  );
}
