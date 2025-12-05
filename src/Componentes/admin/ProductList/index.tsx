import Produto from "@/Model/TiposProdutos";
import ProductCardAdmin from "@/Componentes/admin/ProductCard";
import styles from "./styles.module.css"


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