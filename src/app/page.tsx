import Banner from "@/Componentes/Banner";
import Header from "@/Componentes/Header";
import styles from "./styles.module.css";
import "./page.css"

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