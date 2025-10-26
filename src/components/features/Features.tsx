// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import FeaturesTitle from './FeaturesTitle';
import { Typography, Grid, Container, Box } from '@mui/material';
import AnimationFadeIn from '../animation/Animation';
// import { Col, Row } from 'react-bootstrap';
// import IconWithText from './IconWithText/IconWithText';
import { DataProps } from 'src/data/DataProps';
import { cn } from 'src/lib/utils';
import Translatable from '../translatable_text/Translatable';

type Props = {
  data: DataProps;
  options?: boolean;
}

const Features = ({ data }: Props) => {
  const backgroundImg = data?.features.feature_background;
  const isPerformingArt = data?.name === 'performing_art'
  const featuresData = data?.features?.features_data

  return (
    <Box 
      style={{backgroundImage: `url(${backgroundImg})`, backgroundAttachment: 'fixed'}}
      className={cn('relative px-10 pb-10 cover-background min-h-[100vh] items-center', isPerformingArt && 'text-white')}
    >
      <div
        className={cn(' pt-[100px] flex items-center justify-center', isPerformingArt && 'bg-[#151515]x ')}>
        <FeaturesTitle {...data} />
      </div>
      <Container maxWidth="lg">
        <AnimationFadeIn>
          <Box mt={6}>
            <Grid container spacing={4}>
              {featuresData?.map((feature: any) => (
                <Grid item xs={12} sm={6} lg={4} sx={{ pr: 3, pb: 3}} textAlign="center" key={feature?.id} className='border'>
                  <Box color={data?.features?.feature_color || "primary.main"}> <feature.icon width={40} height={40} strokeWidth={1.5} /></Box>
                  <Typography variant="h4" mt={3}>
                    <Translatable>
                      {feature?.title}
                    </Translatable>
                  </Typography>
                  <Typography variant='inherit' className=' font-medium text-md' mt={1} mb={3}>
                    <Translatable>
                      {feature?.subtext}
                    </Translatable>
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Box>
        </AnimationFadeIn>
      </Container>
    </Box>
  );
};

export default Features;
