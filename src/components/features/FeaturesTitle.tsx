// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import { Grid, Typography } from '@mui/material';
import { DataProps } from 'src/data/DataProps';
import Translatable from '../translatable_text/Translatable';


const FeaturesTitle = (data: DataProps) => {

    return (
        <Grid container className='h-[150px] w-[700px] ' spacing={3} justifyContent="center">
            <Grid item xs={12} sm={10} lg={8}>
                <Typography fontSize="16" textTransform="uppercase" fontWeight={500} textAlign="center" mb={1}>
                    <Translatable>
                        {data?.features?.feature_title}
                    </Translatable>
                </Typography>
                <Typography fontWeight={700} textAlign="center" sx={{
                    fontSize: {
                        lg: '36px',
                        xs: '25px'
                    },
                    lineHeight: {
                        lg: '43px',
                        xs: '30px'
                    },

                }}>
                    <Translatable>
                        {data?.features?.feature_sub}
                    </Translatable>
                </Typography>
            </Grid>
        </Grid>
    );
};

export default FeaturesTitle;
