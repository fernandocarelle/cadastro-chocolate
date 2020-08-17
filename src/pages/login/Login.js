import React, { useState } from 'react';
import GlobalStyle from '../../styles/global';
import { Container } from '../../components/container';
import { ChocolateForm } from './style';
import chocolateImg from '../../assets/images/chocolate.svg';
import api from '../../services/api';

function Create() {
  const token = localStorage.getItem('@chocolate-front/token');

  if (token) {
    window.location.href = '/';
  }

  const [infos, setInfos] = useState({
    email: '',
    password: '',
  });

  const onFormSubmit = async (e) => {
    e.preventDefault();

    const { email, password: pass } = infos;

    const infosToApi = {
      email,
      pass,
    };

    const response = await api.post('/login', infosToApi);
    console.log(response);

    if (response.status !== 200) {
      console.log(response);
      return alert('Houve um erro ao autenticar usuário');
    }

    localStorage.setItem('@chocolate-front/token', response.data.token);

    alert('Usuário autenticado com sucesso');

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
          <h2>Login</h2>

          <ChocolateForm onSubmit={onFormSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Digite seu e-mail"
              onChange={handleInputChange}
            />

            <input
              type="password"
              name="password"
              placeholder="Digite sua senha"
              onChange={handleInputChange}
            />

            <button type="submit">Login</button>
          </ChocolateForm>
        </Container>
      </>
    </div>
  );
}

export default Create;
