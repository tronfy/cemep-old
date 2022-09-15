import React from 'react'

import Head from '../components/Head'
import styles from '../styles/Vestibulinho.module.scss'

const Vestibulinho: React.FC = () => {
  return (
    <>
      <Head title="Vestibulinho" />

      <main className={styles.vestibulinho}>
        <h1>Vestibulinho 2023</h1>
        <h2>
          <u>Técnico em Informática concomitante com Ensino Médio</u><br />
          Período integral com duração de 3 anos<br />
          83 vagas, sendo 3 para pessoas com deficiência<br />
          Inscrição de 15/09 a 17/10<br /><br />
          <b>Requisitos para inscrição</b><br />
        </h2>
        <h4>
          - o candidato deve estar cursando obrigatoriamente o 9ºano do Ensino Fundamental em 2022<br />
          - Não será realizada prova presencial<br />
          - A Comprovação de escolaridade, será através dos seguintes documentos: Boletim Escolar ou Histórico Escolar Parcial ou 
          Declaração Escolar conforme <a href="declaracao.pdf">anexo</a> contendo o quinto conceito (resultado final) das notas de 
          Língua Portuguesa, Matemática, Ciências, História, Geografia, Arte, Educação Física e Língua Estrangeira dos 6º anos, 
          7º anos, 8º anos e as notas do 1º bimestre e 2º bimestre do 9º ano cursado em 2022; Os documentos deverão conter nome, 
          carimbo e assinatura do responsável pela instituição, assim como dados para contato. Documentos que não possuem assinatura 
          digital obrigatoriamente deverão ser assinados pelo responsável da Instituição.<br /> 
          - No caso de candidatos com deficiência, transtorno do espectro autista, altas habilidades/superdotação, será necessário também 
          o laudo médico ou avaliação neuropsicológica, especificando claramente a deficiência ou as altas habilidades/superdotação.<br /><br />
        </h4>
        <h2>
          Realizar a <a href= "http://sistemas1.paulinia.sp.gov.br/inscCemepEtep/">inscrição</a><br /><br />
        </h2>
        <h2>
          Veja o Edital completo <a href="Edital_2023.pdf">aqui</a>
        </h2>
      </main>
    </>
  )
}

export default Vestibulinho
