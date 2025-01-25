import React, { useEffect } from 'react';
import './Hero.css';
import imghero from '../../assets/Photo/heroBlack.png'; // Importe a imagem que você deseja usar no componente

const Hero = () => {
  useEffect(() => {
    const createBubble = () => {
      const bubble = document.createElement('div');
      bubble.className = 'bubble';
      bubble.style.left = `${Math.random() * 100}%`;
      bubble.style.animationDuration = `${Math.random() * 5 + 5}s`;
      document.querySelector('.hero').appendChild(bubble);

      setTimeout(() => {
        bubble.remove();
      }, 10000);
    };

    const interval = setInterval(createBubble, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Transforme seu <span>corpo</span> e <span>mente</span></h1>
          <p>Junte-se a nós e alcance seus objetivos de fitness com nossos programas personalizados.</p>
          <button className="hero-button">Comece sua transformação agora</button>
        </div>
        <div className="hero-image">
          <img src={imghero} alt="Personal Trainer" />
        </div>
      </div>
    </div>
  );
};

export default Hero;