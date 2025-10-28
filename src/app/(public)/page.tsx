'use client'

import Header from "@/Componentes/public/Header";
import Rodapé from "@/Componentes/public/Rodapé";
import Banner from "@/Componentes/public/Banner";
import Cartões from "@/Componentes/public/Cartões";
import styles from "./styles.module.css"

export default function Home() {
    return (
    <>
      <Header />
      <Banner />
      <div className={styles.produtos}>
      <Cartões nome={"Bolos Fixos"} foto={"/Imagens/produtos/bolo1.png"} link={"/BolosFixosPage"}/>
      <Cartões nome={"Docinhos"} foto={"/Imagens/produtos/bolo1.png"} link={"/DocinhosPage"}/>
      <Cartões nome={"Bolos Personalizado"} foto={"/Imagens/produtos/bolo1.png"} link={"/BolosPersonalizadosPage"}/>
      </div>
      <Rodapé />
    </>
  );
}