import React from 'react'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './assets/css/base/base.css'

import Home from './paginas/Home'
import Sobre from './paginas/Sobre'
import Pagina404 from './paginas/Pagina404';
import Cabecalho from './components/Cabecalho';
import Post from './paginas/Post';
import Categoria from './paginas/Categoria';


function App() {

  

  return (
  <>
      <Router>
        <Cabecalho/>
        {/* Switch - previne a busca por mais rotas semelhantes mesmo após achar uma correspondencia */}
        <Switch>
          {/* Route - define a renderização da pagina baseado na url */}
          <Route exact path="/"> {/* exact - evita o 'match' parcial da url */}
            <Home/>
          </Route>
          <Route path="/sobre">
            <Sobre/>
          </Route>
          <Route path="/categoria/:id">
            <Categoria/>
          </Route>
          <Route path="/posts/:id"> {/* : é o hook utlizado para fazer o match dos parametros da url com o route e a api */}
            <Post/>
          </Route>
          {/*Route sem path => route default*/}
          <Route>
            <Pagina404/>
          </Route>
        </Switch>
      </Router>
      
  </>
  )
}

export default App
