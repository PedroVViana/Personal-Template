import React, { useState, useEffect } from 'react';
import './Testimonials.css';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonialsData = [
  {
    quote: "O programa de treinamento personalizado mudou minha vida. Perdi 15kg em 3 meses e me sinto mais saudável e confiante do que nunca!",
    author: "Maria Silva"
  },
  {
    quote: "As aulas em grupo são incríveis! Fiz novos amigos e minha resistência melhorou significativamente. Recomendo a todos!",
    author: "João Santos"
  },
  {
    quote: "A consultoria nutricional foi essencial para alcançar meus objetivos. Aprendi a me alimentar de forma equilibrada e saudável.",
    author: "Ana Costa"
  },
  {
    quote: "A avaliação física detalhada me ajudou a entender minhas necessidades e a ajustar meu treinamento. Os resultados são incríveis!",
    author: "Pedro Oliveira"
  },
  {
    quote: "O suporte contínuo e a motivação que recebi foram fundamentais para alcançar meus objetivos de fitness.",
    author: "Lucas Pereira"
  },
  {
    quote: "Os treinos são desafiadores e eficazes. Estou muito satisfeito com os resultados que obtive.",
    author: "Fernanda Lima"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length);
  };

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getTransformValue = () => {
    if (windowWidth < 768) {
      return `translateX(-${currentIndex * 100}%)`;
    } else {
      return `translateX(-${currentIndex * 33.33}%)`;
    }
  };

  return (
    <div className="testimonials">
      <div className="testimonials-content">
        <h2>Depoimentos</h2>
        <p>
          Veja o que nossos clientes têm a dizer sobre seus resultados e experiências com nossos programas de fitness. Suas histórias de sucesso são nossa maior motivação.
        </p>
        <div className="testimonials-carousel-container">
          <div className="testimonials-carousel" style={{ transform: getTransformValue() }}>
            {testimonialsData.map((testimonial, index) => (
              <div className="testimonials-card" key={index}>
                <FaQuoteLeft className="quote-icon" />
                <p>"{testimonial.quote}"</p>
                <h4>- {testimonial.author}</h4>
              </div>
            ))}
          </div>
        </div>
        <div className="carousel-controls">
          <button onClick={prevSlide} className="carousel-control prev">‹</button>
          <button onClick={nextSlide} className="carousel-control next">›</button>
        </div>
        <button className="testimonials-button">Comece Sua Transformação Agora</button>
      </div>
    </div>
  );
};

export default Testimonials;