import React from 'react'

import Head from '../components/Head'
import styles from '../styles/Vestibulinho.module.scss'

const Vestibulinho: React.FC = () => {
  return (
    <>
      <Head title="Vestibulinho" />

      <main className={styles.vestibulinho}>
        <h1>Vestibulinho 2022</h1>
        <h2>
          15/02: <a href="8a_chamada_2022.pdf">Aprovado na 8ª chamada(vaga remanescente)</a>
          <br />
          Matrícula dia 16 e 17/02 das 8h às 17h
          <br />
          <br />
          11/02: <a href="7a_chamada_2022.pdf">Aprovados na 7ª chamada(vagas remanescentes)</a>
          <br />
          Matrícula dias 14 e 15/02 das 8h às 17h
          <br />
          <br />
          10/02: <a href="6a_chamada_2022.pdf">Aprovados na 6ª e última chamada</a>
          <br />
          Matrícula dias 10 e 11/02 das 8h às 17h
          <br />
          <br />
          07/02: <a href="5a_chamada_2022.pdf">Aprovados em 5ª chamada</a>
          <br />
          Matrícula dias 08 e 09/02 das 8h às 17h
          <br />
          <br />
          04/02: <a href="4a_chamada_2022.pdf">Aprovados em 4ª chamada</a>
          <br />
          Matrícula dias 04 e 07/02 das 8h às 17h
          <br />
          5ª chamada em 07/02/22 às 18h, se houver vagas
          <br />
          <br />
          01/02: <a href="3a_chamada_2022.pdf">Aprovados em 3ª chamada</a>
          <br />
          <a href="3a_chamada_EE.pdf">Aprovados em 3ª chamada os candidatos com deficiência</a>
          <br />
          Matrícula dias 02 e 03/02 das 8h às 17h
          <br />
          4ª chamada em 03/02/22 às 18h
          <br />
          <br />
          27/01: <a href="2a_chamada_2022.pdf">Aprovados em 2ª chamada</a>
          <br />
          <a href="2a_chamadaEE.pdf">Aprovados em 2ª chamada os candidatos com deficiência</a>
          <br />
          Matrícula dias 28/01 das 8h às 17h e 01/02 das 9h às 17h
          <br />
          Obs: dia 31/01 a escola estará fechada para desinsetização
          <br />
          3ª chamada em 01/02/22 às 18h
          <br />
          <br />
          15/12: resultado final:
          <br />
          <a href="1a_chamada_2022.pdf">Aprovados em 1ª chamada</a>
          <br />
          <a href="classif_geral_2022.pdf">Classificação geral</a>
          <br />
          <a href="Doc_matricula.pdf">Orientações e documentos para matrícula</a>
          <br />
          Matrícula dias 26 e 27/01/2022 das 8h às 17h
          <br />
          2ª chamada em 27/01/22 às 18h
          <br />
          <br />
          06/12: Candidatos com inscrição deferida: <a href="CandidatosAptos.pdf">veja aqui</a>
          <br />
          Recursos somente presencial
          <br />
          Dias 07, 08 e 09/12 das 8h às 17h
          <br />
          <br />
          08/11: Inscrições indeferidas: <a href="Indeferidas.pdf">veja aqui</a>
          <br />
          <br />
          Inscrições de 15/09 a 15/10/2021 (encerradas)
          <br />
        </h2>
        <h2>
          Veja o Edital completo <a href="Edital Vestibulinho 2022.pdf">aqui</a>
        </h2>
      </main>
    </>
  )
}

export default Vestibulinho
