'use client'

import Header from "@/Componentes/Header";
import Rodapé from "@/Componentes/Rodapé";
import ListaProdutos from "@/Componentes/Lista_Produtos";
import Banner from "@/Componentes/Banner";
import Loading from "@/Componentes/Loading";
import ProductList from "@/Componentes/ProductList";
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import "./page.module.css"

export default function Home() {
  const[produtos, setProdutos] = useState([]);
  let[isLoading, setIsLoading] = useState(true)
  
  function loadProdutos(){
  setIsLoading(true);
  axios.get("http://localhost:3000/products")
  .then(function (response: AxiosResponse){
    setProdutos(response.data)
  })
  .catch(function (){
    alert("Fail")
  })
  .finally(function(){
    setIsLoading(false);
  })};
  
  useEffect(loadProdutos, []);
    return(
    <>
    <div className={styles.pagina}>
    <Header/>
    <Banner/>
    <ListaProdutos/>
    <Rodapé/>
    {(isLoading) && (<Loading/>)}
    <ProductList produtos={produtos}/>
    </div>
    </>
  );
}

// Usar o Axios no projeto