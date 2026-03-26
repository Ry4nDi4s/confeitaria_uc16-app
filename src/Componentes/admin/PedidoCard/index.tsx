import styles from "./styles.module.css";
import Pedidos from "@/Model/TiposPedidos";

type Props = {
  pedido: Pedidos;
};

function formatarDataISO(isoString: string): string {
  if (!isoString) return "";
  const data = new Date(isoString);
  if (isNaN(data.getTime())) return isoString;
  return new Intl.DateTimeFormat("pt-BR").format(data);
}

export default function PedidosCard({ pedido }: Props) {
  return (
    <li className={styles.pedido}>
      <p>Pedido ID: {pedido.id}</p>
      <p>Subtotal: R$ {pedido.subtotal.toFixed(2)}</p>
      <p>Delivery: {pedido.Delivery ? "Sim" : "Não"}</p>
      <p>Data de Entrega: {formatarDataISO(pedido.DeliveryDay)}</p>
      <p>Pronto em: {formatarDataISO(pedido.ReadyAt)}</p>
      <p>Status: {pedido.status}</p>
    </li>
  );
}
