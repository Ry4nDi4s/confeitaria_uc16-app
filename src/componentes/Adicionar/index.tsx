"use client";

import "@/componentes/Adicionar/styles.css";
import Textfield from "@/componentes/TextField/page";
import axios, { AxiosError } from "axios";
import { useState } from "react";

type Props = {
    onSuccess(): void
}

export default function Salvar(props: Props) {
    const [mostrarForm, setMostrarForm] = useState(false);
    const [nome, setNome] = useState('');
    const [fotoUrl, setFoto] = useState('');
    const [preco, setPreco] = useState('');

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
        axios.post("https://produtos-server.onrender.com/api/produtos",
            {
                nome,
                fotoUrl,
                preco: Number(preco)
            },
            {
                headers: { 'Content-Type': 'application/json' }
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
                    <button type="submit">Salvar</button>
                </form>
            ) : (
                <button onClick={mostrarFormulario}>Adicionar Produtos</button>
            )}
        </>
    );
}
