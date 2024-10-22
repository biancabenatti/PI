import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null); // openIndex armazenará o índice da pergunta que está aberta. Quando o componente é montado, o openIndex é inicializado como null. Isso significa que nenhuma resposta está visível inicialmente.
    // Quando o usuário clica no botão + ou - para uma pergunta, a função toggleAnswer é chamada, passando o índice da pergunta clicada
    //Se o índice da pergunta que está sendo clicada é o mesmo que o openIndex atual, isso significa que a resposta já está aberta, então setOpenIndex é chamado com null, fechando a resposta.
    //Se o índice é diferente, setOpenIndex armazena o novo índice, abrindo a resposta correspondente.
   
    const toggleAnswer = (index) => { // Função para alternar a visibilidade da resposta
      setOpenIndex(openIndex === index ? null : index);
    };
  
    const faqs = [
      { question: "Pergunta 1", answer: "Essa é a resposta para a pergunta 1." },
      { question: "Pergunta 2", answer: "Essa é a resposta para a pergunta 2." },
      //  mais perguntas 
    ];
  
    return (
      <div>
        <h2 id="faq-section">Perguntas Frequentes (FAQ)</h2>
        {/* Mapeia sobre o array de perguntas e respostas */}
        {faqs.map((faq, index) => (
          <div key={index}>
            <strong>{faq.question}</strong>
            {/* Botão que alterna a resposta ao ser clicado */}
            <button onClick={() => toggleAnswer(index)}>
              {openIndex === index ? '-' : '+'} {/* Exibe '-' se a pergunta estiver aberta, caso contrário exibe '+' */}
            </button>
           
            {openIndex === index && <div><p>{faq.answer}</p></div>}  {/* Renderiza a resposta apenas se o índice da pergunta atual for o mesmo que openIndex. Se a expressão à esquerda do && for verdadeira (ou seja, não for null, undefined, false, 0, ou uma string vazia), então a expressão à direita será avaliada e seu resultado será retornado.*/}
          </div>
        ))}
      </div>
    );
};


export default FAQ;