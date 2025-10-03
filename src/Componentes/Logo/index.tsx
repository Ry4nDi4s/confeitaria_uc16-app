import Image from "next/image"
import styles from "./styles.module.css"

export default function Logo(){
    return(
        <>
        <span className={styles.image}>
            <Image src="/images/logo.jpeg" alt="Dani Bolos & Doces" fill style={{objectFit: "contain"}}/>
        </span>
        </>
    )
}