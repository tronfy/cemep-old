import React from 'react'

import Link from 'next/link'

import styles from '../styles/Menu.module.scss'

const Menu: React.FC = () => {
  return (
    <div className={styles.menu}>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/historico">
            <a>Histórico</a>
          </Link>
        </li>
        <li>
          <Link href="/cursos">
            <a>Cursos</a>
          </Link>
        </li>
        <li>
          <Link href="/horario">
            <a>Horário de aulas</a>
          </Link>
        </li>
        <li>
          <Link href="/calendario">
            <a>Calendário</a>
          </Link>
        </li>
        <li>
          <Link href="/destaques">
            <a>Destaques</a>
          </Link>
        </li>
        <li>
          <Link href="/fotos">
            <a>Fotos</a>
          </Link>
        </li>
        <li>
          <Link href="/professores">
            <a>Professores</a>
          </Link>
        </li>
        <li>
          <Link href="/vestibulinho">
            <a>Vestibulinho</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}
export default Menu
