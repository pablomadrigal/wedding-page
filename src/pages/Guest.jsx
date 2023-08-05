import { useParams } from 'react-router-dom'
import BasicLayout from '../components/layout/BasicLayout'
import Portada from '../assents/portadas/Invitados-min.png'
import { useState, useEffect } from 'react'
import { guestInformation, scheduleInformation } from '../data/GuestPage'
import {
  Alert,
  Button,
  Grid,
  IconButton,
  Snackbar,
  TextField,
  Typography,
} from '@mui/material'
import background from '../assents/backgrounds/background.png'
import FlowerDivider from '../components/image/FlowerDivider'
import { Search } from '@mui/icons-material'
import ScheduleItem from '../components/schedule/ScheduleItem'
import GuestCard from '../components/cards/GuestCard'
import RegistryCard from '../components/cards/RegistryCard'
import BibleVerse from '../components/hero/BibleVerse'
import { ReactComponent as MenIcon } from '../assents/icons/MenIcon.svg'
import { ReactComponent as WomenIcon } from '../assents/icons/WomenIcon.svg'

const Guest = () => {
  let { userId } = useParams()
  const [guestInfo, setGuestInfo] = useState(null)
  const [manualUserId, setManualUserId] = useState(undefined)
  const [error, setError] = useState(null)

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

  const onClickWeddingPlanner = () => {
    window.open(
      `https://api.whatsapp.com/send?phone=528135774070&text=*${
        guestInfo.name
      }*${
        guestInfo.name && '%0A'
      }Confirmo%20mi%20asistencia%20a%20la%20Boda%20de%20Paloma%20y%20Pablo%20%E2%9C%A8`,
      '_blank'
    )
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

      <BibleVerse />

      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ mb: 10 }}
      >
        <Grid item xs={12} sm={6} md={4} lg={6}>
          <GuestCard>
            {guestInfo ? (
              <>
                <Typography align="justify">
                  Con alegría te queremos invitar a nuestra boda que se
                  celebrará el día{' '}
                  <span style={{ fontWeight: 'bold' }}>
                    viernes 20 de octubre del 2023
                  </span>
                </Typography>
                <br />
                <Typography align="center">{guestInfo.message}</Typography>
                <br />
                <Typography align="center" sx={{ fontWeight: 'bold' }}>
                  Es por esto que hemos reservado para vos{' '}
                  {guestInfo.numberGuests} lugar
                  {guestInfo.numberGuests > 1 ? 'es' : ''}
                  <br />
                  (Los lugares no son transferibles)
                </Typography>
                <br />
                <Typography>
                  Te pedimos que por favor confirmes tu asistencia con nuestra
                  Wedding Planner{' '}
                  <Button
                    onClick={onClickWeddingPlanner}
                    variant="contained"
                    sx={{
                      backgroundImage: `url(${background})`,
                      backgroundSize: 'cover',
                      color: 'black',
                    }}
                  >
                    haciendo click aqui
                  </Button>
                </Typography>
              </>
            ) : (
              <>
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
          </GuestCard>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}></Grid>
        {guestInfo && (
          <Grid item container xs={12} sm={6} md={4} lg={6} spacing={5}>
            {scheduleInformation.map((schedule) => (
              <ScheduleItem key={schedule.id} {...schedule} />
            ))}
          </Grid>
        )}
        <Grid item xs={12} sm={12} md={12} lg={12} sx={{ mt: 10 }}>
          <FlowerDivider onlyMobile />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={6}>
          <ScheduleItem
            icon={<MenIcon />}
            icon2={<WomenIcon />}
            title="Codigo de Vestimenta"
            description="Formal"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}></Grid>
        <Grid item xs={12} sm={6} md={4} lg={6} sx={{ mt: 10 }}>
          <RegistryCard />
        </Grid>
      </Grid>
    </BasicLayout>
  )
}

Guest.propTypes = {}

Guest.defaultProps = {}

export default Guest
