import React from 'react';
import './Results.css';
import result1 from '../../assets/Photo/Resultados/1.jpg'; // Importe as imagens que você deseja usar
import result2 from '../../assets/Photo/Resultados/2.jpg';
import result3 from '../../assets/Photo/Resultados/3.jpg';

const Results = () => {
  return (
    <div className="results">
      <div className="results-content">
        <h2>Resultados</h2>
        <p>
          Veja os resultados incríveis que nossos clientes alcançaram com nossos programas de fitness personalizados. Junte-se a nós e transforme sua vida!
        </p>
        <div className="results-cards">
          <div className="results-card">
            <img src={result1} alt="Resultado 1" />
            <p>Transformação incrível em apenas 3 meses de treinamento intensivo.</p>
          </div>
          <div className="results-card">
            <img src={result2} alt="Resultado 2" />
            <p>Perda de peso significativa e aumento de massa muscular em 6 meses.</p>
          </div>
          <div className="results-card">
            <img src={result3} alt="Resultado 3" />
            <p>Melhoria na flexibilidade e resistência após 4 meses de aulas em grupo.</p>
          </div>
        </div>
        <button className="results-button">Comece Sua Transformação Agora</button>
      </div>
    </div>
  );
};

export default Results;