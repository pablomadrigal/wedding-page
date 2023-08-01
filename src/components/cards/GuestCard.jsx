import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import { useMediaQuery, useTheme } from '@mui/material'
import background from '../../assents/backgrounds/background.png'
import FlowerDivider from '../image/FlowerDivider'

const GuestCard = ({ children }) => {
  const theme = useTheme()
  const cellphone = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <>
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
          {children}
        </Box>
      </Box>
      <FlowerDivider position={'up'} />
    </>
  )
}

GuestCard.propTypes = {
  children: PropTypes.node.isRequired,
}

GuestCard.defaultProps = {}

export default GuestCard
