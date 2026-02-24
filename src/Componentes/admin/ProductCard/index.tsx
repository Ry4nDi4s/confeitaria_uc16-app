import styles from "./styles.module.css";
import Produto from "@/Model/TiposProdutos";

type Props = {
  produto: Produto;
};

function formatarDataISO(isoString: string): string {
  if (!isoString) return "";
  const data = new Date(isoString);
  if (isNaN(data.getTime())) return isoString;
  return new Intl.DateTimeFormat("pt-BR").format(data);
}

export default function ProductCardAdmin({ produto }: Props) {
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
        {" "}
        Validade: {formatarDataISO(produto.maturity.toString())}{" "}
      </span>
      <span className={styles.tipo}>Tipo: {produto.tipo}</span>
    </li>
  );
}
