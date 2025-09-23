import Link from "next/link"

export default function Menu(){
    return(
        <>
        <nav>
            <Link href="" className="menu" rel="noopener noreferrer">Home</Link>
            <Link href="/Contato" target="_blank" className="menu" rel="noopener noreferrer">Contato</Link>
            <Link href="https://www.mercadolivre.com.br/?msockid=1e839e1d83346dea22608bef82cf6c67" target="_blank"  rel="noopener noreferrer" className="menu">Mercado Livre</Link>
        </nav>
        </>
    )
}