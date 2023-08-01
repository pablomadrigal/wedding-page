import { Gallery } from 'react-photoswipe-gallery'
import { ImageList } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

import PropTypes from 'prop-types'
import 'photoswipe/dist/photoswipe.css'
import ImageGaleryItem from './ImageGaleryItem'

const ImageGalery = ({ imageList }) => {
  const theme = useTheme()
  const cellphone = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Gallery>
      <ImageList
        sx={{ width: '100%' }}
        variant="quilted"
        cols={cellphone ? 3 : 5}
        rowHeight={cellphone ? 100 : 200}
      >
        {imageList.map((image) => {
          return (
            <ImageGaleryItem
              key={image.img}
              image={image}
              cellphone={cellphone}
              sizeW={cellphone ? 100 : 275}
              sizeH={cellphone ? 100 : 200}
            />
          )
        })}
      </ImageList>
    </Gallery>
  )
}

ImageGalery.propTypes = {
  imageList: PropTypes.array.isRequired,
}

ImageGalery.defaultProps = {}

export default ImageGalery
