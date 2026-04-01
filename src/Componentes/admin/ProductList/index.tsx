import Produto from "@/Model/TiposProdutos";
import ProductCardAdmin from "@/Componentes/admin/ProductCard";
import styles from "./styles.module.css";

type Props = {
  produtos: Produto[];
  onAtualizado?: () => void;
};

export default function ProductList({ produtos, onAtualizado }: Props) {
  return (
    <ul className={styles.produtos}>
      {produtos.map(function (produto: Produto) {
        return (
          <ProductCardAdmin
            key={produto.id}
            produto={produto}
            onAtualizado={onAtualizado}
          />
        );
      })}
    </ul>
  );
}