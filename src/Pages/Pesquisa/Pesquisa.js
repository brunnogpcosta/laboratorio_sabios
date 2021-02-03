import React, { Component } from 'react'

import './Pesquisa.css'

import imgCard from './img/graficos-tabelas-sao-objetos-basicos-para-estudo-estatistica-5812154677e56.jpg'
import searchBt from './img/search.svg'

export default class Pesquisa extends Component {
  render() {
    return (
      <div id="pesquisaContent">
        <label htmlFor="search">
          <img src={searchBt} />
          <input type="search"></input>
        </label>
        <h3>28 Resultados Encontrados</h3>

        <div className="pesquisaContainer">
          <a href="#">
            <figure>
              <img src={imgCard}></img>
              <figcaption>
                Estatística Fundamental
            </figcaption>
            </figure>
          </a>

          <a href="#">
            <figure>
              <img src={imgCard}></img>
              <figcaption>
                Estatística Fundamental
            </figcaption>
            </figure>
          </a>


          <a href="#">
            <figure>
              <img src={imgCard}></img>
              <figcaption>
                Estatística Fundamental
            </figcaption>
            </figure>
          </a>

          <a href="#">
            <figure>
              <img src={imgCard}></img>
              <figcaption>
                Estatística Fundamental
            </figcaption>
            </figure>
          </a>

          <a href="#">
            <figure>
              <img src={imgCard}></img>
              <figcaption>
                Estatística Fundamental
            </figcaption>
            </figure>
          </a>

          <a href="#">
            <figure>
              <img src={imgCard}></img>
              <figcaption>
                Estatística Fundamental
            </figcaption>
            </figure>
          </a>

        </div>

      </div>
    )
  }
}