import Produto from "@/Model/TiposProdutos";
import styles from "./styles.module.css"
import ProductCardAdmin from "@/Componentes/admin/ProductCard";


type Props = {
    produtos: Produto[]
}

export default function ProductList({ produtos }: Props) {
    return (
        <ul className={styles.produtos}>
            {produtos.map(function (produto: Produto) {
                return (
                        <ProductCardAdmin
                            key={produto.id}
                            produto={produto}
                        />
                )
            })}
        </ul>
    )
}