import Produto from "@/Model/TiposProdutos";
import ProductCard from "../ProductCard";
import styles from "./styles.module.css"

type Props = {
    produtos: Produto[]
}

export default function ProductList({ produtos }: Props) {
    return (
        <ul className={styles.produto}>
            {produtos.map(function (produto: Produto) {
                return (
                        <ProductCard
                            key={produto.id}
                            produto={produto}
                        />
                )
            })}
        </ul>
    )
}