import Produto from "@/Model/TipoProduto";
import ProductCard from "../ProductCard"; 
import produtos from "@/Model/ModelProdutos";

type Props = {
    produtos: Produto[]
}

export default function ProductList({produtos}: Props) {
    return (
        <ul className="produtos">
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