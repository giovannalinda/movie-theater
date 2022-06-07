import { Sidebar } from 'components/Sidebar'
import { useUserName } from 'hooks/useUserName'

import * as S from './Header.styled'

export function Header() {
  const { userName, firstLetterName } = useUserName()

  return (
    <S.Container>
      <Sidebar />

      <S.userNameWrapper>
        <S.Content>
          <h2>{firstLetterName}</h2>
        </S.Content>
        <h3>{userName}</h3>
      </S.userNameWrapper>
    </S.Container>
  )
}
