import useDetectMobile from '../../hooks/useDetectMobile'

import { Typography } from '@mui/material'

function BibleVerse() {
  const { isMobile } = useDetectMobile()

  return (
    <>
      <Typography
        sx={{
          fontSize: isMobile ? '1.5rem' : '2.8rem',
          mb: 2,
          fontFamily: 'Alex Brush',
        }}
        align="center"
      >
        &ldquo;Ningún ojo ha visto, ningún oído ha escuchado, ninguna mente
        humana ha concebido las maravillas que Dios ha preparado para quienes lo
        aman.&quot;
      </Typography>
      <Typography
        sx={{
          fontSize: isMobile ? '1rem' : '2rem',
          mb: 2,
          fontFamily: 'Alex Brush',
        }}
        align="center"
      >
        1 Corintios 2,9
      </Typography>
    </>
  )
}

BibleVerse.propTypes = {}

BibleVerse.defaultProps = {}

export default BibleVerse
