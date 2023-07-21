import PropTypes from 'prop-types';

import { Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';

import {ReactComponent as ReactLogo} from '../../images/LogoBoda.svg';

const firstLinks = [
  {id: 'couple', label: 'Inicio', url: '/'},
  {id: 'proposal', label: 'La propuesta', url: '/proposal'}
]


const secondLinks = [
  {id: 'timeline', label: 'Nuestra historia', url: '/timeline'}
]

const linkStyles = {marginLeft: '20px', marginRight: '20px', fontFamily: 'Cardo', color: 'white', fontSize: '1.5rem', textDecoration: 'none'}

const PublicNavBar = () => {
  return (
    <Toolbar disableGutters sx={{ justifyContent: 'center' }}>
      {firstLinks.map( (item) => <Link key={item.id} to={item.url} style={linkStyles}>{item.label}</Link>)}
      <ReactLogo />
      {secondLinks.map( (item) => <Link key={item.id} to={item.url} style={linkStyles}>{item.label}</Link>)}
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
