import Image from "next/image"
import styles from "./styles.module.css"

export default function Logo(){
    return(
        <>
        <span className={styles.image}>
            <Image src="/Imagens/Logo/Logo.png" alt="Dani Bolos & Doces" fill style={{objectFit: "contain"}}/>
        </span>
        </>
    )
}