import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import NavBar from '../navbar/NavBar'
import Footer from '../footer'
import { Container } from '@mui/material'
import { useEffect } from 'react'

const BasicLayout = ({ title, children, image, fullWidth }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Box sx={{ width: '100%' }}>
      <CssBaseline />
      <div
        style={{
          justifyContent: 'center',
          backgroundImage: `url(${image})`,
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
      <NavBar title={title} sx={{ mb: 8 }} />
      <Box>
        <Container maxWidth={fullWidth ? false : 'xl'}>{children}</Container>
      </Box>
      <Footer />
    </Box>
  )
}

BasicLayout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  image: PropTypes.string,
  fullWidth: PropTypes.bool,
}

BasicLayout.defaultProps = {
  title: '',
  image: `url(/Assents/Pedida2.jpeg)`,
  fullWidth: false,
}

export default BasicLayout
