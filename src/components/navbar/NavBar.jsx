import PropTypes from 'prop-types';

import { Container, styled } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import PublicNavBar from './PublicNavBar';
import PrivateNavBar from './PrivateNavBar';
import { drawerWidth } from '../../constants/componentSizesConstants';
import { AuthStates } from '../../constants/authConstants';
import useAuth from '../../hooks/useAuth';


const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  marginTop: '20px',
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: "#FFF3F3",
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const NavBar = ({
  title,
  openDrawer,
  handleToogleDrawer,
  ...props
}) => {
  const { authStatus } = useAuth({ forceAuth: false });

  return (
    <AppBar position="relative" open={openDrawer} elevation={0} {...props}>
      <Container maxWidth="xl">
        {authStatus === AuthStates.LOGGED_IN ? (
          <PrivateNavBar
            title={title}
            handleToogleDrawer={handleToogleDrawer}
            openDrawer={openDrawer}
          />
        ) : (
          <PublicNavBar title={title} />
        )}
      </Container>
    </AppBar>
  );
};

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  openDrawer: PropTypes.string.isRequired,
  handleToogleDrawer: PropTypes.string.isRequired
};

NavBar.defaultProps = {
  title: ""
};

export default NavBar;
