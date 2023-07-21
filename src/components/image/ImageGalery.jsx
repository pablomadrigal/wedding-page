import PropTypes from 'prop-types';

import { useState } from 'react';
import { Dialog, DialogTitle, ImageList, ImageListItem, styled } from '@mui/material';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const StyledImageListItem = styled(ImageListItem)({
	overflow: 'hidden',
    '.fotoInterna': {
        opacity:0.7,
        transition: '1s ease',
    },
    '&:hover .fotoInterna': {
        opacity:1,
        transform: 'scale(1.3, 1.3)',
        transition: '1s ease',
        zIndex: 2,
        cursor: 'pointer'
    },
});

const ImageGalery = ({imageList}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [open, setOpen] = useState(false)

    const handleSelectImage = (index) => {
        setActiveIndex(index)
        setOpen(true)
    }

  return (
    <>
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
    </>
  );
}

ImageGalery.propTypes = {
    imageList: PropTypes.array.isRequired,
  };
  
  ImageGalery.defaultProps = {
  };

  export default ImageGalery;