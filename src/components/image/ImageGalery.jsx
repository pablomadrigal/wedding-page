import PropTypes from 'prop-types';
import 'photoswipe/dist/photoswipe.css'
import './ImageGalery.css'

import { Gallery, Item } from 'react-photoswipe-gallery'
import { useState, useEffect } from 'react';

const loadImage = (setWidth, setHeight, imageUrl) => {
  const img = new Image();
  img.src = imageUrl;

  img.onload = () => {
    setWidth(img.naturalWidth);
    setHeight(img.naturalHeight);
  };
  img.onerror = (err) => {
    console.log("img error");
    console.error(err);
  };
};

const ImageItem = ({image}) => {

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    loadImage(setWidth, setHeight, image.img);
  }, []);

  useEffect(() => {
    console.log(`id: ${image.img} - width: ${width} - height: ${height}`)
  }, [width, height])
  

  const smallItemStyles = {
    cursor: 'pointer',
    width: '100%',
    height: '240px',
    objectPosition: 'center',
    objectFit: 'none',
  }
  
  return (<Item
    original={image.img}
    thumbnail={image.imgMin}
    width={width}
    height={height}
    alt={image.title}
    key={image.img}
    cropped={true}
  >
    {({ ref, open }) => (
      <img
        style={smallItemStyles}
        src={image.imgMin}
        ref={ref }
        onClick={open}
      />
    )}
  </Item>)
}

ImageItem.propTypes = {
  image: PropTypes.object.isRequired,
};


const ImageGalery = ({imageList}) => {

  return (
    <Gallery>
      <div className='gallery' >
        {imageList.map((image) => {
        return <ImageItem key={image.img} image={image} />

        })}
      </div>
    </Gallery>
  );
}

ImageGalery.propTypes = {
  imageList: PropTypes.array.isRequired,
};

ImageGalery.defaultProps = {
};

export default ImageGalery;

  /*
 <ImageList
        sx={{ width: '100%', backgroundColor: '#FFF3F3' }}
        variant="quilted"
        cols={4}
        rowHeight={121}
        >
        {imageList.map((item, idx) => (
            <StyledImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                <img
                    {...srcset(item.imgMin, 121, item.rows, item.cols)}
                    className='fotoInterna'
                    alt={item.title}
                    loading="lazy"
                    onClick={()=>handleSelectImage(idx)}
                    
                />
            </StyledImageListItem>
        ))}
        </ImageList>
        <Dialog onClose={()=>setOpen(false)} open={open}>
            <DialogTitle>Foto</DialogTitle>
            <img 
                src={imageList[activeIndex].img}
                alt={imageList[activeIndex].title}
            />
        </Dialog>
  */