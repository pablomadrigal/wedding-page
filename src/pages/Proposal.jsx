/* eslint-disable no-undef */
import { Grid } from '@mui/material'
import BasicLayout from '../components/layout/BasicLayout'

import ImageGalery from '../components/image/ImageGalery'

import { galeryImages } from '../data/ProposalPage'
import ReactPlayer from 'react-player/lazy'
import FlowerDivider from '../components/image/FlowerDivider'
import GeneralCard from '../components/cards/GeneralCard'
import background from '../images/backgrounds/FondoAzul1.jpg'
import Portada from '../images/portadas/FloresAmarillas-min.jpg'

const Proposal = () => {
  return (
    <BasicLayout title="Home Page" image={Portada}>
      <Grid container spacing={2} sx={{ mb: '15px' }}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <GeneralCard
            backgroundImg={background}
            title="Bienvenidos a nuestra página web"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              laoreet lorem posuere diam ultricies sollicitudin. Cras sodales, est
              et semper faucibus, massa arcu porta mauris, non porta odio orci
              vitae ligula. Quisque ac ligula eu velit consectetur tincidunt at
              vel elit. Fusce iaculis mattis ligula eu bibendum. Praesent sed nunc
              mauris. Donec lacus nisi, rutrum nec dapibus vel, scelerisque et
              lacus. Nunc orci quam, porttitor maximus consectetur sed, gravida et
              libero. In egestas nulla nec velit cursus, a sodales sapien dapibus.
              
              Sed blandit euismod elit at congue. Aenean tincidunt convallis nisi,
              rhoncus sollicitudin diam sollicitudin sit amet. Cras sed diam
              augue. Proin vel vehicula lacus. Sed sit amet consequat quam.
              Vivamus ornare leo vitae est accumsan volutpat. Etiam nec lacinia"
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <ReactPlayer width="100%" url={'https://youtu.be/ZSEAgmlwFio'} />
        </Grid>
      </Grid>
      <FlowerDivider onlyMobile position="up" />
      <ImageGalery imageList={galeryImages} />
    </BasicLayout>
  )
}

export default Proposal
