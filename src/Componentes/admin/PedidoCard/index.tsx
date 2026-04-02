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

type StatusInfo = { className: string; label: string };

function getStatusInfo(status: string): StatusInfo {
  const map: Record<string, StatusInfo> = {
    AGUARDANDO_PAGAMENTO: { className: styles.statusAguardandoPagamento, label: "Aguardando Pagamento" },
    CONFIRMADO:           { className: styles.statusConfirmado,           label: "Confirmado" },
    EM_PREPARO:           { className: styles.statusEmPreparo,           label: "Em Preparo" },
    PRONTO:               { className: styles.statusPronto,               label: "Pronto" },
    ENTREGUE:             { className: styles.statusEntregue,             label: "Entregue" },
    CANCELADO:            { className: styles.statusCancelado,            label: "Cancelado" },
  };
  return map[status] ?? { className: styles.statusDefault, label: status };
}

export default function PedidosCard({ pedido }: Props) {
  const { className: statusClass, label: statusLabel } = getStatusInfo(pedido.status);

  return (
    <li className={styles.pedido}>
      <div className={styles.body}>

        <div className={styles.header}>
          <span className={styles.idLabel}>Pedido</span>
          <span className={styles.idNumber}>#{pedido.id}</span>
        </div>

        <hr className={styles.divider} />

        <div className={styles.rows}>
          <div className={styles.row}>
            <span className={styles.icon}>🙅‍♂️</span>
            <div className={styles.info}>
              <span className={styles.key}>Cliente</span>
              <span className={styles.value}>{pedido.user?.name ?? "—"}</span>
            </div>
          </div>

          <div className={styles.row}>
            <span className={styles.icon}>📅</span>
            <div className={styles.info}>
              <span className={styles.key}>Fica pronto em</span>
              <span className={styles.value}>
                {pedido.ReadyAt ? formatarDataISO(pedido.ReadyAt) : "—"}
              </span>
            </div>
          </div>

          <div className={styles.row}>
            <span className={styles.icon}>🛵</span>
            <div className={styles.info}>
              <span className={styles.key}>Entrega</span>
              <span className={`${styles.chip} ${pedido.Delivery ? styles.chipSim : styles.chipNao}`}>
                {pedido.Delivery ? "✓ Sim" : "✗ Não"}
              </span>
            </div>
          </div>

          <div className={styles.row}>
            <span className={styles.icon}>🎀</span>
            <div className={styles.info}>
              <span className={styles.key}>Status</span>
              <span className={`${styles.badge} ${statusClass}`}>{statusLabel}</span>
            </div>
          </div>
        </div>

      </div>
    </li>
  );
}