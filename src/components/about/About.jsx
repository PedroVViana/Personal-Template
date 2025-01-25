import React from 'react';
import './About.css';
import { FaDumbbell, FaGraduationCap, FaUsers, FaBullseye } from 'react-icons/fa';
import imgAbout from '../../assets/Photo/About.jpg'; // Importe a imagem que você deseja usar no componente

const About = () => {
  return (
    <div className="about">
      <div className="about-content">
        <div className="about-image">
          <img src={imgAbout} alt="João Silva" />
        </div>
        <div className="about-text">
          <h2>Sobre Mim</h2>
          <div className="about-cards">
            <div className="about-card">
              <div className="about-card-header">
                <FaDumbbell className="about-icon" />
                <h3>Experiência</h3>
              </div>
              <p>
                Olá! Eu sou João Silva, um personal trainer certificado com mais de 10 anos de experiência ajudando pessoas a transformarem suas vidas através do fitness.
              </p>
            </div>
            <div className="about-card">
              <div className="about-card-header">
                <FaGraduationCap className="about-icon" />
                <h3>Formação</h3>
              </div>
              <p>
                Com formação em Educação Física pela Universidade de São Paulo (USP) e diversas certificações internacionais, incluindo NASM (National Academy of Sports Medicine) e ACE (American Council on Exercise).
              </p>
            </div>
            <div className="about-card">
              <div className="about-card-header">
                <FaUsers className="about-icon" />
                <h3>Clientes</h3>
              </div>
              <p>
                Ao longo dos anos, trabalhei com uma variedade de clientes, desde iniciantes até atletas profissionais, ajudando cada um a alcançar seus objetivos únicos.
              </p>
            </div>
            <div className="about-card">
              <div className="about-card-header">
                <FaBullseye className="about-icon" />
                <h3>Missão</h3>
              </div>
              <p>
                Junte-se a mim e comece sua jornada rumo a uma vida mais saudável e feliz. Estou aqui para apoiar você em cada passo do caminho!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;