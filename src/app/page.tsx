'use client'

import Banner from "@/Componentes/Banner";
import Header from "@/Componentes/Header";
import styles from "./styles.module.css";
import "./page.module.css"
import Header2 from "@/Componentes/Header2";


export default function Home() {
    return(
    <>
    <div className={styles.pagina}>
    <Header/>
    <Banner/>
    <Header2/>
    </div>
    </>
  );
}