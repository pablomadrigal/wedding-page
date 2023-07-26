import PropTypes from 'prop-types'
import 'photoswipe/dist/photoswipe.css'
import './ImageGalery.css'

import { Gallery, Item } from 'react-photoswipe-gallery'
import { useState, useEffect } from 'react'
import { styled } from '@mui/material'

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

const StyledImage = styled('div')({
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

const ImageItem = ({ image }) => {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    loadImage(setWidth, setHeight, image.img)
  }, [])

  const smallItemStyles = {
    cursor: 'pointer',
    width: '100%',
    height: '240px',
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
        <StyledImage>
          <img
            style={smallItemStyles}
            className="fotoInterna"
            src={image.imgMin}
            ref={ref}
            onClick={open}
          />
        </StyledImage>
      )}
    </Item>
  )
}

ImageItem.propTypes = {
  image: PropTypes.object.isRequired,
}

const ImageGalery = ({ imageList }) => {
  return (
    <Gallery>
      <div className="gallery">
        {imageList.map((image) => {
          return <ImageItem key={image.img} image={image} />
        })}
      </div>
    </Gallery>
  )
}

ImageGalery.propTypes = {
  imageList: PropTypes.array.isRequired,
}

ImageGalery.defaultProps = {}

export default ImageGalery
