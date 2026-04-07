"use client";

import { useAuth } from "@/hoocks/useAuth";
import Pedidos, { PedidoStatus } from "@/Model/TiposPedidos";
import Produto from "@/Model/TiposProdutos";
import api from "@/services/api";
import { useState } from "react";
import { Button } from "react-bootstrap";

type Props = {
  onEnviarPedidoSucesso: () => void;
  onEnviarPedidoFalha: () => void;
  product: Produto;
};

export default function BotaoEnviar({
  product,
  onEnviarPedidoSucesso,
  onEnviarPedidoFalha,
}: Props) {
  const [show, setShow] = useState(false);
  const auth = useAuth();

  function enviarPedido() {
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
            Delivery: true,
            DeliveryDay: "2026-03-07",
            ReadyAt: "2026-03-07",
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
            });
        }
      })
      .catch(function (error) {
        onEnviarPedidoFalha();
        console.error("ERRO AO CRIAR Pagamento:", error);
        alert("Erro ao criar o Pedido.");
      });
  }

  return <Button onClick={enviarPedido}>Enviar Pedido</Button>;
}
