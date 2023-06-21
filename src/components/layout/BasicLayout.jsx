/* eslint-disable no-undef */
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import NavBar from '../navbar/NavBar';
import Footer from '../footer';
import { Container } from '@mui/material';


const BasicLayout = ({ title, children, image }) => {

  return (
    <Box sx={{ width: '100%' }}>
      <CssBaseline />
      <div 
        style={{
          justifyContent: 'center', 
          backgroundImage: image,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          aspectRatio: '16 / 8',
          display: 'flex',
          alignItems: 'center',
          backgroundBlendMode: 'overlay',
          backgroundPosition: 'center center',
          fontSize: '4vw',
        }}
      />
      <NavBar
        openDrawer={false}
        title={title}
        handleToogleDrawer={()=>{}}
        sx={{mb: 8}}
      />
      <Box>
        <Container>
          {children}
        </Container>
      </Box>
      <Footer/>
    </Box>
  );
};

BasicLayout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  image: PropTypes.string,
};

BasicLayout.defaultProps = {
  title: "",
  image: `url(${process.env.PUBLIC_URL}/Assents/Pedida2.jpeg)`
};

export default BasicLayout;
