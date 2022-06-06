import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { FiX, FiLogOut } from 'react-icons/fi'

import * as S from './Menu.styled'

type Props = {
  children?: ReactNode
  onClose: () => void
}
export function Menu({ children, onClose }: Props) {
  return (
    <S.Aside>
      <button onClick={onClose}>
        <FiX size={30} />
      </button>

      <p>Menu</p>
      <S.List>
        <li>Comédia</li>
        <li>Romance</li>
        <li>Ação</li>
        <li>Terror</li>
        <li>Fantasia</li>
        <li>Animação</li>
      </S.List>

      <Link to='/'>
        <FiLogOut />
        Sair
      </Link>
      {children}
    </S.Aside>
  )
}
