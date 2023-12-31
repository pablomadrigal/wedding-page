import { useRef, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Container, styled } from '@mui/material'
import MuiAppBar from '@mui/material/AppBar'
import PublicNavBar from './PublicNavBar'
import background from '../../assents/backgrounds/background.png'

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  paddingTop: '15px',
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: '#D0E2F1',
  backgroundImage: `url(${background})`,
  backgroundSize: 'cover',
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}))

const NavBar = ({ title, ...props }) => {
  const navBar = useRef(null)

  const [sticky, setSticky] = useState(false)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    if (!navBar.current) {
      return
    }
    setOffset(navBar.current.offsetTop)
  }, [navBar, setOffset])

  useEffect(() => {
    const handleScroll = () => {
      if (!navBar.current) {
        return
      }

      setSticky(window.scrollY > offset)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [setSticky, navBar, offset])

  return (
    <AppBar
      ref={navBar}
      position={sticky ? 'sticky' : 'relative'}
      elevation={sticky ? 1 : 0}
      {...props}
    >
      <Container maxWidth="xl">
        <PublicNavBar title={title} />
      </Container>
    </AppBar>
  )
}

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
}

NavBar.defaultProps = {
  title: '',
}

export default NavBar
