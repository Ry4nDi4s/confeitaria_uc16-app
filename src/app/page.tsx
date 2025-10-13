'use client'

import Header from "@/Componentes/Header";
import styles from "./styles.module.css";
import "./page.module.css"
import Rodapé from "@/Componentes/Rodapé";
import ListaProdutos from "@/Componentes/Lista_Produtos";
import Banner from "@/Componentes/Banner";

export default function Home() {
    return(
    <>
    <div className={styles.pagina}>
    <Header/>
    <Banner/>
    <ListaProdutos/>
    <Rodapé/>
    </div>
    </>
  );
}

// Usar o Axios no projeto