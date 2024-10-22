import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados para a API ou serviço de email
    console.log('Dados enviados:', formData);
    // Limpar o formulário após o envio
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="contact-us">
      <h2>Fale Conosco</h2>
      <form onSubmit={handleSubmit}>
        <div class="input">
          <label htmlFor="name"></label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder='Nome'
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email"></label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder='Email'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="phone"></label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder='Telefone'
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message"></label>
          <textarea
            id="message"
            name="message"
            placeholder='Mensagem'
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default ContactUs;
