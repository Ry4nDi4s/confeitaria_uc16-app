import styles from "./styles.module.css";
import Produto from "@/Model/TiposProdutos";
import BotaoEditar from "../Editar";
import BotaoDeletar from "../Deletar";

type Props = {
  produto: Produto;
  onAtualizado?: () => void; 
};

function formatarDataISO(isoString: string): string {
  if (!isoString) return "";
  const data = new Date(isoString);
  if (isNaN(data.getTime())) return isoString;
  return new Intl.DateTimeFormat("pt-BR").format(data);
}

export default function ProductCardAdmin({ produto, onAtualizado }: Props) {
  return (
    <li className={styles.produto}>
      <span className={styles.nome}>Nome: {produto.name}</span>
      <img
        className={styles.foto}
        src={produto.foto}
        alt={produto.name}
        style={{ width: 256, height: "auto" }}
      />
      <span className={styles.preço}>R$: {produto.preco}</span>
      <span className={styles.descrição}>Descrição: {produto.description}</span>
      <span className={styles.quantidade}>Quantidade: {produto.quantify}</span>
      <span className={styles.estoque}>Stock: {produto.stock}</span>
      <span className={styles.validade}>
        Validade: {formatarDataISO(produto.maturity.toString())}
      </span>
      <span className={styles.tipo}>Tipo: {produto.tipo}</span>

      <BotaoEditar produto={produto} onEditado={onAtualizado} />

      <BotaoDeletar
        produtoId={produto.id as number | string}
        nomeProduto={produto.name}
        onDeletado={onAtualizado}
      />
    </li>
  );
}
