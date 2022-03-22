import React from 'react';

import Slider from 'react-slick';

import Image from 'Components/Image';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import './index.css';
import { CarouselProps } from './Types';

const DEFAULT_SETTINGS = {
  dots: false,
  autoplay: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 2000,
  pauseOnHover: true,
};

const Carousel = ({
  slides,
  settings = DEFAULT_SETTINGS,
  isGradient = false,
}: CarouselProps) => {
  return (
    <Slider {...settings} className={isGradient ? 'gradient' : ''}>
      {slides.map((src: string) => (
        <div key={src} className="img-container">
          <Image src={src} alt={src.split('.')[0]} />
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
