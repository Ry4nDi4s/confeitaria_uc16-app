"use client";

import "@/componentes/Adicionar/styles.css";
import Textfield from "@/componentes/TextField/page";
import axios from "axios";
import { useState } from "react";

export default function Salvar() {
    const [mostrarForm, setMostrarForm] = useState(false);
    const [nome, setNome] = useState('');
    const [fotourl, setFoto] = useState('');
    const [preco, setPreco] = useState('');

    function mostrarFormulario() {
        setMostrarForm(true);
    }
    async function cadastrar(e: React.FormEvent) {
        e.preventDefault();
        try {
            await axios.post("https://produtos-server.onrender.com/api/produtos",
                {
                    nome,
                    fotourl,
                    preco: Number(preco)
                },
                {
                    headers: { 'Content-Type': 'application/json' }
                }
            );
            alert("Produto enviado com sucesso!");
        } catch (error) {
            console.error("Erro ao enviar:", error);
            alert("Erro ao enviar o produto.");
        }
    }

    return (
        <>
            {mostrarForm ? (
                <form className="text" onSubmit={cadastrar}>
                    <Textfield label="Produto" type="text" onChange={setNome} text={nome}/>
                    <Textfield label="Imagem" type="text" onChange={setFoto} text={fotourl}/>
                    <Textfield label="Preço" type="text" onChange={setPreco} text={preco}/>
                    <button type="submit">Salvar</button>
                </form>
            ) : (
                <button onClick={mostrarFormulario}>Adicionar Produtos</button>
            )}
        </>
    );
}
