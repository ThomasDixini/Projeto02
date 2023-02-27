import { ThemeProvider } from 'styled-components'
import { Button } from './components/Button/Button'
import { GlobalStyle } from './global'
import { DefaultThemes } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={DefaultThemes}>
      <GlobalStyle />
    </ThemeProvider>
  )
}
