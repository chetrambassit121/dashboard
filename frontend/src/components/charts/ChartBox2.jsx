import * as React from 'react';
import { Grid, Box } from '@mui/material';

export default function MyChartBox2(props) {
  const {icon1, title1, chart1, icon2, title2, chart2} = props
  const chartStyles = {
        marginBottom: '20px',

        '& text': {
            fill: 'white !important',
        },

        '& .MuiChartsLegend-label': {
            color: 'white !important',
            fill: 'white !important',
        },

        '& .MuiPieArcLabel-root': {
            fill: 'white !important',
        },
    }
  return (
    <>
        <Grid container
            sx={{width:'100%', display: 'flex', minHeight:'200px', boxShadow: 3, justifyContent:'space-evenly', marginTop:'20px'}}
        >

            <Grid
                xs={12} sm={12} md={6} lg={6}
                sx={{minHeight: '200px', padding:'20px',}}
            >
                <Box sx={{marginBottom: '20px', fontWeight:'bold', display:'flex', flexDirection:'row', alignItems: 'center'}}> 
                    <Box sx={{marginRight: '15px'}}>{icon1}</Box>
                    <Box>{title1}</Box>
                </Box>

                <Box sx={chartStyles}>{chart1}</Box>

            </Grid>

            <Grid
                xs={12} sm={12} md={6} lg={6}
                sx={{minHeight: '200px', padding:'20px'}}
            >
                <Box sx={{marginBottom: '20px', fontWeight:'bold', display:'flex', flexDirection:'row', alignItems: 'center'}}> 
                    <Box sx={{marginRight: '15px'}}>{icon2}</Box>
                    <Box>{title2}</Box>
                </Box>

                <Box sx={{chartStyles,
                    backgroundColor: 'black',

                    '& svg': {
                        backgroundColor: 'black',
                    },
                    }
                }>
                    {chart2}
                </Box>

            </Grid>

        </Grid>

    </>
  );
}