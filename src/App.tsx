import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './global'
import { DefaultThemes } from './styles/themes/default'
import { Router } from './Router'

export function App() {
  return (
    <ThemeProvider theme={DefaultThemes}>

      <BrowserRouter>
        <Router />
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}
