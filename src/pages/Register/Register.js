import React, { useState } from 'react';
import Header from '../../components/Header/Header';

const Register = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do formulário:', formData);
    // Adicionar a lógica para enviar os dados para uma API.
    setFormData({
      nome: '',
      email: '',
      senha: ''
    });
  };

  return (
    <main className="">
      <Header/>
      <div className="">
        <h1 className="">Cadastre-se</h1>
      </div>
      <section className="">
        <h2 className="">Complete seu cadastro</h2>
        <form onSubmit={handleSubmit} className="">
          <fieldset>
            <legend className="">Informações básicas</legend>
            <div className="">
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
              <label className="" htmlFor="nome">Nome</label>
            </div>
            <div className="">
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
              <label className="" htmlFor="email">Email</label>
            </div>
            <div className="">
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
              <label className="" htmlFor="senha">Senha</label>
            </div>
          </fieldset>

          <button type="submit" className="">Cadastrar</button>
        </form>
      </section>
    </main>
  );
};

export default Register;
