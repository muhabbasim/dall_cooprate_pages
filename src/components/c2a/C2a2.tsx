// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import { Grid, Typography, Box, Button, styled, Container } from '@mui/material';
import { DataProps } from 'src/data/DataProps';
import Translatable from '../translatable_text/Translatable';


const StyledButton2 = styled(Button)(({ theme }) => ({
  padding: '13px 34px',
  fontSize: '16px',
  borderColor: theme.palette.background.paper,
  color: theme.palette.background.paper,
  fontWeight: 600,
  '&:hover': {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.primary.main,
  },
  borderRadius: '3px'
}));

const C2a2 = (data: DataProps) => {
  return (
    <Box>
      <Box
        
        sx={{
          pt: '40px',
          pb: '40px',
          backgroundColor: '#4b4d54'
        }}
      >
        <Container maxWidth="lg">
          <Grid container justifyContent="space-between" spacing={3}>
            <Grid item xs={12} sm={12} lg={12}>
              <div className=' md:flex items-center justify-between'>

                <Typography variant="h2" maxWidth={600} color="background.paper" fontWeight={700}>
                  <Translatable>
                    {data?.hero?.hero_title} 
                  </Translatable>
                  <br />
                   <Translatable>
                    {data?.hero?.hero_title2}
                   </Translatable>
                </Typography>

                <StyledButton2
                  variant="outlined"
                  color="inherit"
                  href="https://dall-in.com/auth/login"
                  // target="_blank" 
                >
                  <Translatable>
                    Start Now
                  </Translatable>
                </StyledButton2>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default C2a2;
