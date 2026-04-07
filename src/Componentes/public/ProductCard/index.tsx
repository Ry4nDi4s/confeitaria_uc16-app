import Produto from "@/Model/TiposProdutos";
import styles from "./styles.module.css";
import BotaoEnviar from "./BotaoEnviar";

type Props = {
  produto: Produto;
  onEnviarPedidoSucesso: () => void;
  onEnviarPedidoFalha: () => void;
};

export default function ProductCard({
  produto,
  onEnviarPedidoSucesso,
  onEnviarPedidoFalha,
}: Props) {
  return (
    <>
      <li className={styles.produto}>
        <span className="Nome">{produto.name}</span>
        <img
          className="foto"
          src={produto.foto}
          alt={produto.name}
          style={{ width: 256, height: "auto" }}
        />
        <span className="preco">R$:{produto.preco}</span>
        <span className="descrição">{produto.description}</span>
        <BotaoEnviar
          onEnviarPedidoFalha={onEnviarPedidoFalha}
          onEnviarPedidoSucesso={onEnviarPedidoSucesso}
          product={produto}
        />
      </li>
    </>
  );
}
