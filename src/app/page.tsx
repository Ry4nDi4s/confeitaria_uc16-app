import Banner from "@/Componentes/Banner";
import Header from "@/Componentes/Header";
import styles from "@/app/page.module.css"

export default function Home() {
    return(
    <>
    <div className={styles.pagina}>
    <Header/>
    <Banner/>
    </div>
    </>
  );
}