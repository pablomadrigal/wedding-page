/* eslint-disable no-undef */
import { Container, Grid, Typography } from '@mui/material'
import BasicLayout from '../components/layout/BasicLayout'

import ImageGalery from '../components/image/ImageGalery'

import { coupleImages, galeryImages } from '../data/HomePage'
import FlowerDivider from '../components/image/FlowerDivider'
import CountDown from '../components/countDown/CountDown'
import CoupleCard from '../components/cards/CoupleCard'

const Home = () => {
  return (
    <BasicLayout
      title="Home Page"
      image={`url(${process.env.PUBLIC_URL}/Assents/portada/FloresAmarillas.jpg)`}
      fullWidth
    >
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
      <Container>
        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <CoupleCard
              imgURL1={coupleImages[0].imgURL1}
              imgURL2={coupleImages[0].imgURL2}
              backgroundImg={coupleImages[0].backgroundImg}
              name={coupleImages[0].name}
              description={coupleImages[0].description}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <CoupleCard
              imgURL1={coupleImages[1].imgURL1}
              imgURL2={coupleImages[1].imgURL2}
              backgroundImg={coupleImages[1].backgroundImg}
              name={coupleImages[1].name}
              description={coupleImages[1].description}
            />
          </Grid>
        </Grid>
        <FlowerDivider position={'up'}/>
        <ImageGalery imageList={galeryImages} />
      </Container>
    </BasicLayout>
  )
}

export default Home
