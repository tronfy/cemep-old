import React from 'react'

import styles from '../styles/Fotos.module.scss'

type Props = {
  path: string
  max: number
}

let modal

const modalImg = e => {
  const img = e.target
  modal = document.getElementById('mod_' + img.id)
  const modalImg = document.getElementById('modimg_' + img.id)

  modal.style.display = 'block'
  modalImg.setAttribute('src', img.src)
}

const closeModal = () => {
  modal.style.display = 'none'
}

const Fotos: React.FC<Props> = props => {
  const imgs = []

  for (let i = 1; i < props.max; i++)
    imgs.push('/fotos/' + props.path + '/' + i + '.jpg')

  return (
    <>
      {imgs.map((img, idx) => (
        <div key={idx}>
          <img
            className={styles.img}
            src={img}
            id={props.path + idx}
            onClick={modalImg}
          />
          <div
            className={styles.modal}
            id={'mod_' + props.path + idx}
            onClick={closeModal}
          >
            <span className={styles.close} onClick={closeModal}>
              &times;
            </span>
            <img
              className={styles.modal_content}
              id={'modimg_' + props.path + idx}
            />
          </div>
        </div>
      ))}
    </>
  )
}
export default Fotos
