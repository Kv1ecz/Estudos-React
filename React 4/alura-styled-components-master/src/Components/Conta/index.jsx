import React, { useState } from "react";
import styled from "styled-components";

import privado from "../../assets/images/privado.svg";
import olho_icone from "../../assets/images/olho.svg";
import dinheiro from "../../assets/images/dinheiro.svg";

import { Icone, IconeTema, Box, Btn, Saldo, Detalhe } from "../UI";


//herda o css do styled component Icone e aplica no atual
const IconeMargin = styled(Icone)`
  margin-top: 2px;
`

const Conta = () => {
  const [toggleState, untoggle] = useState(true);

  const toggleHandler = () => {
    untoggle((toggleState) => !toggleState);
  };

  return (
    <Box>
      <h2>Conta</h2>
      <div style={{ fontSize: "26px", padding: "20px 0" }}>
        Saldo disponível{" "}
        <span>
          <IconeTema src={dinheiro} alt="Ícone Saldo"/>
        </span>
        {toggleState ? ( 
          <Saldo>
            <Detalhe>R$</Detalhe> 0,00{" "}
          </Saldo>
             
        ) : null}
      </div>

      <Btn onClick={toggleHandler}>
        <IconeMargin
          src={toggleState ? privado : olho_icone}
          alt="Privacidade do Saldo"
        />
      </Btn>
    </Box>
  );
};

export default Conta;
