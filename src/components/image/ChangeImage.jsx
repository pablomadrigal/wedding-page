import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import PropTypes from 'prop-types'
import { useState } from 'react'

function ChangeImage({ imgURL1, imgURL2, gifURL, altText, ...props }) {
  const [hover, setHover] = useState(false)

  const theme = useTheme()
  const cellphone = useMediaQuery(theme.breakpoints.down('sm'))

  if (cellphone && gifURL) {
    return (
      <img
        src={gifURL}
        alt={altText}
        style={{ maxWidth: '250px' }}
        {...props}
      />
    )
  }

  return (
    <img
      src={hover ? imgURL2 : imgURL1}
      alt={altText}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      style={{ maxWidth: cellphone ? '250px' : '500px' }}
      {...props}
    />
  )
}

ChangeImage.propTypes = {
  imgURL1: PropTypes.string.isRequired,
  imgURL2: PropTypes.string.isRequired,
  gifURL: PropTypes.string,
  altText: PropTypes.string,
}

ChangeImage.defaultProps = {
  gifURL: null,
  altText: '',
}

export default ChangeImage
