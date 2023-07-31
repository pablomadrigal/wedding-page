import PropTypes from 'prop-types'
import { Box, Typography } from '@mui/material'
import ChangeImage from '../image/ChangeImage'

const GeneralCard = ({
  imgURL1,
  imgURL2,
  gifURL,
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
        opacity: 0.75,
      }}
    >
      {imgURL1 && imgURL2 && (
        <ChangeImage
          imgURL1={imgURL1}
          imgURL2={imgURL2}
          gifURL={gifURL}
          altText={title}
        />
      )}
      <Typography
        variant="h3"
        sx={{ mt: 5, fontFamily: 'Alex Brush', textAlign: 'center' }}
      >
        {title}
      </Typography>
      <p style={{ textAlign: 'justify', whiteSpace: 'pre-line' }}>
        {description}
      </p>
    </Box>
  )
}

GeneralCard.propTypes = {
  imgURL1: PropTypes.string,
  imgURL2: PropTypes.string,
  gifURL: PropTypes.string,
  backgroundImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

GeneralCard.defaultProps = {
  imgURL1: null,
  imgURL2: null,
}

export default GeneralCard
