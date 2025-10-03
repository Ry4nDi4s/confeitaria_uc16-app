import styles from "./styles.module.css";

export default function Pesquisa() {
  return (
    <div className={styles.barraPesquisa}>
      <input
        type="text"
        className={styles.campoPesquisa}
        placeholder="Buscar..."
      />
      <span className={styles.iconeLupa}>🔍</span>
    </div>
  );
}
