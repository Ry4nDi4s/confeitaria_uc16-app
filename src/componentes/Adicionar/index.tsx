"use client";

import "@/componentes/Adicionar/styles.css";
import Textfield from "@/componentes/TextField/page";
import { ProductPayload } from "@/Model/ProductPayload";
import axios, { AxiosError } from "axios";
import { useState } from "react";
type Props = {
    onSuccess(): void
    onSubmit?(payload: ProductPayload): void

}

export default function Salvar(props: Props) {
    const [mostrarForm, setMostrarForm] = useState(false);
    const [nome, setNome] = useState('');
    const [fotoUrl, setFoto] = useState('');
    const [preco, setPreco] = useState('');
    const [description, setdes] = useState('');
    const [quantify, setquanty] = useState('');
    const [stock, setstock] = useState('');
    const [maturity, setmaturity] = useState('');
    

    function mostrarFormulario() {
        setMostrarForm(true);
    }

    function sucesso() {
        alert("Produto enviado com sucesso!");
        props.onSuccess();
    }

    function falha(error: AxiosError) {
        console.error("Erro ao enviar:", error);
            alert("Erro ao enviar o produto.");
    }

    function cadastrar(e: React.FormEvent) {
        e.preventDefault();
        let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImVtYWlsIjoicnlhbnRpNDNAZ21haWwuY29tIiwibmFtZSI6IlJ5YW4iLCJpYXQiOjE3NTkzNDkxNDksImV4cCI6MTc1OTM3Nzk0OX0.q_CQv4FxI4-WnZ_KyKW7c4e_E0A9NsFgHSKRfEU9qrQ"
        axios.post("http://localhost:3000/products",
            {
                nome,
                fotoUrl,
                preco: Number(preco),
                description,
                quantify: Number(quantify),
                stock: Number(quantify),
                maturity  
            },
            {
                headers: { 'Content-Type': 'application/json', 
                    'Authorization': `Bearer ${token}`
                }
            }
        ).then(sucesso)
        .catch(falha);
    }
    return (
        <>
            {mostrarForm ? (
                <form className="text" onSubmit={cadastrar}>
                    <Textfield label="Produto" type="text" onChange={setNome} text={nome}/>
                    <Textfield label="Imagem" type="text" onChange={setFoto} text={fotoUrl}/>
                    <Textfield label="Preço" type="text" onChange={setPreco} text={preco}/>
                    <Textfield label="Descrição" type="text" onChange={setdes} text={description}/>
                    <Textfield label="Quantidade" type="text" onChange={setquanty} text={quantify}/>
                    <Textfield label="Armazem" type="text" onChange={setstock} text={stock}/>
                    <Textfield label="Validade" type="text" onChange={setmaturity} text={maturity}/>
                    <button type="submit">Salvar</button>
                </form>
            ) : (
                <button onClick={mostrarFormulario}>Adicionar Produtos</button>
            )}
        </>
    );
}
