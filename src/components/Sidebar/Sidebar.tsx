import { useState } from 'react'

import { Menu } from 'components/Menu'

import * as S from './Sidebar.styled'
import { menu } from 'assets'

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Navbar>
      <S.ShowSidebar>
        <button onClick={() => setIsOpen(true)}>
          <img src={menu} alt='menu' />
        </button>
        {isOpen ? <Menu onClose={() => setIsOpen(false)} /> : null}
      </S.ShowSidebar>
    </S.Navbar>
  )
}
