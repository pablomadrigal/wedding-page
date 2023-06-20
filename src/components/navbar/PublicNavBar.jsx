import PropTypes from 'prop-types';

import { Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';

import {ReactComponent as ReactLogo} from '../../images/logoBoda.svg';

const publicNavLinks = [
  {id: 'couple', label: 'Inicio', url: '/'},
  {id: 'proposal', label: 'La propuesta', url: 'proposal'}
]

const PublicNavBar = () => {
  return (
    <Toolbar disableGutters sx={{ justifyContent: 'center' }}>
      {publicNavLinks.map( (item) => <Link key={item.id} to={item.url} style={{marginLeft: '20px', marginRight: '20px'}}>{item.label}</Link>)}
      <ReactLogo />
      {publicNavLinks.map( (item) => <Link key={item.id} to={item.url} style={{marginLeft: '20px', marginRight: '20px'}}>{item.label}</Link>)}
    </Toolbar>
  );
};

PublicNavBar.propTypes = {
  title: PropTypes.string.isRequired
};

PublicNavBar.defaultProps = {
  title: ""
};

export default PublicNavBar;
