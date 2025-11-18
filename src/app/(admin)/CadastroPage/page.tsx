'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { AxiosError } from 'axios';
import { validarCPF, validarEmail, validarSenha, validarTelefone } from '@/validation/validar';
import TextField from '@/Componentes/public/TextField';
import Link from 'next/link';
import api from '@/services/api';
import styles from './styles.module.css'

export default function CadastroPage() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [CPF, setCPF] = useState('');

  function cadastrar(e: React.FormEvent) {
    e.preventDefault();

    if (!validarCPF(CPF)) {
      alert("CPF inválido")
      return;
    }

    if (!validarEmail(email)) {
      alert("Email inválido")
      return;
    }
    if (!validarSenha(password)) {
      alert("Senha inválida")
      return;
    }
    if (!validarTelefone(phone)) {
      alert("Telefone inválido")
      return;
    }

    api.post("/users",
      {
        email,
        password,
        name,
        phone,
        CPF
      },
    ).then(function () {
      alert("Cadastro com sucesso");
      router.push('/LoginUserPage');
    })
      .catch(function (error: AxiosError) {
        console.error("Erro ao enviar:", error);
        alert("Erro no envio do cadastro.");
      });
  }
  return (
    <main>
      <div className={styles.root}>
        <div className={styles.painelImagem}>
          <div className={styles.recado}>
            <p>Crie sua conta gratuitamente</p>
            <p>Explore os principais recursos da Confeitaria Dani!</p>
          </div>
          <img src={"/Imagens/Logo/Logo.png"} style={{ width: 200, height: 200 }} />
        </div>
        <form className={styles.painelForm} onSubmit={cadastrar}>
          <TextField
            label='Email:'
            type="email"
            text={email}
            onChange={setEmail}
            required
            autoComplete="email"
          />

          <TextField
            label='Senha:'
            type="password"
            text={password}
            onChange={setPassword}
            required
            autoComplete="current-password"
          />

          <TextField
            label='Nome Completo:'
            type="name"
            text={name}
            onChange={setName}
            required
            autoComplete="name"
          />

          <TextField
            label='Telefone:'
            type="phone"
            text={phone}
            onChange={setPhone}
            required
            autoComplete="phone"
          />
          <TextField
            label='CPF:'
            type="text"
            text={CPF}
            onChange={setCPF}
            required
            autoComplete="CPF"
          />
          <button style={{ width: 300, backgroundColor: "black", color: "white" }} type="submit">Crie uma conta!</button>
          <div className={styles.login}>
            <p>Já possui uma conta?</p><Link href={"/LoginUserPage"}>Entre Agora!</Link>
          </div>
        </form>
      </div>
    </main>
  );
}