"use client";

import Produto from "@/Model/TiposProdutos";
import api from "@/services/api";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductList from "@/Componentes/public/ProductList";
import { Toast } from "react-bootstrap";

export default function CardapioPage() {
  const { slugCategoria } = useParams();
  const [products, setProducts] = useState<Produto[]>([]);

  const [toastShow, setToastShow] = useState(false);
  const [toastTitle, setToastTitle] = useState("");
  const [toastText, setToastText] = useState("");

  function showToast(title: string, text: string) {
    setToastTitle(title);
    setToastText(text);
    setToastShow(true);
  }

  useEffect(function () {
    api
      .get(`/categories/by-slug/${slugCategoria}/products`)
      .then(function (res) {
        setProducts(res.data);
      })
      .catch(function (error) {
        alert(error);
      });
  }, []);

  function handleEnviarPedidoSucesso() {
    showToast("Sucesso", "Pedido enviado com sucesso!");
  }

  function handleEnviarPedidoFalha() {
    showToast("Erro", "Pedido não enviado.");
  }

  return (
    <>
      <h1>Produtos da categoria {slugCategoria}</h1>
      <ProductList
        produtos={products}
        onEnviarPedidoSucesso={handleEnviarPedidoSucesso}
        onEnviarPedidoFalha={handleEnviarPedidoFalha}
      />
      <Toast
        onClose={() => setToastShow(false)}
        show={toastShow}
        delay={3000}
        autohide
      >
        <Toast.Header>
          <svg height="32" width="32">
            <circle cx="16" cy="16" r="16" fill="#00ff00" />
          </svg>
          <strong className="me-auto">{toastTitle}</strong>
          <small>Agora</small>
        </Toast.Header>
        <Toast.Body>{toastText}</Toast.Body>
      </Toast>
    </>
  );
}
