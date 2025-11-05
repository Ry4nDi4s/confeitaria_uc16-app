"use client";

// ADICIONAR CHECAGEM DE GRUPO DO ADMINISTRADOR

import { createContext, useState, ReactNode, useEffect } from "react";
import { jwtDecode } from 'jwt-decode';
import api from "@/services/api";
import AuthRepository from "@/repositories/auth";

type JwtPayload = {
  sub: string;
  name: string;
  email: string;
  groups: string;
};

type User = {
  id: string;
  name: string;
  email: string;
  groups: string;
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

  const isAdmin = user?.groups === "ADMIN" ? true : false;

  useEffect(function () {
    const token = AuthRepository.getToken();
    try {
      makeUserFromToken(token);
    } catch (error) {
      AuthRepository.setToken(null);
    }
  }, []);

  function makeUserFromToken(token: string | null) {
    if (token != null) {
      const decoded = jwtDecode<JwtPayload>(token);
      setUser({
        id: decoded.sub,
        name: decoded.name,
        email: decoded.email,
        groups: decoded.groups
      });
    }
  }

  async function login(email: string, password: string) {
    try{
      const res = await api.post("/users/auntAdmin", { email, senha: password, groups: "ADMIN" });
      const token = res.data.token;
      AuthRepository.setToken(token);
      makeUserFromToken(token);
  } catch(error){
    console.error("Erro no login", error)
    throw error
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

