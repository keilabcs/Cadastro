import React from 'react'
import Main from '../template/Main'
import { Link } from 'react-router-dom'

export default props =>
    <Main icon="home" title="Início"
        subtitle="Projeto Visual Sketching.">
        <div className='display-4'>Bem Vindo!</div>
        <hr />
        <p className="mb-0">Este projeto de pesquisa envolve a criação de um sistema que permite o desenvolvedor descobrir fragmentos de código a partir de imagens e assim promover o uso de código já validado/testado. 
        Detalhes podem ser encontrados no position paper Visual Sketching (ICSE New Ideas and Emerging Results 2020). <Link to="/sobre">"https://www.cin.ufpe.br/~damorim/publications/damorim-etal-icsenier2020.pdf"</Link></p>
    </Main>