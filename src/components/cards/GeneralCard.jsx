import PropTypes from 'prop-types'
import { Box, Typography } from '@mui/material'
import ChangeImage from '../image/ChangeImage'

const GeneralCard = ({
  imgURL1,
  imgURL2,
  backgroundImg,
  title,
  description,
}) => {
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
        backgroundImage: `url(${backgroundImg})`,
      }}
    >
      {imgURL1 && imgURL2 && (
        <ChangeImage
          imgURL1={imgURL1}
          imgURL2={imgURL2}
          altText={title}
          style={{ maxWidth: '500px' }}
        />
      )}
      <Typography
        variant="h3"
        sx={{ mt: 5, fontFamily: 'Alex Brush', textAlign: 'center' }}
      >
        {title}
      </Typography>
      <p style={{ textAlign: 'center' }}>{description}</p>
    </Box>
  )
}

GeneralCard.propTypes = {
  imgURL1: PropTypes.string,
  imgURL2: PropTypes.string,
  backgroundImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

GeneralCard.defaultProps = {
  imgURL1: null,
  imgURL2: null,
}

export default GeneralCard