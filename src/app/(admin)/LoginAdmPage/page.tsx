'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hoocks/useAuth';
import TextField from '@/Componentes/public/TextField';
import styles from './styles.module.css'

export default function LoginUserPage() {
  const auth = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

    function handleSubmit(e: React.FormEvent): void {
        e.preventDefault();

        if (auth.login(email, password)) {
            router.push('/');
        } else  {
            alert("ALERT");
        }
    }

  return (
    <main  style={{ maxWidth: 400, margin: '40px auto' }}>
      <h1 style={{textAlign:"center"}}>Login</h1>
      <form className={styles.login}onSubmit={handleSubmit}>
        <TextField
          label="E-mail"
          type="email"
          text={email}
          onChange={setEmail}
          required
          autoComplete="email"
        />
        <TextField
          label="Senha"
          type="password"
          text={password}
          onChange={setPassword}
          required
          autoComplete="current-password"
        />
        <button style={{ margin: '3%', marginLeft: '40%'}} type="submit" >Entrar</button>
      </form>
    </main>
  );
}
