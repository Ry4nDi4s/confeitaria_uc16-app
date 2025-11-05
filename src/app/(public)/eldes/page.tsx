import styles from './styles.module.css';

export default function EldesPage() {
    return (
        <div className={styles.root}>
            <div className={styles.painelImagem}>imagem</div>
            <div className={styles.painelForm}>
                <form>campos</form>
            </div>
        </div>
    );
}