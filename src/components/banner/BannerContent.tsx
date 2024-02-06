// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import { Typography, Box, Stack, useMediaQuery, Theme } from '@mui/material';

// third party

import { motion } from 'framer-motion';
import { DataProps } from 'src/data/DataProps';
import Translatable from '../translatable_text/Translatable';



const BannerContent = (props: DataProps) => {

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
          variant="h1"
          fontWeight={900}
          sx={{
            fontSize: {
              md: '54px',
            },
            lineHeight: {
              md: '60px',
            },
            color: 'white'
          }}
        >
          <Translatable>
            {props?.hero?.hero_title}
          </Translatable>
          <br/>
          <Typography style={{ color: `${props?.theme?.color_pallete?.third}`}} component={'span'} variant="inherit">
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
          <Typography variant="h5" fontWeight={300} maxWidth={600} color={'white'}>
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
          <button style={{backgroundColor: `${props?.theme?.color_pallete?.btn_secondary}`}} className={`px-10 py-4 rounded-sm font-bold text-white`}>
            <Translatable>
              Book your seat
            </Translatable>
          </button>
        </Stack>
      </motion.div>
    </Box>
  );
};

export default BannerContent;
