// src/components/Carousel.js
import React from 'react';
import Slider from 'react-slick';
import './Carousel.css';
import Banner_1 from '../../assets/Banner_1.png';
import Banner_2 from '../../assets/Banner_02.png';

const Carousel = () => {
  const settings = {
    dots: false, // Desativa os pontos de navegação
    infinite: true, // loop infinito.
    speed: 500, // Velocidade
    slidesToShow: 1, // quantos slides serão exibidos ao mesmo tempo
    slidesToScroll: 1, //  quantos slides serão rolados de cada vez quando o usuário navega.
    arrows: true, // Ativa os botões de navegação
    autoplay: true, // Ativa o autoplay
    autoplaySpeed: 3000, // Define a velocidade do autoplay (3 segundos)
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {/* 
    <Slider>: Este é o componente que renderiza o carrossel. 
    O operador de propagação {...settings} é usado para passar as configurações do carrossel para o componente Slider.
  */}
        <div>
          <img src={Banner_1} alt="Banner 1" />
        </div>
        <div>
          <img src={Banner_2} alt="Banner 2" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
