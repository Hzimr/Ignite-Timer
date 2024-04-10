import { Button } from "./components/button/button"
import { Header } from "./components/header/header"

export function App() {
  return (
      <div>
        <Header />
        <Button variant='danger' />
        <Button variant="secondary"/>
        <Button variant="success"/>
        <Button variant="danger"/>
        <h1>Bom dia</h1>
      </div>
  )
}


