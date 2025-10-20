'use client'

import Header from "@/Componentes/Header";
import Rodapé from "@/Componentes/Rodapé";
import ListaProdutos from "@/Componentes/Lista_Produtos";
import Banner from "@/Componentes/Banner";
import Loading from "@/Componentes/Loading";
import ProductList from "@/Componentes/ProductList";
import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import "./page.module.css"
import api from "@/services/api";

export default function Home() {
  const [produtos, setProdutos] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  
  function loadProdutos(){
  setIsLoading(true);
  api.get("/products")
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
    <Header/>
    <Banner/>
    <ListaProdutos/>
    <Rodapé/>
    {(isLoading) && (<Loading/>)}
    <ProductList produtos={produtos}/>
    </>
  );
}