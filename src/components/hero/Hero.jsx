import PropTypes from 'prop-types';

import {
  Box,
} from '@mui/material';


const Hero = ({
  imageUrlBig,
  imageUrlSmall,
  children
}) => {
  return (
    <Box sx={{
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      width: '100%',
      height: 'auto',
    }}>
      <Box sx={{
        position: 'absolute', 
        height: '100%', 
        width:'100%', 
        zIndex: -1, 
        backgroundPosition: 'center', 
        backgroundSize: 'cover', 
        backgroundImage: {sm: `url(${imageUrlSmall ?? imageUrlBig})`, md: `url(${imageUrlBig ?? imageUrlSmall})`}
      }}/>
      {children}
    </Box>
  );
};

Hero.propTypes = {
  imageUrlBig: PropTypes.string,
  imageUrlSmall: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Hero.defaultProps = {
  imageUrlBig: '/Assents/Pedida/home1.png',
  imageUrlSmall: '/Assents/Pedida/home1.png'
};

export default Hero;
