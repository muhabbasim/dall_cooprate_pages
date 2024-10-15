// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import { Grid, Typography } from '@mui/material';
import { DataProps } from 'src/data/DataProps';
import Translatable from '../translatable_text/Translatable';


const FeaturesTitle = (data: DataProps) => {

    return (
        <Grid container className='h-[150px] w-[700px] ' spacing={3} justifyContent="center">
            <Grid item xs={12} sm={10} lg={12}>
                <Typography style={{ color: `${data?.theme?.color_pallete?.third}`}} fontSize="36px" textTransform="uppercase" fontWeight={200} textAlign="center" mb={3}>
                    <Translatable>
                        {data?.features?.feature_title}
                    </Translatable>
                </Typography>
                <Typography fontWeight={600} textAlign="center" sx={{
                    fontSize: {
                        lg: '46px',
                        xs: '35px'
                    },
                    lineHeight: {
                        lg: '43px',
                        xs: '35px'
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
