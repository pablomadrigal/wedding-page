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

const srcset = (image, sizeW, sizeH, rows = 1, cols = 1, cellphone = true) => {
  if (cellphone) {
    return {
      src: `${image}?w=${sizeW * cols}&h=${sizeH * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${sizeW * cols}&h=${
        sizeH * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    }
  } else {
    return {
      src: `${image}?w=${sizeW * cols}&h=${sizeH * rows}&fit=crop&auto=format`,
    }
  }
}

const StyledImageListItem = styled(ImageListItem)({
  overflow: 'hidden',
  textAlign: 'center',
  color: 'white',
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

const ImageItem = ({ image, sizeW, sizeH, cellphone, text }) => {
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
              sizeW,
              sizeH,
              cellphone && image.rowsCel ? image.rowsCel : image.rows || 1,
              cellphone && image.colsCel ? image.colsCel : image.cols || 1,
              cellphone
            )}
            className="fotoInterna"
            ref={ref}
            onClick={open}
          />
          {text && (
            <h3
              style={{
                color: 'black',
                position: 'absolute',
                bottom: '0',
                left: '0',
                zIndex: 1,
              }}
            >
              {' '}
              {text}{' '}
            </h3>
          )}
        </StyledImageListItem>
      )}
    </Item>
  )
}

ImageItem.propTypes = {
  image: PropTypes.object.isRequired,
  cellphone: PropTypes.bool,
  sizeW: PropTypes.number,
  sizeH: PropTypes.number,
  text: PropTypes.string,
}

ImageItem.defaultProps = {
  cellphone: false,
  sizeW: 275,
  sizeH: 200,
  text: undefined,
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
