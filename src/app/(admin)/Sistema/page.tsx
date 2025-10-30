'use client'

import OffCanvasADM from '@/Componentes/admin/OffCanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import Header from '@/Componentes/admin/Header';

export default function SistemaPage() {

      return(
      <>
      <div>
      <Header/>
      <OffCanvasADM/>
      </div>
      </>
    );
}
