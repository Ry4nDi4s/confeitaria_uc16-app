import Image from "next/image"
import styles from "./styles.module.css"

export default function Logo() {
    return (
        <>
        <div className={styles.admin}>
            <span>
                <Image src="/Imagens/Logo/Logo.png" alt="Dani Bolos & Doces" width={100} height={100}/>
            </span>
                <h4>Administrador</h4>
        </div>
        </>
    );
}