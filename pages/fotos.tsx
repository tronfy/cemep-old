import React from 'react'

import Collapsible from '../components/Collapsible'
import Fotos from '../components/Fotos'
import Head from '../components/Head'

const toggleCollapsible = e => {
  const col = e.target
  const div = col.parentElement.childNodes[1]

  if (div.style.display !== 'block') div.style.display = 'block'
  else div.style.display = 'none'
}

const Cursos: React.FC = () => {
  return (
    <>
      <Head title="Fotos" />

      <main>
        <h1>Fotos</h1>

        <Collapsible
          onClick={toggleCollapsible}
          title="CEPA 2012 - CEMEP de Portas Abertas"
        >
          <Fotos path="cepa" max={99} />
        </Collapsible>

        <Collapsible
          onClick={toggleCollapsible}
          title="Feira de Talentos Unicamp 2012"
        >
          <Fotos path="talentos" max={22} />
        </Collapsible>

        <Collapsible
          onClick={toggleCollapsible}
          title="Expoflora 2012 - alunos do 1ºW"
        >
          <Fotos path="expoflora" max={22} />
        </Collapsible>
      </main>
    </>
  )
}

export default Cursos
