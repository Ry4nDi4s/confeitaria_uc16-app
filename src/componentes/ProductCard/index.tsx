import Produto from "@/Model/TipoProduto";

type Props = {
   produto: Produto;
}

export default function ProductCard({produto}: Props){
    return(
        <>
        <li className="produto">
            <span className='nome'>{produto.nome}</span>
            <img className="foto" src={produto.fotourl} alt={produto.nome} style={{ width: 256, height: "auto" }}/>
            <span className='preco'>R$:{produto.preco}</span>
        </li>
        </>
    );
};
