'use client'

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import Header from '@/Componentes/admin/Header';
import TabsSistema from '@/Componentes/admin/Tabs';

export default function SistemaPage() {

  return (
    <>
      <Header />
      <TabsSistema/>
    </>
  );
}
