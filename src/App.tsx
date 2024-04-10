import { Button } from "./components/button/button"
import { Header } from "./components/header/header"
import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/defaults"

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div>
        <Header />
        <Button variant='danger' />
        <Button variant="secondary"/>
        <Button variant="success"/>
        <Button variant="danger"/>
        <h1>Bom dia</h1>
      </div>
    </ThemeProvider>
  )
}


