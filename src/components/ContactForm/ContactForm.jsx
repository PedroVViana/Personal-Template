import React, { useState, useEffect } from 'react';
import './ContactForm.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const ContactForm = () => {
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutos

  useEffect(() => {
    if (timeLeft === 0) return;
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div className="contact-form">
      <div className="contact-form-content">
        <h2>Entre em Contato</h2>
        <p>
          Quer transformar sua vida e alcançar seus objetivos de fitness? Entre em contato conosco agora mesmo! Estamos prontos para ajudar você a começar sua jornada rumo a uma vida mais saudável e feliz.
        </p>
        <div className="timer">
          <p>Oferta especial termina em: <span>{formatTime(timeLeft)}</span></p>
        </div>
        <form>
          <input type="text" placeholder="Seu Nome" required />
          <input type="email" placeholder="Seu Email" required />
          <input type="tel" placeholder="Seu Número de Contato" required />
          <textarea placeholder="Sua Mensagem" required></textarea>
          <button type="submit" className="contact-form-button">Enviar Mensagem</button>
        </form>
        <div className="contact-info">
          <p>Email: contato@personaltrainer.com</p>
          <p>Telefone: (11) 1234-5678</p>
        </div>
        <div className="social-media">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-media-button"><FaFacebookF /></a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-media-button"><FaInstagram /></a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="social-media-button"><FaTwitter /></a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-media-button"><FaLinkedinIn /></a>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;