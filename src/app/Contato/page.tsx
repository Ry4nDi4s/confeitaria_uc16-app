'use client';

import Textfield from "@/componentes/TextField/page"
import "./styles.css"

export default function Contato(){
    let nome = "";
    let email = "";
    let assunto = "";
    let mensagem = "";

    function botaoEnviar(){
        alert(`Nome: ${nome}, E-mail: ${email}, Assunto: ${assunto}, Mensagem: ${mensagem}`);
    }

    function handleNomeChange(texto: string){
        nome = texto
    }
    function handleEmailChange(texto: string){
        email = texto
    }
    function handleAssChange(texto: string){
        assunto = texto
    }
    function handleMenChange(texto: string){
        mensagem = texto
    }

    return(
        <>
        <section className={"posicao"}>
        <form className={"fundo"} action={""}>
        <Textfield label="Nome" type="text" onChange={handleNomeChange} text={"nome"}/>
        <Textfield label="Email" type="email" onChange={handleEmailChange} text={"email"}/>
        <Textfield label="Assunto" type="text" onChange={handleAssChange} text={"assunto"}/>
        <Textfield label="Mensagem" type="text" multiline={true} onChange={handleMenChange} text={"mensagem"}/>
        <button onClick={botaoEnviar}>Enviar</button>
        </form>
        </section>
        </>
    )
}