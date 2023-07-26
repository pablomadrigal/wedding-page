import { Gallery, Item } from 'react-photoswipe-gallery'
import { useState, useEffect } from 'react'
import { ImageList, ImageListItem, styled } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

import PropTypes from 'prop-types'
import 'photoswipe/dist/photoswipe.css'

const loadImage = (setWidth, setHeight, imageUrl) => {
  const img = new Image()
  img.src = imageUrl

  img.onload = () => {
    setWidth(img.naturalWidth)
    setHeight(img.naturalHeight)
  }
  img.onerror = (err) => {
    console.log('img error')
    console.error(err)
  }
}

const srcset = (image, size, rows = 1, cols = 1) => {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  }
}

const StyledImageListItem = styled(ImageListItem)({
  overflow: 'hidden',
  '.fotoInterna': {
    opacity: 0.7,
    transition: '1s ease',
  },
  '&:hover .fotoInterna': {
    opacity: 1,
    transform: 'scale(1.3, 1.3)',
    transition: '1s ease',
    zIndex: 2,
    cursor: 'pointer',
  },
})

const ImageItem = ({ image, size, cellphone }) => {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    loadImage(setWidth, setHeight, image.img)
  }, [])

  const smallItemStyles = {
    cursor: 'pointer',
    width: '100%',
    objectPosition: 'center',
    objectFit: 'none',
  }

  return (
    <Item
      original={image.img}
      thumbnail={image.imgMin}
      width={width}
      height={height}
      alt={image.title}
      key={image.img}
      cropped={true}
    >
      {({ ref, open }) => (
        <StyledImageListItem
          cols={cellphone && image.colsCel ? image.colsCel : image.cols || 1}
          rows={cellphone && image.rowsCel ? image.rowsCel : image.rows || 1}
        >
          <img
            style={smallItemStyles}
            {...srcset(
              image.imgMin,
              size,
              cellphone && image.rowsCel ? image.rowsCel : image.rows || 1,
              cellphone && image.colsCel ? image.colsCel : image.cols || 1
            )}
            className="fotoInterna"
            ref={ref}
            onClick={open}
          />
        </StyledImageListItem>
      )}
    </Item>
  )
}

ImageItem.propTypes = {
  image: PropTypes.object.isRequired,
  cellphone: PropTypes.bool,
  size: PropTypes.number,
}

ImageItem.defaultProps = {
  cellphone: false,
  size: 121,
}

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
            <ImageItem
              key={image.img}
              image={image}
              cellphone={cellphone}
              size={cellphone ? 100 : 100}
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
