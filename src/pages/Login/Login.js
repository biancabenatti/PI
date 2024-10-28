import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    senha: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => { // Esta função é chamada sempre que o valor de um dos campos de entrada muda (quando o usuário digita).
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value }); // Atualiza o estado das credenciais. Utiliza a sintaxe de espalhamento (...credentials) para copiar o estado atual e, em seguida, atualiza o valor da propriedade correspondente ao name com o novo value. Isso garante que apenas o campo que foi alterado seja atualizado.
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Credenciais do usuário:', credentials);
    // Lógica para autenticar o usuário.
    if (credentials.email && credentials.senha) {
      // Após a validação bem-sucedida:
      navigate('/uploads'); // Redireciona para a página de uploads
    }
  };

  const handleGoHome = () => {
    navigate('/'); // Redireciona para a home
  };

  return (
    <main className="">
      <div className="">
        <h1 className="">Login</h1>
      </div>
      <section className="">
        <h2 className="">Acesse sua conta</h2>
        <form onSubmit={handleSubmit} className="">
          <div className="">
            <input
              name="email"
              id="email"
              className="input"
              type="email"
              placeholder="Email"
              value={credentials.email}
              onChange={handleChange}
              required
            />
            <label className="" htmlFor="email">Email</label>
          </div>
          <div className="">
            <input
              name="senha"
              id="senha"
              className="input"
              type="password"
              placeholder="Senha"
              value={credentials.senha}
              onChange={handleChange}
              required
            />
            <label className="" htmlFor="senha">Senha</label>
          </div>
          <button type="submit" className="botao">Login</button>
          <a href="/esqueceu-senha" className="link-esqueceu-senha">Esqueceu a senha?</a>
        </form>
        <button onClick={handleGoHome} className="botao voltar">Voltar para a Home</button>
      </section>
    </main>
  );
};

export default Login;
