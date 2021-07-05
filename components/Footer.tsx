import React from 'react'

import styles from '../styles/Footer.module.scss'

const Footer: React.FC = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div>
          <p>Av Brasil, 330 - Vila Bressani - Paulínia - SP</p>
          <p>(19) 3833-2643 | 3833-2355 | cemep@paulinia.sp.gov.br</p>
          <p className={styles.notice}>
            Cemep © 2018 - Todos os direitos reservados
          </p>
        </div>
      </footer>
    </>
  )
}
export default Footer
