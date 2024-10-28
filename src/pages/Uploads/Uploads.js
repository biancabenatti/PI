import React, { useState } from 'react';
import AddFileModal from '../../components/AddFileModal/AddFileModal';
import { MdDeleteForever } from "react-icons/md";
import './Uploads.css';
import arquivo_nao_encontrado from '../../assets/arquivo_nao_encontrado.jpg';

const Uploads = () => {
  const [files, setFiles] = useState([]); // Cria um estado files que armazena uma lista de arquivos. Inicialmente, é um array vazio.
  const [isModalOpen, setModalOpen] = useState(false); //Cria um estado isModalOpen que controla se o modal para adicionar arquivos está aberto ou fechado. Inicialmente, está fechado (false).

  const addFile = (fileData) => { // Define uma função que será chamada quando um novo arquivo for adicionado pelo modal.
    const newFileData = {
        ...fileData, // Arquivo atual
        date: new Date().toLocaleString(), // Adiciona a data atual ao novo arquivo. // toLocaleString() converter o objeto de data em uma string, formatada de acordo com as convenções locais do usuário.
      };
    
    setFiles([...files , newFileData]); //Atualiza o estado files adicionando o novo fileData (que contém informações do arquivo, como título e observação). O operador spread (...) é usado para criar uma nova array com os arquivos existentes e o novo arquivo.
    setModalOpen(false); // Fecha o modal após adicionar o arquivo.
  };

  // ...files arquivos anteriores
  const closeModal = () => {
    setModalOpen(false);
  };

  const deleteFile = (index) => {
    const newFiles = files.filter((_, i) => i !== index); // Remove o arquivo selecionado.
    setFiles(newFiles); // Atualiza a lista de arquivos.
  };

  return (
    <div>
    <h1>Lista de Arquivos</h1>
    <button onClick={() => setModalOpen(true)}>Adicionar Arquivo</button>
  
    {isModalOpen && <AddFileModal onAddFile={addFile} onClose={closeModal}/>}
  
    {files.length === 0 ? ( 
      <div className="empty-state">
        <img src={arquivo_nao_encontrado} alt="Nenhum arquivo encontrado" />
        <p>Nenhum arquivo encontrado. Adicione um arquivo.</p>
      </div>
    ) : (
      <div class="table-container ">
      <table className="files">
        <thead>
          <tr>
            <th>Título</th>
            <th>Observação</th>
            <th>Data</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {files.map((file, index) => (
            <tr key={index}>
              <td>{file.title}</td>
              <td>{file.observation}</td>
              <td>{file.date}</td>
              <td>
                <button onClick={() => deleteFile(index)} className="delete">
                  <MdDeleteForever />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    )}
  </div>
  );
};

export default Uploads;
// Dentro do componente Uploads tem um modal (AddFileModal) que é exibido quando isModalOpen é true. A função addFile é responsável por adicionar um novo arquivo ao estado files do componente Uploads.
// No AddFileModal, terá um código onde, após a seleção de um arquivo e o envio do formulário, a função onAddFile será chamada, geralmente passando os dados do arquivo como argumento.

// onAddFile é uma propriedade que está sendo  passanda para o componente AddFileModal. Essa convenção é comum em React, onde prefixos como on indicam que a propriedade é uma função de callback que será chamada em um determinado evento (neste caso, quando um arquivo é adicionado). 
 
// {addFile}: Aqui, você está passando a função addFile como valor para a prop onAddFile. Isso significa que, quando o evento apropriado acontecer dentro do AddFileModal (por exemplo, quando um arquivo é adicionado e o formulário é enviado), o modal pode chamar essa função.