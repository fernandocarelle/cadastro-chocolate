import React, { useState, useEffect } from 'react';
import GlobalStyle from './styles/global';
import { Container, ChocolateList } from './styles/style';
import chocolateImg from './assets/images/chocolate.svg';
import api from './services/api';

function App() {
  const [infos, setInfos] = useState([]);

  useEffect(() => {
    async function loadInfos() {
      const response = await api.get('');

      setInfos(response.data);
    }
    loadInfos();
  }, []);
  return (
    <div className="App">
      <>
        <GlobalStyle />
        <Container>
          <img src={chocolateImg} alt="Logo barra de chocolate" />
          <h1>Chocolates</h1>
          <ChocolateList>
            {infos.map((info) => (
              <li key={info._id}>
                <div>
                  <img src={info.imagem} alt="Imagem do chocolate" />
                  <div>
                    <h2>{info.nome}</h2>
                    <p>{info.marca}</p>
                    <p> R$ {info.valor}</p>
                  </div>
                </div>
              </li>
            ))}
          </ChocolateList>
        </Container>
      </>
    </div>
  );
}

export default App;
