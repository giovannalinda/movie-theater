import { Link } from 'react-router-dom'
import { capahome, caretright, logohome } from 'assets'

import * as S from './Recommendation.styled'

export function Recommendation() {
  return (
    <S.Container>
      <img
        src={capahome}
        alt='Capa do filme Animais Fantasticos: Os segredos de Dumbledore contendo
        dez bruxos segurando suas várinhas'
      />

      <S.LogoMovie>
        <img
          src={logohome}
          alt='Logo da cor branca do filme Animais Fantasticos: Os segredos de Dumbledore'
        />
      </S.LogoMovie>

      <S.InfoMovie>
        <strong>ESTREIA</strong>
        <p>Agora, todo o mundo mágico se uniu contra Grindelwald.</p>
        <Link to='/home'>
          <img src={caretright} alt='icone de play' />
        </Link>
        <button>SAIBA MAIS</button>
      </S.InfoMovie>
    </S.Container>
  )
}
