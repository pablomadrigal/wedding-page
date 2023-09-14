import Box from '@mui/material/Box'
import { Grid, Typography } from '@mui/material'
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
      <Grid container sx={{ textAlign: 'center' }}>
        {registryList.map((registry) => (
          <Grid item xs={12} sm={6} md={6} lg={6} key={registry.name}>
            <Typography variant="h5">{registry.name}</Typography>
            <Typography>(Haz click en el logo)</Typography>
            {registry.logo}
          </Grid>
        ))}
      </Grid>
    </>
  )
}

RegistryCard.propTypes = {}

RegistryCard.defaultProps = {}

export default RegistryCard
