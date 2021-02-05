import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from '../Pages/HomePage/HomePage';
import Popular from '../Pages/Populares/Populares';
import Barato from '../Pages/Baratos/Baratos';
import Pesquisa from '../Pages/Pesquisa/Pesquisa';
import Trilha from '../Pages/Trilha/Trilha';
import TrilhaChoice from '../Pages/Trilha/TrilhaChoice';
import Ranking from '../Pages/Ranking/Ranking';
import Detalhe from '../Pages/CursoDetalhe/CursoDetalhe';
import Categoria from '../Pages/categoriaCurso/CategoriaCurso'

import Spam from '../components/MelhorEmailSpam/MelhorEmailSpam'



export class Routes extends Component {
  render() {
    return (

      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/populares' component={Popular} />
        <Route path='/barato' component={Barato} />
        <Route path='/pesquisa' component={Pesquisa} />
        <Route path='/trilha' component={Trilha} />
        <Route path='/trilhaCompleta' component={TrilhaChoice} />
        <Route path='/ranking' component={Ranking} />
        <Route path='/detalhe' component={Detalhe} />
        <Route path='/categoria' component={Categoria} />
        <Route path='/spam' component={Spam} />
        <Route component={HomePage} />
      </Switch>

    )
  }
};

export default Routes;