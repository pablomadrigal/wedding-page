import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material'
import ChangeImage from '../image/ChangeImage'

const CoupleCard = ({imgURL1, imgURL2, backgroundImg, name, description}) => {

  return (
    
    <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      p: 8,
      backgroundColor: 'white',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundImage: `url(${backgroundImg})`

    }}
  >
    <ChangeImage imgURL1={imgURL1} imgURL2={imgURL2} altText={name} style={{ maxWidth: '500px' }} />
    <Typography variant="h3" sx={{ mt: 5, fontFamily: 'Alex Brush' }}>
      {name}
    </Typography>
    <p style={{ textAlign: 'center' }}>
      {description}
    </p>
  </Box>
  )
}

CoupleCard.propTypes = {
  imgURL1: PropTypes.string.isRequired,
  imgURL2: PropTypes.string.isRequired,
  backgroundImg: PropTypes.string.isRequired,
  altText: PropTypes.string,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

CoupleCard.defaultProps = {}

export default CoupleCard
