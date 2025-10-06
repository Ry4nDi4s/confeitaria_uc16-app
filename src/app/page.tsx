import "./page.css"
import Header from "@/Componentes/Header";

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