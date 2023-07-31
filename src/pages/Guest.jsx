import { useParams } from 'react-router-dom'
import BasicLayout from '../components/layout/BasicLayout'
import Portada from '../images/portadas/Invitados-min.png'
import { useState, useEffect } from 'react'
import { bankAccounts, guestInformation } from '../data/GuestPage'
import { Box, Typography } from '@mui/material'

const Guest = () => {
  let { userId } = useParams()
  const [guestInfo, setGuestInfo] = useState(null)

  useEffect(() => {
    setGuestInfo(
      userId ? guestInformation.find((guest) => guest.id === userId) : null
    )
  }, [userId])

  useEffect(() => {})

  return (
    <BasicLayout title="Guest" image={Portada}>
      {guestInfo ? (
        <Typography>Guest: {guestInfo.name}</Typography>
      ) : (
        <Typography>No Guest</Typography>
      )}
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
