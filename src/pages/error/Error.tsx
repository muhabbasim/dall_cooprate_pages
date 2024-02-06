import { Box, Container, Typography, Button } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import ErrorImg from 'src/assets/images/backgrounds/errorimg.svg';

const Error = () => {
  const location = useLocation()
  const pathName = location.pathname.split('/')[1]
  return (
    <Box
      display="flex"
      flexDirection="column"
      height="100vh"
      textAlign="center"
      justifyContent="center"
    >
      <Container className='flex flex-col items-center justify-center' maxWidth="md">
        <div className='flex items-center justify-center'>
          <img src={ErrorImg} alt="404" />
        </div>
        <Typography align="center" variant="h1" mb={4}>
          Opps!!!
        </Typography>
        <Typography align="center" variant="h4" mb={4}>
          This page you are looking for could not be found.
        </Typography>
        <Button
          color="primary"
          variant="contained"
          component={Link}
          to={pathName}
          disableElevation
        >
          Go Back to Home
        </Button>
      </Container>
    </Box>

  )
}
  
export default Error;
