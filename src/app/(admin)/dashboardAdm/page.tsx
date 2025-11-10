'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hoocks/useAuthAdm';

export default function DashboardPage() {
  const { user, isAuthenticated, logout } = useAuth();
  const router = useRouter();

  useEffect(function () {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  if (!user) return null;

  return (
    <main style={{ maxWidth: 600, margin: '40px auto' }}>
      <h1>Bem-vindo, {user.name}!</h1>
      <p>Seu e-mail: {user.email}</p>
      <button onClick={logout}>Sair</button>
    </main>
  );
}