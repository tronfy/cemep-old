import React from 'react'

import Head from '../components/Head'
import Resultado from '../components/Resultado'
import styles from '../styles/Vestibulinho.module.scss'

const Vestibulinho: React.FC = () => {
  return (
    <>
      <Head title="Vestibulinho" />

      <main className={styles.vestibulinho}>
        <h1>Vestibulinho CEMEP 2021</h1>
        <h2>Vagas preenchidas</h2>

        <Resultado
          ano={2021}
          data="05/02/21"
          matricula={['08/02/2021']}
          chamada={4}
          esgotado={true}
        />

        <Resultado
          ano={2021}
          data="02/02/21"
          matricula={['03/02/2021', '04/02/2021']}
          chamada={3}
          esgotado={true}
        />

        <Resultado
          ano={2021}
          data="28/01/21"
          matricula={['29/01/2021', '01/02/2021']}
          chamada={2}
          esgotado={true}
        />

        <Resultado
          ano={2021}
          data="15/12/20"
          matricula={['26/01/2021', '27/01/2021']}
          chamada={1}
          esgotado={true}
        />

        <h3>
          Listagem geral dos classificados após recursos:{' '}
          <a href="/vestibulinho/CEMEP_2021_geral.pdf">clique aqui</a>
        </h3>

        <h2 className={styles.keep}>Critérios para 1ª chamada</h2>
        <ul>
          <li>
            40% (quarenta por cento) das vagas são destinadas aos candidatos
            oriundos da rede pública residentes em Paulínia
          </li>
          <li>
            10% (dez por cento) das vagas são destinadas aos candidatos oriundos
            da rede pública residentes de outros municípios
          </li>
          <li>
            40% (quarenta por cento) das vagas são destinadas aos candidatos
            oriundos da rede privada residentes em Paulínia
          </li>
          <li>
            10% (dez por cento) das vagas são destinadas aos candidatos oriundos
            da rede privada residentes de outros municípios
          </li>
        </ul>

        <h2 className={styles.keep}>Critérios a partir da 2ª chamada</h2>
        <p>
          A partir da 2ª chamada as convocações obedecerão a CLASSIFICAÇÃO GERAL
          independente dos candidatos serem provenientes de escolas públicas ou
          privadas, residentes ou não em Paulínia.{' '}
        </p>

        <h2>Próximas chamadas dos classificados</h2>
        <p>Datas e horários previstos:</p>
        <ul>
          <li>
            <b>Segunda chamada:</b> 28 de janeiro de 2021, a partir das 14
            horas, se houver desistências
          </li>
          <li>
            <b>Terceira chamada:</b> 02 de fevereiro de 2021, a partir das 14
            horas, se houver desistências
          </li>
        </ul>
        <p>
          OBS: É de responsabilidade do candidato acompanhar a publicação dos
          resultados.
        </p>

        <h2>Informações sobre matrícula</h2>
        <p>
          <b>Horário:</b> das 8h às 12h e das 13h às 17h00
        </p>
        <h3>Documentos obrigatórios:</h3>
        <ul>
          <li>03 fotos 3x4 recentes</li>
          <li>Cópia e original da Certidão de Nascimento</li>
          <li>Cópia e original de Identidade (RG);</li>
          <li>Cópia e original do CPF;</li>
          <li>
            Cópia e original do Histórico Escolar do Ensino Fundamental ou
            Declaração de Conclusão do Fundamental
          </li>
          <li>
            Cópia e original do Comprovante de Residência atual (últimos 3
            meses): conta de luz, água, telefone ou cartão de crédito. Em caso
            de aluguel apresentar cópia autenticada do contrato de locação com
            comprovante do último pagamento
          </li>
          <p>
            OBS: O comprovante de residência deverá estar, obrigatoriamente, no
            nome do pai, mãe ou responsável legal.{' '}
          </p>
        </ul>
      </main>
    </>
  )
}

export default Vestibulinho
