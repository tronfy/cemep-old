import React from 'react'

import styles from '../styles/Post.module.scss'

type Props = {
  titulo: string
  subtitulo?: string
}

const Post: React.FC<Props> = props => {
  return (
    <div className={styles.post}>
      <h1>{props.titulo}</h1>
      <h2>{props.subtitulo}</h2>
      <div className={styles.content}>{props.children}</div>
    </div>
  )
}
export default Post
