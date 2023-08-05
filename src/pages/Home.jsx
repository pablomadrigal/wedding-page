/* eslint-disable no-undef */
import { Container, Grid } from '@mui/material'
import BasicLayout from '../components/layout/BasicLayout'

import ImageGalery from '../components/image/ImageGalery'

import { pabloCard, palomaCard, galeryImages } from '../data/HomePage'
import FlowerDivider from '../components/image/FlowerDivider'
import CountDown from '../components/countDown/CountDown'
import GeneralCard from '../components/cards/GeneralCard'
import Portada from '../assents/portadas/Home-min.png'
import BibleVerse from '../components/hero/BibleVerse'

const Home = () => {
  return (
    <BasicLayout title="Home Page" image={Portada} fullWidth>
      <Container sx={{ textAlign: 'center' }}>
        <BibleVerse />
      </Container>
      <CountDown />
      <FlowerDivider onlyMobile />
      <Container maxWidth={'xl'}>
        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <GeneralCard
              imgURL1={pabloCard.imgURL1}
              imgURL2={pabloCard.imgURL2}
              gifURL={pabloCard.gifURL}
              backgroundImg={pabloCard.backgroundImg}
              title={pabloCard.name}
              description={pabloCard.description}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <FlowerDivider onlyMobile position={'down'} />
            <GeneralCard
              imgURL1={palomaCard.imgURL1}
              imgURL2={palomaCard.imgURL2}
              gifURL={palomaCard.gifURL}
              backgroundImg={palomaCard.backgroundImg}
              title={palomaCard.name}
              description={palomaCard.description}
            />
          </Grid>
        </Grid>
        <FlowerDivider position={'up'} />
        <ImageGalery imageList={galeryImages} />
      </Container>
    </BasicLayout>
  )
}

export default Home
