import { Grid, styled } from '@mui/material'
import useCountdown from '../../hooks/useCountdown'

const StyledParagraph = styled('p')({
  fontFamily: 'Alex Brush',
  margin: 0,
  fontSize: '4rem',
  fontWeight: 'bold',
})

const CountDown = () => {
  const { days, hours, minutes, seconds } = useCountdown(
    '2023-10-20 15:00:00.000000'
  )

  return (
    <Grid container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'stretch',
        textAlign: 'center',
        backgroundColor: '#D0E2F1',
        width: '100vw',
        left: 0,
        color: 'white',
        marginLeft: '-24px',
        my: 5
      }}
    >
      <Grid item 
        xs={12}
        sm={12}
        md={12}
        lg={6}
        xl={6}
        sx={{
          minHeight: '50px',
          mb: 2,
          fontFamily: 'Alex Brush',
          fontSize: '3rem',
        }}
      >
        La ceremonia empieza en:
      </Grid>
      <Grid item
        xs={12}
        sm={12}
        md={12}
        lg={6}
        xl={6}
        sx={{
          backgroundImage: 'public/Assents/backgrounds/FondoAzulCentral.png',
          height: '100px',
          mb: 2,
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          fontSize: '1.8rem',
          color: 'white'
        }}
      >
        <div style={{ fontSize: '1rem', marginRight: '20px' }}>
          <StyledParagraph>{days}</StyledParagraph> Dias
        </div>
        <div style={{ fontSize: '1rem', marginRight: '20px' }}>
          <StyledParagraph>{hours}</StyledParagraph> Horas
        </div>
        <div style={{ fontSize: '1rem', marginRight: '20px' }}>
          <StyledParagraph>{minutes}</StyledParagraph> Minutos
        </div>
        <div style={{ fontSize: '1rem' }}>
          <StyledParagraph>{seconds}</StyledParagraph> Segundos
        </div>
      </Grid>
    </Grid>
  )
}

CountDown.propTypes = {}

CountDown.defaultProps = {}

export default CountDown
