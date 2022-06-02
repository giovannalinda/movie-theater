import { useState } from 'react'
import { FaBars } from 'react-icons/fa'

import { Menu } from 'components/Menu'

import * as S from './Sidebar.styled'

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Navbar>
      <S.ShowSidebar>
        <button onClick={() => setIsOpen(true)}>
          <FaBars size={20} />
        </button>
        {isOpen ? <Menu onClose={() => setIsOpen(false)} /> : null}
      </S.ShowSidebar>
    </S.Navbar>
  )
}
