/* eslint-disable no-undef */
import PropTypes from 'prop-types';

import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { drawerWidth } from '../../constants/componentSizesConstants';
import NavBar from '../navbar/NavBar';
import useAuth from '../../hooks/useAuth';
import { AuthStates } from '../../constants/authConstants';
import Footer from '../footer';
import { Container } from '@mui/material';

const Main = styled('main', {
  shouldForwardProp: (prop) => prop !== 'open' && prop !== 'login',
})(({ theme, open, login }) => ({
  flexGrow: 1,
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(login && {
    marginLeft: `-${drawerWidth}px`,
  }),
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

const BasicLayout = ({ title, children, image }) => {
  const [login, setLogin] = useState(false);
  const { authStatus } = useAuth({ forceAuth: false });

  useEffect(() => {
    setLogin(authStatus === AuthStates.LOGGED_IN);
  }, [authStatus]);

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
      <Main login={login} open={false}>
        <Container>
          {children}
        </Container>
      </Main>
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
