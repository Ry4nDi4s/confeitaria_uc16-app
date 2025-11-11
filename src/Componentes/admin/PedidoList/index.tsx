import styles from "./styles.module.css"
import PedidosADMIN from "@/Componentes/admin/PedidoCard";
import Pedidos from "@/Model/TiposPedidos";


type Props = {
    pedido: Pedidos[]
}

export default function PedidoList({ pedido }: Props) {
    return (
        <ul className={styles.pedido}>
            {pedido.map(function (pedido: Pedidos) {
                return (
                        <PedidosADMIN
                            key={pedido.id}
                            pedido={pedido}
                        />
                )
            })}
        </ul>
    )
}