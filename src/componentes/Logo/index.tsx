import Image from "next/image"
import "./styles.css"

export default function Logo(){
    return(
        <>
        <span className="img">
            <Image src="/images/mercado.jpeg" alt="logo do mercadinho" fill style={{objectFit: "contain"}}/>
        </span>
        </>
    )
}