import { Box, Typography } from '@mui/material'
import BasicLayout from '../components/layout/BasicLayout'

import FlowerDivider from '../components/image/FlowerDivider'
import Portada from '../assents/portadas/Proximamente-min.png'

const Gallery = () => {
  return (
    <BasicLayout title="Mass Page" image={Portada}>
      <Box
        sx={{
          textAlign: 'center',
          height: '250px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="h2"
          sx={{ mt: 5, fontFamily: 'Alex Brush', textAlign: 'center' }}
        >
          Próximamente
        </Typography>
      </Box>
      <FlowerDivider onlyMobile position="up" />
    </BasicLayout>
  )
}

export default Gallery
