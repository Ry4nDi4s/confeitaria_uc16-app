"use client";

import Produto from "@/Model/TiposProdutos";
import api from "@/services/api";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function CardapioPage() {
  const { slugCategoria } = useParams();

  const [products, setProducts] = useState<Produto[]>([]);

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

  return (
    <>
      <h1>Produtos da categoria {slugCategoria}</h1>
      <ul>
        {products.map(function (product) {
          return (
            <li key={product.id}>
              {product.name}, {product.preco}
            </li>
          );
        })}
      </ul>
    </>
  );
}
