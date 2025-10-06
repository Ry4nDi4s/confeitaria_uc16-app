import Image from "next/image"
import styles from "./styles.module.css"

export default function Banner(){
    return(
        <>
        <span className={styles.image}>
            <Image src="/images/banner/Banner - 1" alt="Dani Bolos & Doces" fill style={{objectFit: "contain"}}/>
        </span>
        </>
    )
}