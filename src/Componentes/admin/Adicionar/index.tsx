"use client";

import styles from "./styles.module.css";
import Textfield from "@/Componentes/public/TextField/index";
import api from "@/services/api";
import { useState, useEffect } from "react";

type Props = {
  onSuccess(): void;
};

export default function Salvar({ onSuccess }: Props) {
  const [mostrarForm, setMostrarForm] = useState(false);

  const [name, setNome] = useState("");
  const [foto, setFoto] = useState("");
  const [preco, setPreco] = useState("");
  const [description, setDescription] = useState("");
  const [quantify, setQuantify] = useState("");
  const [stock, setStock] = useState("");
  const [maturity, setMaturity] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [tipo, setTipo] = useState("");
  const [isActive, setIsActive] = useState(true);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    api.get("/categories").then((res) => setCategorias(res.data));
  }, []);

  const limparMoeda = (valor: string) => {
    if (!valor) return 0;
    const numero = Number(valor.replace(/[^\d]/g, ""));
    return numero / 100;
  };

  const gerarSlug = (texto: string) => {
    return texto
      .toLowerCase()
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  const validarCampos = () => {
    if (!name.trim()) return "O nome é obrigatório.";
    if (!foto.trim()) return "A URL da imagem é obrigatória.";
    if (!preco.trim() || limparMoeda(preco) <= 0) return "Preço inválido.";
    if (!description.trim()) return "A descrição é obrigatória.";
    if (!quantify || Number(quantify) <= 0) return "Quantidade inválida.";
    if (!stock || Number(stock) < 0) return "Estoque inválido.";
    if (!maturity) return "A validade é obrigatória.";
    if (!categoryId) return "A categoria é obrigatória.";
    if (!tipo) return "O tipo do produto é obrigatório.";
    return null;
  };

  const cadastrar = (e: React.FormEvent) => {
    e.preventDefault();

    const erro = validarCampos();
    if (erro) {
      alert(erro);
      return;
    }

    const slug = gerarSlug(name);

    api
      .post("/products", {
        name,
        foto,
        preco: limparMoeda(preco),
        description,
        quantify: Number(quantify),
        stock: Number(stock),
        maturity,
        categoryId: Number(categoryId),
        tipo,
        isActive,
        slug,
      })
      .then(() => {
        alert("Produto enviado com sucesso!");
        setMostrarForm(false);
        onSuccess();
      })
      .catch((error) => {
        console.error("ERRO AO ENVIAR PRODUTO:", error);
        alert("Erro ao enviar o produto.");
      });
  };

  return (
    <>
      {/* BOTÃO FAB */}
      <button
        className={`${styles.fab} ${mostrarForm ? styles.fabOpen : ""}`}
        onClick={() => setMostrarForm(!mostrarForm)}
        title="Adicionar produto"
      >
        +
      </button>

      {/* MODAL */}
      {mostrarForm && (
        <div
          className={styles.overlay}
          onClick={(e) => {
            if (e.target === e.currentTarget) setMostrarForm(false);
          }}
        >
          <div className={styles.modal}>
            <div className={styles.modalStripe} />

            <div className={styles.modalHeader}>
              <span className={styles.modalTitulo}>Novo Produto</span>
              <button
                className={styles.modalFechar}
                onClick={() => setMostrarForm(false)}
              >
                ✕
              </button>
            </div>

            <form className={styles.form} onSubmit={cadastrar}>
              <Textfield label="Produto" type="text" onChange={setNome} text={name} />
              <Textfield label="Imagem (URL)" type="text" onChange={setFoto} text={foto} />
              <Textfield label="Preço" type="text" moeda onChange={setPreco} text={preco} />
              <Textfield label="Descrição" type="text" onChange={setDescription} text={description} />
              <Textfield label="Quantidade" type="number" onChange={setQuantify} text={quantify} />
              <Textfield label="Estoque" type="number" onChange={setStock} text={stock} />
              <Textfield label="Validade" type="datetime-local" required onChange={setMaturity} text={maturity} />
              <Textfield
                label="Categoria"
                type="select"
                onChange={setCategoryId}
                text={categoryId}
                options={categorias.map((c: any) => ({
                  label: c.name,
                  value: c.id.toString(),
                }))}
              />
              <Textfield
                label="Tipo do produto"
                type="select"
                onChange={setTipo}
                text={tipo}
                options={[
                  { label: "Bolo Fixo", value: "Bolo Fixo" },
                  { label: "Bolo Personalizado", value: "Bolo Personalizado" },
                  { label: "Docinhos", value: "Docinhos" },
                ]}
              />

              <label className={styles.checkboxRow}>
                <input
                  type="checkbox"
                  checked={isActive}
                  onChange={(e) => setIsActive(e.target.checked)}
                />
                Produto ativo?
              </label>

              <button className={styles.btnSalvar} type="submit">
                Salvar produto
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}