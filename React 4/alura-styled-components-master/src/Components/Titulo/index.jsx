import styled from 'styled-components'

//styled components recebe um conteúdo de uma children de um componente pai, focando apenas na estilização desse componente

const Titulo = styled.h1`
  color: ${({theme}) => theme.text};
  padding: 25px 0;
`

//Não há necessidade de mantermos a declaração do componente, nem a classe definida para sua estilização no arquivo css

// const Titulo = ({ children }) => {
//   return <h1 className="titulo">{children}</h1>;
// };
export default Titulo;
