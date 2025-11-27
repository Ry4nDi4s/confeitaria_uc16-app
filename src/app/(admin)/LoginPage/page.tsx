'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hoocks/useAuth';
import TextField from '@/Componentes/public/TextField';
import styles from './styles.module.css'
import Link from 'next/link';

export default function LoginUserPage() {
  const auth = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      await auth.login(email, password);

      const user = auth.user;

      if (user && user.groups.includes("ADMIN")) {
        router.push("/Sistema");
      } else {
        router.push("/");
      }
    } catch (error) {
      alert("Erro no login");
    }
  }

  return (
    <main>
      <div className={styles.tela}>
        <form onSubmit={handleSubmit}>
          <div className={styles.login}>
            <img src={"/Imagens/Logo/Logo.png"} />
            <h4>Faça Login na Confeitaria Dani!</h4>
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
            <button type="submit">Entrar</button>
            <hr />
          </div>
        </form>
        <div className={styles.cadastro}>
          <p>Novo aqui?</p>
          <Link href={"/CadastroPage"}>Crie uma conta!</Link>
        </div>
      </div>
    </main>
  );
}
