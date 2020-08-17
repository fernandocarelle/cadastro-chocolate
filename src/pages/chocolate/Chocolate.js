import React, { useState } from 'react';
import GlobalStyle from '../../styles/global';
import { Container } from '../../components/container';
import { ChocolateForm } from './style';
import chocolateImg from '../../assets/images/chocolate.svg';
import api from '../../services/api';

function Chocolate() {
  const token = localStorage.getItem('@chocolate-front/token');

  if (!token) {
    window.location.href = '/login';
  }

  const formData = new FormData();

  const [infos, setInfos] = useState({
    marca: '',
    valor: '',
    nome: '',
  });

  const onFormSubmit = async (e) => {
    e.preventDefault();

    Object.keys(infos).forEach((key) => formData.append(key, infos[key]));

    const response = await api({
      method: 'post',
      url: '/',
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' },
    });

    if (response.status !== 201) {
      console.log(response);
      return alert('Houve um problema para cadastrar chocolate');
    }

    alert('Chocolate cadastrado com sucesso');

    window.location.href = '/'; // redireciona a página para /
  };

  const handleImageChange = (e) => {
    formData.append('file', e.target.files[0]);
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
          <h2>Cadastrar chocolate</h2>

          <ChocolateForm onSubmit={onFormSubmit}>
            <input
              type="text"
              name="marca"
              placeholder="Digite a marca"
              onChange={handleInputChange}
            />
            <input
              type="number"
              name="valor"
              placeholder="Digite o valor"
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="nome"
              placeholder="Digite o nome"
              onChange={handleInputChange}
            />

            <input type="file" name="file" onChange={handleImageChange} />

            <button type="submit">Cadastrar</button>
          </ChocolateForm>
        </Container>
      </>
    </div>
  );
}

export default Chocolate;
