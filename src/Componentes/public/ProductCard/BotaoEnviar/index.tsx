"use client";

import { useAuth } from "@/hoocks/useAuth";
import Pedidos, { PedidoStatus } from "@/Model/TiposPedidos";
import Produto from "@/Model/TiposProdutos";
import api from "@/services/api";
import { useState } from "react";
import styles from "./styles.module.css";

type Props = {
  onEnviarPedidoSucesso: () => void;
  onEnviarPedidoFalha: () => void;
  product: Produto;
  variant?: "azul" | "rosa";
};

export default function BotaoEnviar({
  product,
  onEnviarPedidoSucesso,
  onEnviarPedidoFalha,
  variant = "rosa",
}: Props) {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const auth = useAuth();

  function enviarPedido() {
    setLoading(true);
    const payment = {
      paidWithPix: true,
      paidWithMoney: false,
      value: product.preco,
    };
    api
      .post("/payments", payment)
      .then(function (res) {
        const paymentId = res.data.id;

        if (auth.user && product.id) {
          const order: Pedidos = {
            Delivery: false,
            DeliveryDay: null,
            ReadyAt: "2026-04-012",
            subtotal: product.preco,
            items: [
              {
                productId: product.id,
                quantity: 1,
                unitPrice: product.preco,
              },
            ],
            status: PedidoStatus.aguardandoPagamento,
            userId: Number(auth.user.id),
            paymentId,
          };
          api
            .post("/orders", order)
            .then(() => {
              setShow(true);
              onEnviarPedidoSucesso();
            })
            .catch((error) => {
              onEnviarPedidoFalha();
              console.error("ERRO AO ENVIAR Pedido:", error);
              alert("Erro ao enviar o Pedido.");
            })
            .finally(() => setLoading(false));
        }
      })
      .catch(function (error) {
        onEnviarPedidoFalha();
        console.error("ERRO AO CRIAR Pagamento:", error);
        alert("Erro ao criar o Pedido.");
        setLoading(false);
      });
  }

  return (
    <button
      className={
        variant === "rosa" ? styles.botaoEnviarRosa : styles.botaoEnviar
      }
      onClick={enviarPedido}
      disabled={loading}
    >
      {loading ? "Enviando..." : "Enviar Pedido"}
    </button>
  );
}