import PropTypes from 'prop-types'

import {
  IconButton,
  Menu,
  MenuItem,
  SvgIcon,
  Toolbar,
  useTheme,
} from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from 'react-router-dom'
import { ReactComponent as LogoIcon } from '../../assents/icons/Logo.svg'
import { useState } from 'react'

const firstLinks = [
  { id: 'couple', label: 'Inicio', url: '/' },
  { id: 'proposal', label: 'La propuesta', url: '/proposal' },
  { id: 'timeline', label: 'Nuestra historia', url: '/timeline' },
]

const secondLinks = [
  { id: 'guest', label: 'Invitados', url: '/guest' },
  { id: 'misal', label: 'Misal', url: '/mass' },
  //{ id: 'trasmisión', label: 'Trasmisión', url: '/direct' },
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
    <Toolbar
      disableGutters
      sx={{ justifyContent: cellphone ? 'space-between' : 'space-around' }}
    >
      {!cellphone &&
        firstLinks.map((item) => (
          <Link key={item.id} to={item.url} style={linkStyles}>
            {item.label}
          </Link>
        ))}
      <SvgIcon sx={{ fontSize: 100 }}>{<LogoIcon />}</SvgIcon>
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
