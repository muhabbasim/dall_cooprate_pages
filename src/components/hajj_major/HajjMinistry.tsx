import './style.css'
import { Grid, Box, Container } from '@mui/material';
import { DataProps } from 'src/data/DataProps';
import HajjMinistryContent from './HajjMinistryContent';


const HajjMinistry = ( props: DataProps ) => {
  return (
    <Box 
      style={{
        backgroundImage: `linear-gradient(to bottom, rgb(0,0,0,0), #151515), url(https://www.moia.gov.sa/MediaCenter/News/PublishingImages/AL9I3761.jpg)`,
        // backgroundImage: `linear-gradient(to bottom, rgb(0,0,0,0), #151515), url(https://images.unsplash.com/photo-1633174754673-95dd2842f8fc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2531)`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }} 
      sx={{ overflow: 'hidden', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={12} sm={8}>
            <HajjMinistryContent {...props}/>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HajjMinistry;
