import React, { Component } from 'react'

import { Link } from 'react-router-dom';
import api from '../../services/api'

import './HomePageStyle.css'
import imgCard from './img/graficos-tabelas-sao-objetos-basicos-para-estudo-estatistica-5812154677e56.jpg'
import plus from './img/plus-circle.svg'

import RightContentHP from '../../components/RightContentHP/RightContentHPComponent'



export default class HomePage extends Component {
  state = {
    cursos: [],
    cursosTotal: "",
    cursosCategoria: []
  }

  async componentDidMount() {
    const response = await api.get('allCourses')
    const responseCategoria = await api.get('categories')
    let contador = 0;
    const cursosDisponiveisOito = [];
    response.data.cursos.forEach(element => {
      contador = contador + 1;
      if (contador <= 8) {
        cursosDisponiveisOito.push(element)
      }
    });



    this.setState({ cursosTotal: response.data.cursos.length, cursos: cursosDisponiveisOito, cursosCategoria: responseCategoria.data })
  }




  render() {

    const { cursosTotal, cursos, cursosCategoria } = this.state;


    return (
      <div className="homePageContainer">
        <div className="melhoresCursos">
          <div className="pageTitleHomePage">
            <h2>Cursos Disponíveis ({cursosTotal})</h2>
            <Link to={{
              pathname: '/categoria',
              state: {
                categoria: "Cursos Disponíveis",
              }
            }}>
              <img src={plus} alt="Mais Cursos" />
            </Link>
          </div>
        </div>

        <div className="melhoresCursosContent">

          {cursos.map(curso => (

            <Link to={{
              pathname: '/detalhe',
              state: {
                nomeCurso: curso.nomeCurso,
                conteudoCurso: curso.conteudoCurso,
                preco: curso.preco,
                thumb: curso.thumb
              }
            }} >
              <figure>
                <div className="baratoHPCourse">R$ {curso.preco}</div>
                <img src={curso.thumb}></img>
                <figcaption Title={curso.nomeCurso}>
                  {curso.nomeCurso}
                </figcaption>
              </figure>
            </Link>

          ))}

        </div>

        <div id="demaisCursos">
          {cursosCategoria.map(cursoCategoria => (

            <div id="cursoQuadrado">
              <h3 title={cursoCategoria.categoria}>{cursoCategoria.categoria}</h3>
              <Link to={{
                pathname: '/categoria',
                state: {
                  categoria: cursoCategoria.categoria
                }
              }}>
                <img src={plus} alt="Mais Cursos" /></Link>
              <Link className="aFigure" to={{
                pathname: '/detalhe',
                state: {
                  nomeCurso: cursoCategoria.nomeCurso,
                  conteudoCurso: cursoCategoria.conteudoCurso,
                  preco: cursoCategoria.preco,
                  thumb: cursoCategoria.thumb
                }
              }} >
                <figure>
                  <div className="baratoHPCourse">R$ {cursoCategoria.preco}</div>
                  <img src={cursoCategoria.thumb}></img>
                  <figcaption title={cursoCategoria.nomeCurso}>
                    {cursoCategoria.nomeCurso}
                  </figcaption>
                </figure>
              </Link>

            </div>

          ))}


        </div>
        <RightContentHP />
      </div>




    )
  }
}
