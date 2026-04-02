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
      <span>{pedido.id}</span>
      <span>{pedido.Delivery ? "Sim" : "Não"}</span>
      <span>{pedido.ReadyAt ? formatarDataISO(pedido.ReadyAt) : ""}</span>
      <span>{pedido.user?.name}</span>
      <span>{pedido.status}</span>
    </li>
  );
}
