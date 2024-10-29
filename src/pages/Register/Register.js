import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css'


const Register = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: '', 
  });
  
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.senha !== formData.confirmarSenha) {
      setError('As senhas não correspondem.'); 
      return;
    }
    // Adicionar a lógica para enviar os dados para uma API.
    console.log('Dados do formulário:', formData);

    setFormData({
      nome: '',
      email: '',
      senha: '',
      confirmarSenha: '',
    });
  };

  const handleGoHome = () => {
    navigate('/'); // Redireciona para a home
  };

  return (
    <main className="">
      <div className="">
        <h1 className="">Cadastre-se</h1>
      </div>
      <section className="">
        <form onSubmit={handleSubmit} className="">
          <fieldset>
            <div className="">
              <label className="" htmlFor="nome">Nome</label>
              <input
                name="nome"
                id="nome"
                className="input"
                type="text"
                placeholder="Nome"
                value={formData.nome}
                onChange={handleChange}
                required
              />
            </div>
            <div className="">
              <label className="" htmlFor="email">Email</label>
              <input
                name="email"
                id="email"
                className="input"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="">
              <label className="" htmlFor="senha">Senha</label>
              <input
                name="senha"
                id="senha"
                className="input"
                type="password"
                placeholder="Senha"
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*[ !@#$%^&*_=+-]).{6,12}$"
                title="A senha deve conter entre 6 a 12 caracteres, deve conter pelo menos uma letra maiúscula, um número e não deve conter símbolos."
                value={formData.senha}
                onChange={handleChange}
                required
              />
            </div>
            <div className="">
              <label className="" htmlFor="confirmarSenha">Confirme a Senha</label>
              <input
                name="confirmarSenha"
                id="confirmarSenha"
                className="input"
                type="password"
                placeholder="Confirme a Senha"
                value={formData.confirmarSenha}
                onChange={handleChange}
                required
              />
            </div>
            {error && <p className="error">{error}</p>} {/* Exibe mensagem de erro */}
          </fieldset>

          <button type="submit" className="">Cadastrar</button>
        </form>
        <button onClick={handleGoHome} className="botao voltar">Voltar para a Home</button>
      </section>
    </main>
  );
};

export default Register;

// fieldset é usado dentro de um form para agrupar elementos do form que são relacionados.