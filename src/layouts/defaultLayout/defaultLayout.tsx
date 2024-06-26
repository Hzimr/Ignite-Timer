import { Outlet } from 'react-router-dom'
import { Header } from '../../components/header/header'
import { LayoutContainer } from './defaultLayoutStyles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  )
}
