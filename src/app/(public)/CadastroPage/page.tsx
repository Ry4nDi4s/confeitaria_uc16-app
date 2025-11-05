'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hoocks/useAuth';
import TextField from '@/Componentes/public/TextField';
import styles from './styles.module.css'
import Link from 'next/link';

export default function CadastroPage() {
  const auth = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [CPF, setCPF] = useState('');


  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      router.push('/LoginUserPage');
    }
    catch (error) {
      alert("ALERT");
    }
  }

  return (
    <main style={{ maxWidth: 400, margin: '40px auto' }}>
      <form className={styles.fundo}><p>ㅤ</p></form>
      <form className={styles.desing}><p>ㅤ</p></form>
      <div className={styles.login}>
        <p>Já possui uma conta?</p><Link href={"/LoginUserPage"}>Faça Login!</Link>
      </div>
      <form className={styles.cadastro} onSubmit={handleSubmit}>
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
          type="CPF"
          text={CPF}
          onChange={setCPF}
          required
          autoComplete="CPF"
        />
      <button style={{width:400, backgroundColor:"black", color:"white"}} type="submit" >Entrar</button>
      </form>
    </main>
  );
}

// <button style={{ margin: '2%', marginLeft: '2.4%'}} type="submit" >Entrar</button>
