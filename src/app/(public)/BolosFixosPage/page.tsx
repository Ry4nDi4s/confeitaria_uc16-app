'use client'

import Loading from "@/Componentes/public/Loading";
import ProductList from "@/Componentes/admin/ProductList";
import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import api from "@/services/api";


export default function BolosFixosPage() {
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
    {(isLoading) && (<Loading/>)}
    <ProductList produtos={produtos}/>
    </>
  );
}