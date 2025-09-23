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

    function cadastrar(){
        try {
            const response = axios.post("https://produtos-server.onrender.com/api/produtos",
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
                    <Textfield label="Produto" type="text" onChange={setNome} />
                    <Textfield label="Imagem" type="text" onChange={setFoto} />
                    <Textfield label="Preço" type="text" onChange={setPreco} />
                    <button type="submit">Salvar</button>
                </form>
            ) : (
                <button onClick={mostrarFormulario}>Adicionar Produtos</button>
            )}
        </>
    );
}
