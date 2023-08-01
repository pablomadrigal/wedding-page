import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import { bankAccounts } from '../../data/GuestPage'

const RegistryCard = () => {
  return (
    <>
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
    </>
  )
}

RegistryCard.propTypes = {
  children: PropTypes.node.isRequired,
}

RegistryCard.defaultProps = {}

export default RegistryCard
