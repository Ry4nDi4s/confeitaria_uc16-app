import Produto from "@/Model/TiposProdutos";
import ProductCard from "../ProductCard"; 

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