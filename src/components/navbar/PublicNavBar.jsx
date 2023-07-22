import PropTypes from 'prop-types'

import { Toolbar } from '@mui/material'
import { Link } from 'react-router-dom'

import Logo from '../../images/LogoBoda-Blanco.png'

const firstLinks = [
  { id: 'couple', label: 'Inicio', url: '/' },
  { id: 'proposal', label: 'La propuesta', url: '/proposal' },
]

const secondLinks = [
  { id: 'timeline', label: 'Nuestra historia', url: '/timeline' },
]

const linkStyles = {
  marginLeft: '20px',
  marginRight: '20px',
  fontFamily: 'Cardo',
  color: 'white',
  fontSize: '1.5rem',
  textDecoration: 'none',
}

const PublicNavBar = () => {
  return (
    <Toolbar disableGutters sx={{ justifyContent: 'center' }}>
      {firstLinks.map((item) => (
        <Link key={item.id} to={item.url} style={linkStyles}>
          {item.label}
        </Link>
      ))}
      <img src={Logo} alt="Logo" width="100" height="100"></img>
      {secondLinks.map((item) => (
        <Link key={item.id} to={item.url} style={linkStyles}>
          {item.label}
        </Link>
      ))}
    </Toolbar>
  )
}

PublicNavBar.propTypes = {
  title: PropTypes.string.isRequired,
}

PublicNavBar.defaultProps = {
  title: '',
}

export default PublicNavBar
