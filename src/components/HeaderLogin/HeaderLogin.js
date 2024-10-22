import React from 'react';

const HeaderLogin = ({ user = {}, fileCount = 0, onBack }) => {
  return (
    <div className="header-login">
      <div className="sidebar">
        <img src={user.photo || 'default-avatar.png'} alt="User" className="user-photo" />
        <p>{fileCount} arquivos enviados</p>
        <button onClick={onBack}>Voltar</button>
      </div>
    </div>
  );
};


const App = () => {
  const user = {
    photo: 'https://example.com/user-photo.jpg', 
  };
  
  const fileCount = 5; 
  
  const handleBack = () => {
    console.log('Voltando...');
  };

  return <HeaderLogin user={user} fileCount={fileCount} onBack={handleBack} />;
};

export default App;
