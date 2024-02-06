import './style.css'
import BannerContent from './BannerContent';
import { Grid, Box, Container } from '@mui/material';
import { DataProps } from 'src/data/DataProps';
import { cn } from 'src/lib/utils';
import  heroBg from 'src/assets/performing_art/performing_bg.jpg'
const Banner = ( props: DataProps ) => {
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
