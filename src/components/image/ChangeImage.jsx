import PropTypes from 'prop-types';
import { useState } from 'react';

function ChangeImage({ imgURL1, imgURL2, altText, ...props }) {
  const [hover, setHover] = useState(false)
  return (
    <img src={hover ? imgURL2 : imgURL1} alt={altText} onMouseOver={()=>setHover(true)} onMouseOut={()=>setHover(false)} {...props}/>
  );
}

ChangeImage.propTypes = {
  imgURL1: PropTypes.string.isRequired,
  imgURL2: PropTypes.string.isRequired,
  altText: PropTypes.string,
};

ChangeImage.defaultProps = {
  altText: '',
};

export default ChangeImage;
