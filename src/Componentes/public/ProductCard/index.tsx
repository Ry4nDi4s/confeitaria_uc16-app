import Produto from "@/Model/TiposProdutos";
import styles from "./styles.module.css";

type Props = {
   produto: Produto;
}

export default function ProductCard({produto}: Props){
    return(
        <>
        <li className={styles.produto}>
            <span className='Nome'>{produto.name}</span>
            <img className="foto"src={produto.foto} alt={produto.name} style={{ width: 256, height: "auto" }}/>
            <span className='preco'>R$:{produto.preco}</span>
            <span className="descrição">{produto.description}</span>
        </li>
        </>
    );
};
