'use client'

import ProductList from "@/componentes/ProductList";
import "./page.css"
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import Loading from "@/componentes/Loading";
import Salvar from "@/componentes/Adicionar";
import Contador from "@/componentes/Contador";
import { ProductPayload } from "@/Model/ProductPayload";


export default function Home() {

    const[produtos, setProdutos] = useState([]);
    let[isLoading, setIsLoading] = useState(true)
    
    function loadProdutos(){
      let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImVtYWlsIjoicnlhbnRpNDNAZ21haWwuY29tIiwibmFtZSI6IlJ5YW4iLCJpYXQiOjE3NTkzNDkxNDksImV4cCI6MTc1OTM3Nzk0OX0.q_CQv4FxI4-WnZ_KyKW7c4e_E0A9NsFgHSKRfEU9qrQ"

    setIsLoading(true);
    axios.get("http://localhost:3000/products",
            {
                headers: { 
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${token}`
                }
            }
    )
    .then(function (response: AxiosResponse){
      setProdutos(response.data)
    })
    .catch(function (){
      alert("Fail")
    })
    .finally(function(){
      setIsLoading(false);
    })};
    
    function postProdutos(payload: ProductPayload) {
      let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImVtYWlsIjoicnlhbnRpNDNAZ21haWwuY29tIiwibmFtZSI6IlJ5YW4iLCJpYXQiOjE3NTkzNDkxNDksImV4cCI6MTc1OTM3Nzk0OX0.q_CQv4FxI4-WnZ_KyKW7c4e_E0A9NsFgHSKRfEU9qrQ";
    
      setIsLoading(true);
    
      axios.post("http://localhost:3000/products", payload, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      .then((response: AxiosResponse) => {
        console.log("Produto salvo com sucesso:", response.data);
        setProdutos(response.data); // Só se a API retornar os produtos atualizados
      })
      .catch(() => {
        alert("Erro ao salvar o produto");
      })
      .finally(() => {
        setIsLoading(false);
      });
    }
    return(
    <>
   
    <h1>Bem-Vindo(a) ao Mercadinho</h1>
    <ProductList produtos={produtos}/>
    <Salvar onSuccess={loadProdutos} onSubmit={postProdutos} />
    <Contador />
    </>
  );
}