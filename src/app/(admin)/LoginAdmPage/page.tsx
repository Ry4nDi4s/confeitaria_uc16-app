'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hoocks/useAuthAdm';
import TextField from '@/Componentes/public/TextField';
import styles from './styles.module.css'

export default function LoginUserPage() {
  const auth = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      await auth.login(email, password);
      
      if (!auth.isAdmin) {
        alert("Acesso restrito apenas para administradores!");
        return;
      }
    
      router.push('/Sistema');
    } catch (error) {
      alert("Erro ao fazer login");
    }
  }
  return (
    <main style={{ maxWidth: 400, margin: '40px auto' }}>
      <form className={styles.login} onSubmit={handleSubmit}>
        <img src={"/Imagens/Logo/Logo.png"} />
        <h1>Login</h1>
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
        <button style={{ margin: '2%', marginLeft: '2.4%' }} type="submit" >Entrar</button>
      </form>
    </main>
  );
}
