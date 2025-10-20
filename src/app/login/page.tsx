'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hoocks/useAuth';
import TextField from '@/Componentes/public/TextField';


export default function LoginPage() {
  const auth = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e: React.FormEvent): void {
    e.preventDefault();
    auth.login(email, password);
    router.push('/dashboard');
  }

  return (
    <main style={{ maxWidth: 400, margin: '40px auto' }}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Entrar</button>
      </form>
    </main>
  );
}