import React from 'react';
import './HowItWork.css';
import vetor from '../../assets/Vector 5.png';

const HowItWork = () => {
  return (
    <div id="how-it-work-section">
      <section class="como-funciona">
        <h2 class="titulo-centralizado">Como Funciona</h2>
        <div class="caixas">
          <div class="caixa">
            <h3>1</h3>
          </div>
          <div class="seta">
            <img src={vetor} alt='Vetor' />
          </div>
          <div class="caixa">
            <h3>2</h3>
          </div>
          <div class="seta">
            <img src={vetor} alt='Vetor' />
          </div>
          <div class="caixa">
            <h3>3</h3>
          </div>
        </div>
        <div class="descricoes">
          <p>Descrição detalhada do passo 1.</p>
          <p>Descrição detalhada do passo 2.</p>
          <p>Descrição detalhada do passo 3.</p>
        </div>
      </section>
    </div>


  )
}

export default HowItWork;