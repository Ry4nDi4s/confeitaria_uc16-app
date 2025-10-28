"use client";

import { createContext, useState, ReactNode } from "react";
import { jwtDecode } from 'jwt-decode';
import api from "@/services/api";

type JwtPayload = {
  sub: string;
  name: string;
  email: string;
};

type User = {
  id: string;
  name: string;
  email: string;
};

type AuthContextType = {
  user: User | null;
  login(email: string, password: string): boolean;
  logout(): void;
  isAuthenticated: boolean;
};

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

type Props = {
  children: ReactNode;
};

export function AuthProvider(props: Props) {
  const [user, setUser] = useState<User | null>(null);

  function login(email: string, password: string): boolean {
    api
      .post("/users/aunt", { email, senha: password })
      .then(function (res) {
        const token = res.data.token;
        localStorage.setItem("token", token);
        const decoded = jwtDecode<JwtPayload>(token);
        setUser({
          id: decoded.sub,
          name: decoded.name,
          email: decoded.email,
        });
        return true;
      })
      .catch(function (e) {
        console.error(e)
      });

      return false;
  }

  function logout(): void {
    localStorage.removeItem("token");
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{ user, login, logout, isAuthenticated: !!user }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

