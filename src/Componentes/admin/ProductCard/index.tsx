import styles from "./styles.module.css";
import Produto from "@/Model/TiposProdutos";

type Props = {
   produto: Produto;
}

export default function ProductCardAdmin({produto}: Props){
    return(
        <>
        <li className={styles.produto}>
            <span className='Nome'>{produto.name}</span>
            <img className="Foto" src={produto.foto} alt={produto.name} style={{ width: 256, height: "auto" }}/>
            <span className='Preço'>R$:{produto.preco}</span>
            <span className="Descrição">{produto.description}</span>
            <span className="Quantidade">{produto.quantify}</span>
            <span className="Stock">{produto.stock}</span>
            <span className="Validade">{produto.maturity}</span>
            <span className="Validade">{produto.tipo}</span>
        </li>
        </>
    );
};