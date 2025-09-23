'use client'

import ProductList from "@/componentes/ProductList";
import "./page.css"
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import Loading from "@/componentes/Loading";
import Salvar from "@/componentes/Adicionar";

export default function Home() {

    const[produtos, setProdutos] = useState([]);
    let[isLoading, setIsLoading] = useState(true)
    
    function loadProdutos(){
    setIsLoading(true);
    axios.get("https://produtos-server.onrender.com/api/produtos")
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
    {(isLoading) && (<Loading/>)}
    <h1>Bem-Vindo(a) ao Mercadinho</h1>
    <ProductList produtos={produtos}/>
    <Salvar/>
    </>
  );
}