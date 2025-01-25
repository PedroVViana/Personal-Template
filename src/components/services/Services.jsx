import React from 'react';
import './Services.css';
import { FaRunning, FaDumbbell, FaAppleAlt, FaHeartbeat } from 'react-icons/fa';

const Services = () => {
  return (
    <div className="services">
      <div className="services-content">
        <h2>Nossos Serviços</h2>
        <p>
          Oferecemos uma variedade de serviços para atender às suas necessidades de fitness, incluindo treinamento personalizado, aulas em grupo, nutrição e muito mais. Descubra como podemos ajudar você a alcançar seus objetivos.
        </p>
        <div className="services-cards">
          <div className="services-card">
            <div className="services-card-header">
              <FaRunning className="services-icon" />
              <h3>Treinamento Personalizado</h3>
            </div>
            <p>
              Programas de treinamento individualizados para atender às suas necessidades e objetivos específicos, com acompanhamento constante para garantir seu progresso.
            </p>
          </div>
          <div className="services-card">
            <div className="services-card-header">
              <FaDumbbell className="services-icon" />
              <h3>Aulas em Grupo</h3>
            </div>
            <p>
              Aulas dinâmicas e motivadoras em grupo, projetadas para melhorar sua força, resistência e flexibilidade, enquanto você se diverte e se conecta com outras pessoas.
            </p>
          </div>
          <div className="services-card">
            <div className="services-card-header">
              <FaAppleAlt className="services-icon" />
              <h3>Consultoria Nutricional</h3>
            </div>
            <p>
              Orientação nutricional personalizada para complementar seu treinamento e ajudar você a alcançar uma alimentação equilibrada e saudável.
            </p>
          </div>
          <div className="services-card">
            <div className="services-card-header">
              <FaHeartbeat className="services-icon" />
              <h3>Avaliação Física</h3>
            </div>
            <p>
              Avaliações físicas detalhadas para monitorar seu progresso, identificar áreas de melhoria e ajustar seu programa de treinamento conforme necessário.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;