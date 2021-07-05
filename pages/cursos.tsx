import React from 'react'

import Head from '../components/Head'
import styles from '../styles/Cursos.module.scss'

const Cursos: React.FC = () => {
  return (
    <>
      <Head title="Cursos" />

      <main className={styles.cursos}>
        <h1>Curso Oferecido para 2020</h1>
        <h2>PERÍODO INTEGRAL (manhã e tarde)</h2>

        <h3>Ensino Médio concomitante com Técnico em Informática</h3>
        <p>Duração do Curso: 3 anos</p>
        <p>Curso destinado a alunos concluintes do Ensino Fundamental</p>
        <p>
          <b>80 vagas</b>
        </p>
        <p>Obs: Para 2020 NÃO será oferecido o curso noturno</p>
      </main>
    </>
  )
}

export default Cursos
