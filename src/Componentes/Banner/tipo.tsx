import React from 'react';

interface ExampleCarouselImageProps {
  src: string;
  alt: string;
}

export default function ExampleCarouselImage({ src, alt }: ExampleCarouselImageProps) {
  return (
    <img
      className="d-block w-100"
      src={src}
      alt={alt}
    />
  );
}
