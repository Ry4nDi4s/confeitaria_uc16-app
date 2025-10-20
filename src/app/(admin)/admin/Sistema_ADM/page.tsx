'use client'

import Salvar from '@/Componentes/admin/Adicionar';
import ListaProdutos from '@/Componentes/Lista_Produtos';
import Loading from '@/Componentes/public/Loading';
import ProductList from '@/Componentes/public/ProductList';
import axios, { AxiosResponse } from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';

export default function SistemaPage() {
    const [produtos, setProdutos] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    
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
      <div>
        <h1>Produtos</h1>
      <ListaProdutos/>
      {(isLoading) && (<Loading/>)}
      <ProductList produtos={produtos}/>
      <Salvar onSuccess={loadProdutos}/>
      </div>
      </>
    );
}
