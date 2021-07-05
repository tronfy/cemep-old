import React from 'react'

import Destaque from '../components/Destaque'
import Head from '../components/Head'

const Destaques: React.FC = () => {
  return (
    <>
      <Head title="Destaques" />

      <main>
        <h1>Destaques</h1>

        <Destaque
          ano={2019}
          titulo="OBMEP - Olimpíada Brasileira de Matemática das escolas públicas"
          descricao="5 alunos com Menção Honrosa"
        >
          <ul>
            <li>Barbara Savani de Loiola</li>
            <li>Camila Rodrigues Moura</li>
            <li>Jean Okabe Rezende Piton</li>
            <li>Pedro Ribeiro de Oliveira</li>
            <li>Vinicius Gabriel Moura dos Santos</li>
          </ul>
        </Destaque>

        <Destaque
          ano={2019}
          titulo="BRAGANTEC - Feira de Ciência e Tecnologia"
          descricao="2º lugar na categoria Informática"
        >
          <p>
            Trabalho: &quot;HOSPITAL DIGITAL - Gerenciamento de bolsas de
            sangue, medula óssea e leitos em hospitais&quot;
          </p>
          Alunos:
          <ul>
            <li>Rhaiani Isabele Vilela</li>
            <li>Victor Gomes Campos professores</li>
          </ul>
          Orientadores:
          <ul>
            <li>Daniel Rinaldi Mendonça</li>
            <li>Bruno Molero da Silva</li>
          </ul>
        </Destaque>

        <Destaque
          ano={2018}
          titulo="OBMEP - Olimpíada Brasileira de Matemática das escolas públicas"
          descricao="5 alunos com Menção Honrosa"
        >
          <ul>
            <li>Aline Ladislau Lima</li>
            <li>Briann Oliveira Gomes</li>
            <li>Camila Rodrigues Moura</li>
            <li>Laura Nunes Fochi</li>
            <li>Nathan Darbello Nogueira da Silva</li>
          </ul>
        </Destaque>

        <Destaque
          ano={2018}
          titulo="Apresentação de TCC dos alunos do Técnico em Informática"
          descricao="5 alunos com Menção Honrosa"
        >
          <a href="http://www.paulinia.sp.gov.br/noticias?id=4018">
            <h3>Apresentações de TCC dia 25/10</h3>
          </a>
          <a href="https://www.flickr.com/photos/prefpauliniasp/sets/72157701211568851">
            <h3>Algumas fotos</h3>
          </a>
          <a href="http://www.paulinia.sp.gov.br/noticias?id=4035">
            <h3>Apoio familiar no TCC em 31/10</h3>
          </a>
          <a href="https://www.flickr.com/photos/prefpauliniasp/sets/72157702997550755/with/45586970842/">
            <h3>Mais fotos</h3>
          </a>
        </Destaque>

        <Destaque
          ano={2017}
          titulo="Diversas aprovações em universidades públicas e privadas"
        />

        <Destaque
          ano={2017}
          titulo="OBMEP - Olimpíada Brasileira de Matemática das escolas públicas"
          descricao="9 alunos com Menção Honrosa"
        >
          <ul>
            <li>Barbara Caroline Massola Gomes</li>
            <li>Camila Rodrigues Moura</li>
            <li>Daniel José Rodrigues da Silva</li>
            <li>Isabelle Giatti Domingues</li>
            <li>Joas Henrique Souza de Jesus</li>
            <li>Laura Nunes Fochi</li>
            <li>Liliane Gomes Braga</li>
            <li>Marco Antonio Gomes Junior</li>
            <li>Thiago Grigolon Escudero</li>
          </ul>
        </Destaque>

        <Destaque
          ano={2016}
          titulo="OBMEP - Olimpíada Brasileira de Matemática das escolas públicas"
          descricao="7 alunos com Menção Honrosa"
        >
          <ul>
            <li>Alfredo Albélis Batista Filho</li>
            <li>Cleofas Peres Santos</li>
            <li>Daniel José Rodrigues</li>
            <li>Gustavo Locatelli Helena</li>
            <li>Joas Henrique Souza de Jesus</li>
            <li>Laís Furlan Ferreira</li>
            <li>Vinícius Abrantes Pereira</li>
          </ul>
        </Destaque>

        <Destaque
          ano={2012}
          titulo="OBFEP - Olimpíada Brasileira de Física das escolas públicas"
          descricao="3 medalhas de ouro e 1 medalha de prata"
        />

        <Destaque
          ano={2011}
          titulo="OBMEP - Olimpíada Brasileira de Matemática das escolas públicas"
          descricao="6 alunos com Menção Honrosa"
        />

        <Destaque
          ano={2011}
          titulo="OBFEP - Olimpíada Brasileira de Física das escolas públicas"
          descricao="1 Medalha de ouro"
        />

        <Destaque
          ano={2010}
          titulo="OBFEP - Olimpíada Brasileira de Física das escolas públicas"
          descricao="1 Medalha de ouro e 4 Medalhas de bronze"
        />

        <Destaque
          ano={2008}
          titulo="OAH - Olimpíada de Algorítmo da HostNet"
          descricao="Finalista Nacional e 1º lugar no estado de São Paulo"
        />
      </main>
    </>
  )
}

export default Destaques
