import PropTypes from 'prop-types'

import { IconButton, Menu, MenuItem, Toolbar, useTheme } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from 'react-router-dom'

import Logo from '../../images/LogoBoda-Blanco.png'
import { useState } from 'react'

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
  const [anchorEl, setAnchorEl] = useState(null)

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const theme = useTheme()
  const cellphone = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <Toolbar disableGutters sx={{ justifyContent: 'space-around' }}>
      {!cellphone &&
        firstLinks.map((item) => (
          <Link key={item.id} to={item.url} style={linkStyles}>
            {item.label}
          </Link>
        ))}
      <img src={Logo} alt="Logo" width="100" height="100"></img>
      {!cellphone &&
        secondLinks.map((item) => (
          <Link key={item.id} to={item.url} style={linkStyles}>
            {item.label}
          </Link>
        ))}
      {cellphone && (
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
      )}
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {[...firstLinks, ...secondLinks].map((item) => (
          <MenuItem
            key={item.id}
            onClick={handleClose}
            component={Link}
            to={item.url}
          >
            {item.label}
          </MenuItem>
        ))}
      </Menu>
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
