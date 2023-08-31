import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import { bankAccounts, registryList } from '../../data/GuestPage'

const RegistryCard = () => {
  return (
    <>
      <Typography variant="h4" textAlign="center">
        Obsequio
      </Typography>
      <Typography textAlign="justify">
        Su presencia es lo mas importante para nosotros, pero si desean
        obsequiarnos algo, aquí les dejamos las mejores opciones para nosotros:
      </Typography>
      <br />
      {bankAccounts.map((account) => (
        <Box key={account.id}>
          <Typography variant="h5">{account.moneda}</Typography>
          {account.cuentas.map((cuenta) => (
            <Typography key={cuenta.id}>{`${cuenta.nombre} ${
              cuenta.tipo ? `- ${cuenta.tipo}:` : ''
            } ${cuenta.numero} (${cuenta.nombrePersona})`}</Typography>
          ))}
          <br />
        </Box>
      ))}
      <Typography variant="h4" textAlign="center">
        Mesa de regalos
      </Typography>
      <br />
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h5">{registryList.name}</Typography>
        <Typography>(Haz click en el logo)</Typography>
        {registryList.logo}
      </Box>
    </>
  )
}

RegistryCard.propTypes = {}

RegistryCard.defaultProps = {}

export default RegistryCard
