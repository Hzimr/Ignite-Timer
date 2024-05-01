import { HeaderContainer } from './stylesHeader'
import logoIgnite from '../../assets/logo-ignite.svg'
import { NavLink } from 'react-router-dom'
import { Scroll, Timer } from '@phosphor-icons/react'

export function Header() {
  return (
    <HeaderContainer>
      <img
        src={logoIgnite}
        alt="Dois triângulos da cor verde com uma inclinação de 45º graus "
      />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
