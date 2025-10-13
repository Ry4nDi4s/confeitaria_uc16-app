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
    const [name, setNome] = useState('');
    const [foto, setFoto] = useState('');
    const [preco, setPreco] = useState('');
    const [description, setDescription] = useState('');
    const [quantify, setQuantify] = useState('');
    const [stock, setStock] = useState('');
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
        axios.post("http://localhost:3000/products",
            {
                name,
                foto,
                preco: Number(preco),
                description,
                quantify: Number(quantify),
                stock: Number(stock),
                maturity
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
                    <Textfield label="Produto" type="text" onChange={setNome} text={name}/>
                    <Textfield label="Imagem" type="text" onChange={setFoto} text={foto}/>
                    <Textfield label="Preço" type="text" onChange={setPreco} text={preco}/>
                    <Textfield label="description" type="text" onChange={setDescription} text={description}/>
                    <Textfield label="quantify" type="text" onChange={setQuantify} text={quantify}/>
                    <Textfield label="stock" type="text" onChange={setStock} text={stock}/>
                    <Textfield label="maturity" type="text" onChange={setmaturity} text={maturity}/>
                    <button type="submit">Salvar</button>
                </form>
            ) : (
                <button onClick={mostrarFormulario}>Adicionar Produtos</button>
            )}
        </>
    );
}
