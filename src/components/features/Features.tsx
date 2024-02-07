// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import FeaturesTitle from './FeaturesTitle';
import { Typography, Grid, Container, Box } from '@mui/material';
import AnimationFadeIn from '../animation/Animation';
import { Col, Row } from 'react-bootstrap';
import IconWithText from './IconWithText/IconWithText';
import { DataProps } from 'src/data/DataProps';
import { cn } from 'src/lib/utils';
import Translatable from '../translatable_text/Translatable';

type Props = {
  data: DataProps;
  options?: boolean;
}

const Features = ({ data, options }: Props) => {
  const backgroundImg = data?.features.feature_background;
  const isPerformingArt = data?.name === 'performing_art'
  const featuresData = data?.features?.features_data

  return (
    <Box 
      // py={6}
      style={{backgroundImage: `url(${backgroundImg})`, backgroundAttachment: 'fixed'}}
      className={cn('relative cover-background min-h-[100vh] items-center', isPerformingArt && 'text-white')}
    >
      <div
        style={{backgroundImage: `${isPerformingArt && 'linear-gradient(to top, rgb(0,0,0,0), #151515)'}`}}
        className={cn(' pt-[150px] flex items-center justify-center', isPerformingArt && 'bg-[#151515]c ')}>
        <FeaturesTitle {...data} />
      </div>
      <Container maxWidth="lg">
        <AnimationFadeIn>
          <Box mt={6}>
            <Grid container spacing={3}>
              {featuresData?.map((feature: any) => (
                <Grid item xs={12} sm={4} lg={3} textAlign="center" key={feature?.id}>
                  <Box color="primary.main"> <feature.icon width={40} height={40} strokeWidth={1.5} /></Box>
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
        <Container maxWidth="lg" className=' absolute top-[-60px] left-[10%] right-[10%] items-center justify-center'>
          { options && <Row className="">
            <Col xs={12} sm={9} lg={12} md={12}>
              <IconWithText sponsorship={data?.features?.sponsorship_data} grid="row-cols-1 row-cols-lg-3 row-cols-md-2 justify-center gap-y-10 z-10 relative" className="rounded-[4px] flex" theme="icon-with-text-04" />
            </Col>
          </Row>}
        </Container>
      </Container>
    </Box>
  );
};

export default Features;
