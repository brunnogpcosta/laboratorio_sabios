import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import api from '../../services/api'

import './Pesquisa.css'


import searchBt from './img/search.svg'

let response;

export default class Pesquisa extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      cursos: [],
      cursosFiltrados: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  async componentDidMount() {
    response = await api.get('allCourses')
    this.setState({ cursos: response.data.cursos })
    this.setState({ cursosFiltrados: response.data.cursos })
  }

  handleSearch(termo) {
    //console.log("Termo: ", termo)

    this.setState({
      cursosFiltrados: this.state.cursos.filter(curso => curso.nomeCurso.toLowerCase().indexOf(termo.toLowerCase()) > -1)

    })
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
    this.handleSearch(event.target.value)
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    this.handleSearch(this.state.value)
    event.preventDefault();
  }


  render() {

    const { cursosFiltrados } = this.state

    return (
      <div id="pesquisaContent">
        <h2>Encontre seu Curso</h2>

        <label htmlFor="search">
          <img src={searchBt} alt="imagem de Pesquisa" />
          <input type="search" value={this.state.value} onChange={this.handleChange}></input>
        </label>
        <h3>{cursosFiltrados.length} Resultado(s) Encontrado(s)</h3>

        <div className="pesquisaContainer">

          {cursosFiltrados.map(cursoFiltrado => (
            <Link to={{
              pathname: `/detalhe/${cursoFiltrado.id}`,
              state: {
                nomeCurso: cursoFiltrado.nomeCurso,
                conteudoCurso: cursoFiltrado.conteudoCurso,
                preco: cursoFiltrado.preco,
                thumb: cursoFiltrado.thumb,
                divulgacao: cursoFiltrado.divulgacao.site,
                pagamento: cursoFiltrado.comprar.hotlink,
                formato: cursoFiltrado.formato
              }
            }} >
              <figure key={cursoFiltrado.id}>

                <img src={cursoFiltrado.thumb} alt={`foto do curso ${cursoFiltrado.nomeCurso}`}></img>
                <figcaption title={cursoFiltrado.nomeCurso}>
                  <strong>{cursoFiltrado.nomeCurso}</strong><br />
                  {cursoFiltrado.formato}
                </figcaption>
                <div id="infoComplementa" style={{ color: "#444" }}>
                  <div className="priceTag">
                    R$ {cursoFiltrado.preco}<br />
                  </div>
                </div>
              </figure>
            </Link>




          ))}


        </div>


      </div>
    )
  }
}
