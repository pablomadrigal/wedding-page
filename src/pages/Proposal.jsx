/* eslint-disable no-undef */
import { Grid } from '@mui/material'
import BasicLayout from '../components/layout/BasicLayout'

import ImageGalery from '../components/image/ImageGalery'

import { galeryImages, proposalPageCard } from '../data/ProposalPage'
import ReactPlayer from 'react-player/lazy'
import FlowerDivider from '../components/image/FlowerDivider'
import GeneralCard from '../components/cards/GeneralCard'
import Portada from '../images/portadas/Propuesta-min.png'

const Proposal = () => {
  return (
    <BasicLayout title="Home Page" image={Portada}>
      <Grid container spacing={2} sx={{ mb: '15px' }}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <GeneralCard
            backgroundImg={proposalPageCard.image}
            title={proposalPageCard.title}
            description={proposalPageCard.description}
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
