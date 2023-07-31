/* eslint-disable no-undef */
import { Container, Grid, Typography } from '@mui/material'
import BasicLayout from '../components/layout/BasicLayout'

import ImageGalery from '../components/image/ImageGalery'

import { pabloCard, palomaCard, galeryImages } from '../data/HomePage'
import FlowerDivider from '../components/image/FlowerDivider'
import CountDown from '../components/countDown/CountDown'
import GeneralCard from '../components/cards/GeneralCard'
import Portada from '../images/portadas/Home-min.png'

const Home = () => {
  return (
    <BasicLayout title="Home Page" image={Portada} fullWidth>
      <Container sx={{ textAlign: 'center' }}>
        <Typography variant="h1" sx={{ fontSize: '2rem', mb: 2 }}>
          Bienvenido a nuestra pagina web
        </Typography>
        <Typography variant="p" sx={{ fontSize: '1.3rem', mb: 2 }}>
          Si estas aquí, es por que eres muy importante para nosotros y queremos
          que seas parte de este día tan especial. Hicimos esta página web no
          solo por que &ldquo;habia&rdquo; que hacerla, sino por que es una
          manera de que podamos compartir virtualmente, te invitamos a ingresar
          con tu usuario y contraseña para poder ver los eventos que se realizan
          en el día.
        </Typography>
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
