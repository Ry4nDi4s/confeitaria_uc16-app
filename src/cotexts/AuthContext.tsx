"use client";

import { createContext, useState, ReactNode, useEffect } from "react";
import { jwtDecode } from 'jwt-decode';
import api from "@/services/api";
import AuthRepository from "@/repositories/auth";

type JwtPayload = {
  sub: string;
  name: string;
  email: string;
  groups: string[];
};

type User = {
  id: string;
  name: string;
  email: string;
  groups: string[];
};

type AuthContextType = {
  user: User | null;
  login(email: string, password: string): Promise<void>;
  logout(): void;
  isAuthenticated: boolean;
  isAdmin: boolean;
};

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

type Props = {
  children: ReactNode;
};

export function AuthProvider(props: Props) {
  const [user, setUser] = useState<User | null>(null);

  const isAdmin = user?.groups?.includes("ADMIN") ?? false;

  useEffect(function () {
    const token = AuthRepository.getToken();
    try {
      setUser(getUserFromToken(token));
    } catch (error) {
      AuthRepository.setToken(null);
    }
  }, []);

  function getUserFromToken(token: string | null): User | null {
    if (token != null) {
      const decoded = jwtDecode<JwtPayload>(token);
      return {
        id: decoded.sub,
        name: decoded.name,
        email: decoded.email,
        groups: Array.isArray(decoded.groups)
          ? decoded.groups
          : [decoded.groups]
      };
    } else {
      return null;
    }
  }

  function setUserFromToken(token: string | null) {
    const user = getUserFromToken(token);
    if (user == null) {
      AuthRepository.setToken(null);
    } else {
      AuthRepository.setToken(token);
    }
    setUser(user);
  }

  async function login(email: string, password: string) {
    try {
      const res = await api.post("/users/aunt", { email, senha: password });
      const token = res.data.token;
      setUserFromToken(token);
    } catch (error) {
      console.error("Erro no login:", error);
      throw error;
    }
  }

  function logout(): void {
    AuthRepository.setToken(null);
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{
      user,
      login,
      logout,
      isAuthenticated: !!user,
      isAdmin
    }}>
      {props.children}
    </AuthContext.Provider>
  );

}




///  ADM

/*
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

*/