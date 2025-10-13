import Carousel from 'react-bootstrap/Carousel';
import Image from "next/image"
import styles from './styles.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Banner() {
  return (
      <Carousel>
        <Carousel.Item className={styles.banner}>
          <Image src="/Imagens/ImgBanner/Banner1.png" alt='' fill style={{objectFit: "contain"}}/>
        </Carousel.Item>
        <Carousel.Item className={styles.banner}>
          <Image src="/Imagens/ImgBanner/Banner2.png" alt='' fill style={{objectFit: "contain"}}/>
        </Carousel.Item>
        <Carousel.Item className={styles.banner}>
          <Image src="/Imagens/ImgBanner/Banner3.png" alt='' fill style={{objectFit: "contain"}}/>
        </Carousel.Item>
      </Carousel>
  );
}
// Usar Imagem inves do ExampleCarouselImage