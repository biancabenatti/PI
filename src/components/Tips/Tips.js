// src/pages/Tips.js
import React from 'react';
import './Tips.css'; // Estilos para o componente

const Tips = () => {
  const tipsData = [
    {
      title: "Dica 1",
      description: "Aprenda a organizar suas notas de forma eficiente.",
      link: "https://example.com/tip1", // Substitua pelo link desejado
    },
    {
      title: "Dica 2",
      description: "Utilize cores diferentes para categorizar suas notas.",
      link: "https://example.com/tip2", // Substitua pelo link desejado
    },
    {
      title: "Dica 3",
      description: "Revise suas notas regularmente para melhor retenção.",
      link: "https://example.com/tip3", // Substitua pelo link desejado
    },
  ];

  return (
    <div className="tips-container" id="tips">
      {tipsData.map((tip, index) => (
        <div key={index} className="tip-card">
          <h3>{tip.title}</h3>
          <p>{tip.description}</p>
          <a href={tip.link} target="_blank" rel="noopener noreferrer" className="tip-button">
            Saiba mais
          </a>
        </div>
      ))}
    </div>
  );
};

export default Tips;
