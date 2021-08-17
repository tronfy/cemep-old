import React from 'react'

import styles from '../styles/Footer.module.scss'

const Footer: React.FC = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div>
          <p>Av Brasil, 330 - Vila Bressani - Paulínia - SP</p>
          <p>(19) 3874-9457 | sec.cemep@gmail.com</p>
          <p className={styles.notice}>
            Cemep © {new Date().getFullYear()} - Todos os direitos reservados
          </p>
        </div>
      </footer>
    </>
  )
}
export default Footer
