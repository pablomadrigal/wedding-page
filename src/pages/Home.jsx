/* eslint-disable no-undef */
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import BasicLayout from '../components/layout/BasicLayout';
import useCountdown from "../hooks/useCountdown";

import ImageGalery from '../components/image/ImageGalery';
import ChangeImage from '../components/image/ChangeImage';

import {coupleImages, galeryImages} from '../data/HomePage'

const Home = () => {

  const {
    days, hours, minutes, seconds,
  } = useCountdown('2023-10-20 17:00:00.000000');

  return (
    <BasicLayout title="Home Page" image={`url(${process.env.PUBLIC_URL}/Assents/portada/FloresAmarillas.jpg)`}>
      <Grid item xs={12} sm={12} md={8} lg={9} sx={{justifyContent: 'center', backgroundColor: 'white', textAlign: 'center'}}>
        <Typography variant="h1" sx={{fontSize: '2rem', mb: 2}}>
          Bienvenido a nuestra pagina web
        </Typography>
        <Typography variant="p" sx={{fontSize: '1.3rem', mb: 2}}>
          Si estas aquí, es por que eres muy importante para nosotros y queremos que seas parte de este día tan especial. Hicimos esta página web no solo por que &ldquo;habia&rdquo; que hacerla, 
          sino por que es una manera de que podamos compartir virtualmente, te invitamos a ingresar con tu usuario y contraseña para poder ver los eventos que se realizan en el día.
        </Typography>
      </Grid>
      <Grid container  spacing={2} sx={{mb: 2}} >
        <Grid item xs={12} sm={12} md={4} lg={3} sx={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'stretch', textAlign: 'center'}}>
            <Box sx={{backgroundColor: "#FFE1EF", height: '50px', mb: 2, display: "flex", justifyContent: "center", alignItems: "center" }}>
              La ceremonia empieza en: 
            </Box>
            <Box sx={{backgroundColor: "#FFE1EF", height: '100px', mb: 2, display: "flex", justifyContent: "center", alignItems: "center", fontSize: '1.5rem' }}>
              {days}
              {' '}
              D
              {' '}
              {hours}
              {' '}
              H
              {' '}
              {minutes}
              {' '}
              M
              {' '}
              {seconds}
              {' '}
              S
            </Box>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={6} sx={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
          <ChangeImage {...coupleImages[0]} style={{maxWidth: '400px'}}/>
          <Typography>Pablo Madrigal</Typography>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non odio id erat varius elementum. Vestibulum dictum ornare fermentum. Sed tortor est, eleifend in finibus ac, venenatis eget risus. Nunc et lacus sed enim congue aliquet at non tortor. Quisque sollicitudin quam mi, consectetur blandit elit pulvinar sed. Nullam viverra, nulla at commodo viverra, leo metus placerat urna, et luctus odio ipsum ut velit. Phasellus convallis turpis ac est fermentum, sed fringilla elit pretium. Morbi gravida ultrices diam, faucibus placerat ipsum luctus a. Mauris laoreet ex condimentum quam semper, eget aliquam velit iaculis. Aenean eleifend enim vitae odio fermentum, non feugiat arcu ornare.
          </p>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} sx={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
          <ChangeImage {...coupleImages[0]} style={{maxWidth: '400px'}}/>
          <Typography>Paloma Ruiz</Typography>
          <p>
          In at enim dolor. Curabitur tristique justo turpis, ut porttitor lectus ornare et. Mauris vel est diam. Quisque varius est metus. Aliquam tristique at mauris eget egestas. Mauris sit amet varius mauris. Nullam at eleifend turpis. Donec mollis, lacus sagittis tincidunt ornare, metus turpis ullamcorper tortor, cursus lacinia arcu ipsum quis turpis. In rutrum tellus non accumsan tempor. Aenean vel elit fringilla, malesuada diam vitae, mollis dui. Vestibulum odio urna, vulputate sed condimentum a, tempus id sem. Pellentesque consectetur felis non nibh tempor, nec vulputate tortor consequat. Pellentesque dictum porttitor massa, id lacinia eros tempus pellentesque. Nam mattis mauris turpis, eget luctus lectus feugiat in.
          </p>
        </Grid>
      </Grid>
      <ImageGalery imageList={galeryImages} />
    </BasicLayout>
  );
};

export default Home;
