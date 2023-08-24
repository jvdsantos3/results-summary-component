import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { ResultsSummary } from './components/ResultsSummary'
import { AppContainer } from './styles'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <AppContainer>
        <ResultsSummary />
      </AppContainer>
    </ThemeProvider>
  )
}
