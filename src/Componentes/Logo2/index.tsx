import Image from "next/image"
import styles from "./styles.module.css"

export default function Logo2(){
    return(
        <>
        <span className={styles.image2}>
            <Image src="/Imagens/Logo/Logo.png" alt="Dani Bolos & Doces" fill style={{objectFit: "contain"}}/>
        </span>
        </>
    )
}