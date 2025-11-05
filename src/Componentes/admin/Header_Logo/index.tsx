import Image from "next/image"
import styles from "./styles.module.css"

export default function Logo() {
    return (
        <>
            <span className={styles.Imagem}>
                <Image src="/Imagens/Logo/Logo.png" alt="Dani Bolos & Doces" width={100} height={100}/>
                <h4>Administrador</h4>
            </span>
        </>
    );
}