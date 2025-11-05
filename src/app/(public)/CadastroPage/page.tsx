"use client";

import styles from "./styles.module.css"
import TextField from "@/Componentes/public/TextField";
import { useState } from "react";


export default function Cadastro() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [CPF, setCPF] = useState('');

    return(
        <>
        <form className={styles.cadastro}>
        <img src={"/Imagens/Logo/Logo.png"}/>
        <h1>Cadastro</h1>
        <TextField
            type="name"
            text={name}
            onChange={setName}
            required
            autoComplete="name"
        />
        <TextField
            type="email"
            text={email}
            onChange={setEmail}
            required
            autoComplete="email"
        />
        <TextField
            type="password"
            text={password}
            onChange={setPassword}
            required
            autoComplete="current-password"
        />
        <TextField
            type="phone"
            text={phone}
            onChange={setPhone}
            required
            autoComplete="phone"
        />
        <TextField
            type="CPF"
            text={CPF}
            onChange={setCPF}
            required
            autoComplete="CPF"
        />
        <button>Cadastrar</button>
        </form>
        </>
    );
}