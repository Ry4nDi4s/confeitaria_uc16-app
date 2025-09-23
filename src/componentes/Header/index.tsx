import Logo from "../Logo"
import Menu from "../Menu"
import "./styles.css"
import "@/componentes/Menu/styles.css"

export default function Header(){
    return(
        <>
        <header className="header">
        <Logo/><Menu/>
        </header>
        </>
    )
}