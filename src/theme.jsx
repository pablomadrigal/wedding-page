import { red } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'

// A custom theme for this app
const theme = createTheme({
  typography: {
    allVariants: {
      color: '#52799c',
    },
  },
  palette: {
    primary: {
      main: '#0011a8',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
})

export default theme
