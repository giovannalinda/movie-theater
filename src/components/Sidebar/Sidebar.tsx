import { useState } from 'react'
import ReactDOM from 'react-dom'

import { Menu } from 'components/Menu'
import { menu } from 'assets'

import * as S from './Sidebar.styled'

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  if (isOpen) {
    return ReactDOM.createPortal(
      <S.Navbar>
        <Menu onClose={() => setIsOpen(false)} />
      </S.Navbar>,
      document.getElementById('root')!,
    )
  }

  return (
    <S.CollpaseButton onClick={() => setIsOpen(true)}>
      <img src={menu} alt='menu' />
    </S.CollpaseButton>
  )
}
