import { HeaderContainer } from './stylesHeader'

import logoIgnite from '../../assets/logo-ignite.svg'
import menuHistory from '../../assets/menuHistory.png'
import menuTime from '../../assets/menuTime.png'

export function Header() {
  return (
    <HeaderContainer>
      <img
        src={logoIgnite}
        alt="Dois triângulos da cor verde com uma inclinação de 45º graus "
      />
      <nav>
        <a href="">
          <img src={menuTime} alt="" />
        </a>
        <a href="">
          <img src={menuHistory} alt="" />
        </a>
      </nav>
    </HeaderContainer>
  )
}
