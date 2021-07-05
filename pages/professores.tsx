import React from 'react'

import Head from '../components/Head'
import Professor from '../components/Professor'

const Professores: React.FC = () => {
  return (
    <>
      <Head title="Professores" />

      <main>
        <h2>Diretor</h2>
        <ul>
          <li>
            <b>Rogerio Elias Marim</b>
          </li>
        </ul>

        <h2>Professores</h2>
        <ul>
          <Professor nome="Alcimar Veiga Lima de Melo" area="Artes" />
          <Professor
            nome="Ana Lucia D´Elia Vinhal R. de Sousa"
            area="Química"
          />
          <Professor
            nome="André Luís Ruggiero Barroso"
            area="Educação Física"
          />
          <Professor nome="Camila da Silva Oliveira" area="Biologia" />
          <Professor nome="Carmem Ap. Santos Bornancim" area="Português" />
          <Professor nome="Cesar Augusto F. Balbino" area="Informática" />
          <Professor nome="Cilene Vicente dos Santos" area="Português" />
          <Professor
            nome="Cleia Regina B. Ferreira"
            area="História/Filosofia/Sociologia"
          />
          <Professor
            nome="Daniel Teixeira Almeida"
            area="Geografia/Sociologia"
          />
          <Professor nome="Diogo Pelaes" area="Matemática" />
          <Professor nome="Eunice Shintani" area="Educação Física" />
          <Professor nome="Fabiana Cristine Gonçalves" area="Informática" />
          <Professor nome="João Rodrigues dos Santos" area="Administração" />
          <Professor
            nome="João Samuel Rodrigues Santos Junior"
            area="História"
          />
          <Professor nome="Kely C. Boaventura Antoniolli" area="Inglês" />
          <Professor nome="Luciane T. N. Shimozono" area="Inglês" />
          <Professor
            nome="Mirella Christine C. C. Ganzarolli"
            area="Informática"
          />
          <Professor nome="Orlando Yukio Komuro" area="Matemática" />
          <Professor nome="Rafael Bonato" area="Física" />
          <Professor nome="Raquel Cristina Bertolini Lot" area="Informática" />
          <Professor
            nome="Rita de Cássia G. Carvalho"
            area="Orientação Profissional, coordenadora Ensino Médio"
          />
          <Professor nome="Valéria Lemos Silveira" area="Biologia" />
          <Professor
            nome="Wagner Luiz Schmidt"
            area="Informática, coordenador Técnico Informática"
          />
          <Professor
            nome="Wilson Jorge M. dos Santos"
            area="Administração, coordenador Técnico Administração"
          />
        </ul>
      </main>
    </>
  )
}

export default Professores
