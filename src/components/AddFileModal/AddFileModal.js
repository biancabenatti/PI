// src/components/AddFileModal.js
import React, { useState } from 'react';
import './AddFileModal.css';

const AddFileModal = ({ onAddFile, onClose }) => { // O componente AddFileModal recebe uma propriedade chamada onAddFile, que é uma função. Esta função será chamada quando o usuário enviar o formulário, passando os dados do arquivo.
  const [file, setFile] = useState(null); //file: Armazena o arquivo que o usuário seleciona.
  const [title, setTitle] = useState(''); // title: Armazena o título do arquivo.
  const [observation, setObservation] = useState(''); // observation: Armazena a observação que o usuário pode fazer sobre o arquivo.

  const handleFileChange = (e) => { //Esta função é chamada quando o usuário seleciona um arquivo. O arquivo selecionado é acessado através de e.target.files[0], e então atualizado no estado file.
    setFile(e.target.files[0]); // A indexação em 0 significa que você está acessando o primeiro arquivo da lista. Mesmo que o usuário possa selecionar múltiplos arquivos, files[0] é usado para pegar apenas o primeiro.
  };

  const handleSubmit = (e) => { // Esta função é chamada quando o formulário é enviado. Ela impede o comportamento padrão do formulário (que é recarregar a página) e verifica se um arquivo foi selecionado. Se sim, chama a função onAddFile, passando um objeto com o título, a observação e o arquivo. Depois disso, ela limpa os campos de entrada.
    e.preventDefault();
    if (file) {
      onAddFile({ title, observation, file });
      setTitle('');
      setObservation('');
      setFile(null);
    }
  };
  return (
    <div class="modal">
      <form onSubmit={handleSubmit}>
        <input type="file" accept=".pdf,image/*" onChange={handleFileChange} required /> 
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Observação"
          value={observation}
          onChange={(e) => setObservation(e.target.value)}
        />
        <div class="button_components">
        <button type="submit">Adicionar</button>
        <button type="button" onClick={onClose}>Voltar</button>
        </div>
      </form>
    </div>
  );
};

export default AddFileModal;

// O asterisco (*) é um caractere curinga que representa "qualquer tipo" dentro da categoria especificada. Portanto, image/* significa que o input pode aceitar qualquer tipo de arquivo de imagem. 