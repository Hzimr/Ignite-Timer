import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/defaults'
import { GlobalStyle } from './styles/global'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { CyclesContextProvider } from './contexts/cyclesContext'

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <div>
          <CyclesContextProvider>
            <Router />
          </CyclesContextProvider>
        </div>
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  )
}
