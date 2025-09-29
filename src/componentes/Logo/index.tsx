import Image from "next/image"
import "./styles.css"

export default function Logo(){
    return(
        <>
        <span className="img">
            <Image src="/images/logo.jpeg" alt="Dani Bolos & Doces" fill style={{objectFit: "contain"}}/>
        </span>
        </>
    )
}