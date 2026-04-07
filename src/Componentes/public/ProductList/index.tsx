import Produto from "@/Model/TiposProdutos";
import ProductCard from "../ProductCard";
import styles from "./styles.module.css";

type Props = {
  produtos: Produto[];
  onEnviarPedidoSucesso: () => void;
  onEnviarPedidoFalha: () => void;
};

export default function ProductList({
  produtos,
  onEnviarPedidoSucesso,
  onEnviarPedidoFalha,
}: Props) {
  return (
    <ul className={styles.produtos}>
      {produtos.map(function (produto: Produto) {
        return (
          <ProductCard
            key={produto.id}
            produto={produto}
            onEnviarPedidoFalha={onEnviarPedidoFalha}
            onEnviarPedidoSucesso={onEnviarPedidoSucesso}
          />
        );
      })}
    </ul>
  );
}
