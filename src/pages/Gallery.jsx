import { Box, Grid, Typography } from '@mui/material'
import BasicLayout from '../components/layout/BasicLayout'

import FlowerDivider from '../components/image/FlowerDivider'
import Portada from '../assents/portadas/Proximamente-min.png'
import { videos360 } from '../data/GalleryPage'
import ReactPlayer from 'react-player'

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
          Videos 360°
        </Typography>
      </Box>
      <Grid container>
        {videos360.map((video) => (
          <Grid item key={video.id} xs={6} sm={4} md={3} lg={3} xl={2}>
            <ReactPlayer
              width="100%"
              height="auto"
              url={video.url}
              controls
              light={
                <img
                  src={video.thumbnail}
                  alt={video.name}
                  style={{ width: '100%' }}
                />
              }
            />
          </Grid>
        ))}
      </Grid>
      <FlowerDivider onlyMobile position="up" />
    </BasicLayout>
  )
}

export default Gallery
