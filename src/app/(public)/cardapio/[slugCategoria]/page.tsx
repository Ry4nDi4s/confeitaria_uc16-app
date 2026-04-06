"use client";

import Produto from "@/Model/TiposProdutos";
import api from "@/services/api";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Toast } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductList from "@/Componentes/public/ProductList";

export default function CardapioPage() {
  const { slugCategoria } = useParams();

  const [products, setProducts] = useState<Produto[]>([]);

  const [showToast, setShowToast] = useState(false);

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

  function handleAdicionar() {
    setShowToast(true);
  }

  return (
    <>
      <h1>Produtos da categoria {slugCategoria}</h1>
      <ProductList produtos={products} />
      <ul>
        {products.map(function (product) {
          return (
            <li key={product.id}>
              {product.name}, {product.preco}
              <button onClick={handleAdicionar}>adicionar</button>
            </li>
          );
        })}
      </ul>
      <Toast
        onClose={() => setShowToast(false)}
        show={showToast}
        delay={3000}
        autohide
      >
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto"></strong>
          <small></small>
        </Toast.Header>
        <Toast.Body>Produto adicionado</Toast.Body>
      </Toast>
    </>
  );
}
