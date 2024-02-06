import './style.css'
import BannerContent from './BannerContent';
import { Grid, Box, Container } from '@mui/material';
import { DataProps } from 'src/data/DataProps';
import { cn } from 'src/lib/utils';

const Banner = ( props: DataProps ) => {
  let heroBg = ''
  
  if ( props.name.includes('performing') ) {
    heroBg = 'src/assets/performing_art/performing_bg.jpg'
  } else if ( props.name.includes('tourism')) {
    heroBg = 'src/assets/tourism_bg.jpg'
  }


  return (
    <Box 
      style={{
        backgroundImage: `linear-gradient(to bottom, rgb(0,0,0,0), #151515), url(${heroBg})`,
        backgroundPosition: 'center',
        // backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        }} 
      className={cn(`hero_containerx= `)} 
      sx={{ overflow: 'hidden', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={12} sm={8}>
            <BannerContent {...props}/>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;
