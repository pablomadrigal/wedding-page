/* eslint-disable no-undef */
import { Grid, Typography } from '@mui/material';
import BasicLayout from '../components/layout/BasicLayout';

import ImageGalery from '../components/image/ImageGalery';

import { galeryImages } from '../data/ProposalPage'
import ReactPlayer from 'react-player/lazy';

const Proposal = () => {
  return (
    <BasicLayout title="Home Page" image={`url(${process.env.PUBLIC_URL}/Assents/Pedida2.jpeg)`}>
      <Grid container  spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={6} sx={{display: 'flex', justifyContent: 'center'}}>
          Bienvenidos a nuestra página web
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} sx={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
            <ReactPlayer width="100%" url={'https://youtu.be/ZSEAgmlwFio'}/>
        </Grid>
      </Grid>
      <Typography>Las Fotos</Typography>
      <ImageGalery imageList={galeryImages} />
    </BasicLayout>
  );
};

export default Proposal;
