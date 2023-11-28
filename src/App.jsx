import { ThemeProvider } from 'styled-components'

import GlobalStyles from './presentation/styles/global'
import theme from './presentation/styles/theme'
import { MainPage } from './presentation/pages/MainPage'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MainPage />
    </ThemeProvider>
  )
}

export default App
