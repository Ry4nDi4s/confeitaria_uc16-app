import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
import styles from "./styles.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Banner() {
  return (
    <Carousel
      indicators={false}
      interval={5000}
      prevIcon={
        <Image
          src="/Imagens/Setas/Seta Esquerda.png"
          alt=""
          fill
          style={{ objectFit: "none" }}
        />
      }
      nextIcon={
        <Image
          src="/Imagens/Setas/Seta Direita.png"
          alt=""
          fill
          style={{ objectFit: "none" }}
        />
      }
    >
      <Carousel.Item className={styles.banner}>
        <Image
          src="/Imagens/ImgBanner/Banner1.png"
          alt=""
          fill
          style={{ objectFit: "cover" }}
        />
      </Carousel.Item>
      <Carousel.Item className={styles.banner}>
        <Image
          src="/Imagens/ImgBanner/Banner2.png"
          alt=""
          fill
          style={{ objectFit: "cover" }}
        />
      </Carousel.Item>
      <Carousel.Item className={styles.banner}>
        <Image
          src="/Imagens/ImgBanner/Banner3.png"
          alt=""
          fill
          style={{ objectFit: "cover" }}
        />
      </Carousel.Item>
    </Carousel>
  );
}
// Usar Imagem inves do ExampleCarouselImage
// usar preicon e nexticon,
