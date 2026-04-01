"use client";

import { useState } from "react";
import Produto from "@/Model/TiposProdutos";
import styles from "./styles.module.css";

type Props = {
  produto: Produto;
  onEditado?: () => void;
};

export default function BotaoEditar({ produto, onEditado }: Props) {
  const [aberto, setAberto] = useState(false);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState<string | null>(null);

  // Formulário espelha os campos do produto
  const [form, setForm] = useState({
    name: produto.name,
    preco: produto.preco,
    description: produto.description,
    quantify: produto.quantify,
    stock: produto.stock,
    maturity: produto.maturity
      ? new Date(produto.maturity).toISOString().split("T")[0]
      : "",
    tipo: produto.tipo,
    foto: produto.foto,
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSalvar() {
    setCarregando(true);
    setErro(null);

    try {
      const res = await fetch(`/api/produtos/${produto.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          preco: parseFloat(String(form.preco)),
          quantify: parseInt(String(form.quantify)),
          stock: parseInt(String(form.stock)),
        }),
      });

      if (!res.ok) {
        throw new Error("Erro ao salvar as alterações.");
      }

      setAberto(false);
      onEditado?.();
    } catch (e: any) {
      setErro(e.message || "Erro desconhecido.");
    } finally {
      setCarregando(false);
    }
  }

  return (
    <>
      <button className={styles.botaoEditar} onClick={() => setAberto(true)}>
         Editar
      </button>

      {aberto && (
        <div className={styles.overlay} onClick={() => setAberto(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <h2 className={styles.titulo}>Editar produto</h2>

            <div className={styles.campo}>
              <label>Nome</label>
              <input name="name" value={form.name} onChange={handleChange} />
            </div>

            <div className={styles.campo}>
              <label>Preço (R$)</label>
              <input
                name="preco"
                type="number"
                step="0.01"
                value={form.preco}
                onChange={handleChange}
              />
            </div>

            <div className={styles.campo}>
              <label>Descrição</label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                rows={3}
              />
            </div>

            <div className={styles.campo}>
              <label>Quantidade</label>
              <input
                name="quantify"
                type="number"
                value={form.quantify}
                onChange={handleChange}
              />
            </div>

            <div className={styles.campo}>
              <label>Stock</label>
              <input
                name="stock"
                type="number"
                value={form.stock}
                onChange={handleChange}
              />
            </div>

            <div className={styles.campo}>
              <label>Validade</label>
              <input
                name="maturity"
                type="date"
                value={form.maturity}
                onChange={handleChange}
              />
            </div>

            <div className={styles.campo}>
              <label>Tipo</label>
              <select name="tipo" value={form.tipo} onChange={handleChange}>
                <option value="Bolo Fixo">Bolo Fixo</option>
                <option value="Bolo Personalizado">Bolo Personalizado</option>
                <option value="Doce">Doce</option>
                {/* Adicione mais tipos conforme necessário */}
              </select>
            </div>

            <div className={styles.campo}>
              <label>URL da Foto</label>
              <input name="foto" value={form.foto} onChange={handleChange} />
            </div>

            {erro && <p className={styles.erro}>{erro}</p>}

            <div className={styles.acoes}>
              <button
                className={styles.botaoSalvar}
                onClick={handleSalvar}
                disabled={carregando}
              >
                {carregando ? "Salvando..." : "Salvar"}
              </button>
              <button
                className={styles.botaoCancelar}
                onClick={() => {
                  setAberto(false);
                  setErro(null);
                }}
                disabled={carregando}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
