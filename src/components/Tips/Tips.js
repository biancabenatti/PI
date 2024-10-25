import React, { useEffect } from 'react';
import './Tips.css'; 

const Tips = () => {
  const tipsData = [
    {
      title: "Construção de casas: documentação necessária",
      description: "Saiba quais são os documentos necessários para a construção de casas.",
      link: "https://avt.com.br/construcao-de-casas-documentacao-necessaria/",  
    },
    {
      title: "Dica 2",
      description: "Utilize cores diferentes para categorizar suas notas.",
      link: "", 
    },
    {
      title: "Dica 3",
      description: "Revise suas notas regularmente para melhor retenção.",
      link: "", 
    },
  ];

  return (
    <div className="tips-container" id="tips">
      {tipsData.map((tip, index) => (
        <div key={index} className="tip-card" data-aos="fade-up">
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

