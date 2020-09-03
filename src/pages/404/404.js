import React from 'react';
import GlobalStyle from '../../styles/global';
import { Container } from '../../components/container';
import chocolateImg from '../../assets/images/chocolate.svg';
import chocolate404 from '../../assets/images/chocolate404.svg';
import { PageTitle } from './style';

function NotFound() {
  return (
    <div className="App">
      <>
        <Container>
          <img src={chocolateImg} alt="Logo barra de chocolate" />
          <h1>Chocolates</h1>
          <PageTitle>404 NOT FOUND</PageTitle>
          <img src={chocolate404} alt="Chocolate quebrado" />
        </Container>
        <GlobalStyle />
      </>
    </div>
  );
}

export default NotFound;
