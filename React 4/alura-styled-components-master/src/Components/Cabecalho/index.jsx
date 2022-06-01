import React from "react";
import styled from "styled-components";
import bank_logo from "../../assets/images/bank_logo.svg";
import { ImagemLogo } from "../UI";

import { corPrimaria } from "../UI/variaveis";




const BtnCabecalho = styled.a`
  text-align: center;
  border-radius: 3px;
  padding: 5px 20px;
  margin: 0 10px;
  font-weight: 600;
  border: 2px solid white;

  background: ${(props) => (props.primary ? "white" : corPrimaria)};
  color: ${(props) => (props.primary ? corPrimaria : "white")};
`

const StyleHeader = styled.nav`
  background-color: ${corPrimaria};
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 10vh;
  align-items: center;
`



const Cabecalho = () => {
  return (
    <StyleHeader>
        <ImagemLogo src={bank_logo} alt="ByteBank"/>
        <div>
          <BtnCabecalho primary href="https://google.com">Ajuda</BtnCabecalho>
          <BtnCabecalho href="https://google.com">Sair</BtnCabecalho>
        </div>
      </StyleHeader>
  );
};

export default Cabecalho;
