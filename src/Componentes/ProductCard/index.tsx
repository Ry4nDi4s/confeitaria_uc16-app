import Produto from "@/Model/TiposProdutos";

type Props = {
   produto: Produto;
}

export default function ProductCard({produto}: Props){
    return(
        <>
        <li className="produto">
            <span className='nome'>{produto.name}</span>
            <img className="foto" src={produto.fotoUrl} alt={produto.name} style={{ width: 256, height: "auto" }}/>
            <span className='preco'>R$:{produto.preco}</span>
        </li>
        </>
    );
};
