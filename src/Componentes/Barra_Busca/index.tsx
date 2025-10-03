import styles from "./styles.module.css"

export default function Pesquisa(){
    return(
        <>
        <div className={styles.barraPesquisa}>
        <input type="text" className={styles.campoPesquisa} placeholder="Buscar..."/>
        <button className={styles.botaoPesquisa}>Pesquisar</button>
        </div>
        </>
    );
}