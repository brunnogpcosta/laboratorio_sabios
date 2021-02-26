import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import api from '../../services/api'

import './Baratos.css';

import RightContent from '../../components/RightContent/RightContentComponent'

export default class Baratos extends Component {
  state = {
    cursosBaratos: [],
  }

  async componentDidMount() {
    const response = await api.get('allCourses')
    const objetoOrdenado = response.data.cursos.sort((a, b) => (parseFloat(a.preco) > parseFloat(b.preco)) ? 1 : -1)

    //console.log(objetoOrdenado)
    this.setState({
      cursosBaratos: objetoOrdenado
    })

  }


  render() {

    const { cursosBaratos } = this.state
    const msg = "Esta página lista os cursos por ordem de preço. Vai do menor ao maior valor de investimento."

    return (
      <div id="baratosContainer">

        <div id="titleContent">
          <h2>Mais Baratos</h2>
        </div>


        <div className="baratosCursosContent">


          {cursosBaratos.map(cursoBarato => (

            <Link to={{
              pathname: `/detalhe/${cursoBarato.id}`,
              state: {
                nomeCurso: cursoBarato.nomeCurso,
                conteudoCurso: cursoBarato.conteudoCurso,
                preco: cursoBarato.preco,
                thumb: cursoBarato.thumb,
                divulgacao: cursoBarato.divulgacao.site,
                pagamento: cursoBarato.comprar.hotlink,
                formato: cursoBarato.formato
              }
            }}>
              <figure key={cursoBarato.id}>
                <div className="baratoCourse">R$ {cursoBarato.preco}</div>
                <img src={cursoBarato.thumb} alt={`foto ${cursoBarato.nomeCurso}`} />
                <figcaption title={cursoBarato.nomeCurso}>
                  {cursoBarato.nomeCurso}
                </figcaption>
              </figure>
            </Link>

          ))}



        </div>

        <RightContent mensagem={msg} />

      </div >
    )
  }
}
