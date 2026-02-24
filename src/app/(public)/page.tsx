"use client";

import Banner from "@/Componentes/public/Banner";
import Cartões from "@/Componentes/public/Cartões";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import Category from "@/Model/category";
import api from "@/services/api";

export default function Home() {
  const [categories, setCategories] = useState<Category[]>([]);
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_BASE_URL;

  useEffect(function () {
    api
      .get("/categories")
      .then(function (res) {
        setCategories(res.data);
        console.log(res.data);
      })
      .catch(function (error) {
        alert(error);
      });
  }, []);

  return (
    <>
      <Banner />
      <div className={styles.produtos}>
        {categories.map(function (category) {
          const photoUrl = `${baseUrl}${category.photoUrl}`;
          return (
            <Cartões
              nome={category.name}
              foto={photoUrl}
              link={`/cardapio/${category.slug}`}
            />
          );
        })}
      </div>
    </>
  );
}
