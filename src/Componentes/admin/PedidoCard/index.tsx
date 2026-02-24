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
      <span className={styles.which_product}>Nome: {pedido.which_product}</span>
      <span className={styles.who_oder}>R$: {pedido.who_oder}</span>
      <span className={styles.value}>Descrição: {pedido.value}</span>
      <span className={styles.quantify}>Quantidade: {pedido.quantify}</span>
      <span className={styles.delivery_day}>
        {" "}
        Validade: {formatarDataISO(pedido.delivery_day.toString())}{" "}
      </span>
    </li>
  );
}
