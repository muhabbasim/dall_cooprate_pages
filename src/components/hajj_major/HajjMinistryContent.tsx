// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import { Typography, Box, Stack, useMediaQuery, Theme } from '@mui/material';

// third party

import { motion } from 'framer-motion';
import { DataProps } from 'src/data/DataProps';
import Translatable from '../translatable_text/Translatable';
import { Link } from 'react-router-dom';



const HajjMinistryContent = (props: DataProps) => {

  const lgDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'));
  
  return (
    <Box mt={lgDown ? 8 : 0}>
      <motion.div
        initial={{ opacity: 0, translateY: 550 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 30,
        }}
      >
        <Typography
          // variant="h1"
          fontWeight={900}
          sx={{
            fontSize: {
              md: '64px',
              xs: '34px',
            },
            lineHeight: {
              md: '80px',
              xs: '60px',
            },
            color: 'white',
            fontFamily: 'Rubik'
          }}
        >
          <Translatable>
            {props?.hero?.hero_title}
          </Translatable>
          <br/>
          <Typography style={{ color: `${props?.theme?.color_pallete?.third}`}} component={'span'} sx={{
            fontSize: {
              md: '64px',
              xs: '44px',
            },
            lineHeight: {
              md: '10px',
              xs: '50px',
            },
            color: 'white',
            fontFamily: 'Rubik'

          }}>
            <Translatable>
              {props?.hero?.hero_title2}
            </Translatable>
          </Typography>
        </Typography>
      </motion.div>
      <Box pt={4} pb={3}>
        <motion.div
          initial={{ opacity: 0, translateY: 550 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{
            type: 'spring',
            stiffness: 150,
            damping: 30,
            delay: 0.2,
          }}
        >
          <Typography variant="h2" fontWeight={300} maxWidth={700} color={'white'} sx={{fontFamily: "Rubik"}}>
            <Translatable>
              {props?.hero?.hero_cta}
            </Translatable>
          </Typography>
        </motion.div>
      </Box>
      <motion.div
        initial={{ opacity: 0, translateY: 550 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 30,
          delay: 0.4,
        }}
      >
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} mt={3}>
          <Link to="/hajj-ministry/all-jobs" style={{backgroundColor: `${props?.theme?.color_pallete?.btn_secondary}`}} className={`px-10 py-4 rounded-sm font-bold text-white`}>
            <Translatable>
              Explore Jobs
            </Translatable>
          </Link>
        </Stack>
      </motion.div>
    </Box>
  );
};

export default HajjMinistryContent;
