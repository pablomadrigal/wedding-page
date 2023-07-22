import * as ReactDOM from 'react-dom/client'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import App from './App'
import theme from './theme'
import { HashRouter } from 'react-router-dom'

const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement)

root.render(
  <ThemeProvider theme={theme}>
    <HashRouter>
      <CssBaseline />
      <App />
    </HashRouter>
  </ThemeProvider>
)
