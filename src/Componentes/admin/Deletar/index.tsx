"use client";

import { useState } from "react";
import styles from "./styles.module.css";
import api from "@/services/api";

type Props = {
  produtoId: number | string;
  nomeProduto: string;
  onDeletado?: () => void;
};

export default function BotaoDeletar({ produtoId, nomeProduto, onDeletado }: Props) {
  const [confirmando, setConfirmando] = useState(false);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState<string | null>(null);

  async function handleDeletar() {
    setCarregando(true);
    setErro(null);
    try {
      await api.delete(`/products/${produtoId}`);
      setConfirmando(false);
      onDeletado?.();
    } catch (e: any) {
      setErro(e.response?.data?.message || "Erro ao deletar o produto.");
    } finally {
      setCarregando(false);
    }
  }

  if (confirmando) {
    return (
      <div className={styles.confirmacao}>
        <p className={styles.pergunta}>
          Deletar <strong>{nomeProduto}</strong>?
        </p>
        {erro && <p className={styles.erro}>{erro}</p>}
        <div className={styles.botoes}>
          <button
            className={styles.botaoConfirmar}
            onClick={handleDeletar}
            disabled={carregando}
          >
            {carregando ? "Deletando..." : "Confirmar"}
          </button>
          <button
            className={styles.botaoCancelar}
            onClick={() => { setConfirmando(false); setErro(null); }}
            disabled={carregando}
          >
            Cancelar
          </button>
        </div>
      </div>
    );
  }

  return (
    <button className={styles.botaoDeletar} onClick={() => setConfirmando(true)}>
      Deletar
    </button>
  );
}