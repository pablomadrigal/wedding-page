import { useParams } from 'react-router-dom'
import BasicLayout from '../components/layout/BasicLayout'
import Portada from '../images/portadas/Invitados-min.png'
import { useState, useEffect } from 'react'
import { bankAccounts, guestInformation } from '../data/GuestPage'
import {
  Alert,
  Box,
  Grid,
  IconButton,
  Snackbar,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import background from '../images/backgrounds/background.png'
import FlowerDivider from '../components/image/FlowerDivider'
import { Search } from '@mui/icons-material'

const Guest = () => {
  let { userId } = useParams()
  const [guestInfo, setGuestInfo] = useState(null)
  const [manualUserId, setManualUserId] = useState(null)
  const [error, setError] = useState(null)
  const theme = useTheme()
  const cellphone = useMediaQuery(theme.breakpoints.down('sm'))

  useEffect(() => {
    if (userId) searchGuestData(userId)
  }, [userId])

  const searchGuestData = (id) => {
    const data = guestInformation.find((guest) => guest.id === id)
    if (data) {
      setGuestInfo(data)
    } else {
      setGuestInfo(null)
      setError('Codigo de invitado no encontrado')
    }
  }

  const handleSearchUserId = () => {
    if (manualUserId) {
      setManualUserId(undefined)
      searchGuestData(manualUserId)
    }
  }

  const handleManualUserId = (e) => {
    setManualUserId(e.target.value)
  }

  return (
    <BasicLayout title="Guest" image={Portada}>
      {error && (
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={!!error}
          autoHideDuration={6000}
          onClose={() => setError(null)}
        >
          <Alert severity="error">{error}</Alert>
        </Snackbar>
      )}

      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={6} md={4} lg={6}>
          <FlowerDivider position={'down'} />
          <Box
            sx={{
              width: '100%',
              height: cellphone ? '300px' : '500px',
              backgroundImage: `url(${background})`,
              backgroundSize: 'cover',
              backgroundAttachment: 'fixed',
              opacity: 0.5,
              padding: '50px',
            }}
          >
            <Box
              sx={{
                backgroundColor: '#fffbf0',
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'black',
                flexDirection: 'column',
                padding: '50px',
              }}
            >
              {guestInfo ? (
                <Typography>Guest: {guestInfo.name}</Typography>
              ) : (
                <>
                  {' '}
                  <Typography>Favor ingresar clave de invitado</Typography>
                  <TextField
                    sx={{ m: 2 }}
                    id="outlined-basic"
                    variant="outlined"
                    fullWidth
                    value={manualUserId}
                    onChange={handleManualUserId}
                    onKeyDown={(e) => e.key === 'Enter' && handleSearchUserId()}
                    error={!!error}
                    helperText={error}
                    InputProps={{
                      endAdornment: (
                        <IconButton
                          color="black"
                          onClick={handleSearchUserId}
                          disabled={!manualUserId}
                        >
                          <Search />
                        </IconButton>
                      ),
                    }}
                  />
                </>
              )}
            </Box>
          </Box>
          <FlowerDivider position={'up'} />
        </Grid>
      </Grid>
      <Box>
        <Typography variant="h4" textAlign="center">
          Obsequio
        </Typography>
        <Typography textAlign="justify">
          Si desan bendecirnos con un detalle para nosotros, agradecemos que sus
          muestras de cariño sea de forma monetaria a través de alguna de las
          siguientes formas:
        </Typography>
        {bankAccounts.map((account) => (
          <Box key={account.id}>
            <Typography variant="h5">{account.moneda}</Typography>
            {account.cuentas.map((cuenta) => (
              <Typography key={cuenta.id}>{`${cuenta.nombre} ${
                cuenta.tipo ? `- ${cuenta.tipo}:` : ''
              } ${cuenta.numero} (${cuenta.nombrePersona})`}</Typography>
            ))}
          </Box>
        ))}
      </Box>
    </BasicLayout>
  )
}

Guest.propTypes = {}

Guest.defaultProps = {}

export default Guest
