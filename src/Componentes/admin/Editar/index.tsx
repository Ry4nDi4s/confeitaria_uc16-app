"use client";

import { useState } from "react";
import Produto from "@/Model/TiposProdutos";
import styles from "./styles.module.css";
import TextField from "@/Componentes/public/TextField";
import api from "@/services/api";

type Props = {
  produto: Produto;
  onEditado?: () => void;
};

const tipoOptions = [
  { label: "Bolo Fixo", value: "Bolo Fixo" },
  { label: "Bolo Personalizado", value: "Bolo Personalizado" },
  { label: "Doce", value: "Doce" },
];

export default function BotaoEditar({ produto, onEditado }: Props) {
  const [aberto, setAberto] = useState(false);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState<string | null>(null);

  const [form, setForm] = useState({
    name: produto.name,
    preco: String(produto.preco),
    description: produto.description,
    quantify: String(produto.quantify),
    stock: String(produto.stock),
    maturity: produto.maturity
      ? new Date(produto.maturity).toISOString().split("T")[0]
      : "",
    tipo: produto.tipo,
    foto: produto.foto,
  });

  function set(field: string) {
    return (value: string) => setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSalvar() {
    setCarregando(true);
    setErro(null);
    try {
      await api.put(`/products/${produto.id}`, {
        ...form,
        preco: parseFloat(
          form.preco.replace(/[^\d,]/g, "").replace(",", ".")
        ),
        quantify: parseInt(form.quantify),
        stock: parseInt(form.stock),
      });
      setAberto(false);
      onEditado?.();
    } catch (e: any) {
      setErro(e.response?.data?.message || "Erro ao salvar as alterações.");
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

            <TextField label="Nome" type="text" text={form.name} onChange={set("name")} />
            <TextField label="Preço" type="number" text={form.preco} onChange={set("preco")} moeda />
            <TextField label="Descrição" type="text" text={form.description} onChange={set("description")} multiline />
            <TextField label="Quantidade" type="number" text={form.quantify} onChange={set("quantify")} />
            <TextField label="Stock" type="number" text={form.stock} onChange={set("stock")} />
            <TextField label="Validade" type="datetime-local" text={form.maturity} onChange={set("maturity")} />
            <TextField label="Tipo" type="select" text={form.tipo} options={tipoOptions} onChange={set("tipo")} />
            <TextField label="URL da Foto" type="text" text={form.foto} onChange={set("foto")} />

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
                onClick={() => { setAberto(false); setErro(null); }}
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