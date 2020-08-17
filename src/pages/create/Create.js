import React, { useState } from 'react';
import GlobalStyle from '../../styles/global';
import { Container } from '../../components/container';
import { ChocolateForm } from './style';
import chocolateImg from '../../assets/images/chocolate.svg';
import api from '../../services/api';

function Create() {
  const token = localStorage.getItem('@chocolate-front/token');

  if (!token) {
    window.location.href = '/login';
  }

  const [infos, setInfos] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const onFormSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password: pass, confirmPassword } = infos;

    if (pass !== confirmPassword) {
      return alert('As senhas digitadas não conferem');
    }

    const infosToApi = {
      name,
      email,
      pass,
    };

    const response = await api.post('/users', infosToApi);
    console.log(response);

    if (response.status !== 201) {
      console.log(response);
      return alert('Houve um erro ao criado o usuário');
    }

    alert('Usuário criado com sucesso');

    window.location.href = '/'; // redireciona a página para /
  };

  const handleInputChange = (e) => {
    setInfos({
      ...infos,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="App">
      <>
        <GlobalStyle />
        <Container>
          <img src={chocolateImg} alt="Logo barra de chocolate" />
          <h1>Chocolates</h1>
          <h2>Cadastrar usuário</h2>

          <ChocolateForm onSubmit={onFormSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Digite seu e-mail"
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="name"
              placeholder="Digite seu nome"
              onChange={handleInputChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Digite sua senha"
              onChange={handleInputChange}
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirme sua senha"
              onChange={handleInputChange}
            />

            <button type="submit">Cadastrar</button>
          </ChocolateForm>
        </Container>
      </>
    </div>
  );
}

export default Create;
