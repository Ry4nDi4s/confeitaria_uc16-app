import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './tipo';
import 'bootstrap/dist/css/bootstrap.min.css';

import Banner1 from '@/Componentes/Banner/ImgBanner/Banner1.png';
import Banner2 from '@/Componentes/Banner/ImgBanner/Banner2.png';
import Banner3 from '@/Componentes/Banner/ImgBanner/Banner3.png';

export default function Banner() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <ExampleCarouselImage src={Banner1.src} alt={''} />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <ExampleCarouselImage src={Banner2.src} alt={''} />
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage src={Banner3.src} alt={''} />
      </Carousel.Item>
    </Carousel>
  );
}

