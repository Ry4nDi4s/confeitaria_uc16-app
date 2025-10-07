'use client'

import Header from "@/Componentes/Header";
import styles from "./styles.module.css";
import "./page.module.css"
import Header2 from "@/Componentes/Header2";
import ListaProdutos from "@/Componentes/Lista_Produtos";

export default function Home() {
    return(
    <>
    <div className={styles.pagina}>
    <Header/>
    
    <ListaProdutos/>
    <Header2/>
    </div>
    </>
  );
}