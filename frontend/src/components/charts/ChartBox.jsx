import * as React from 'react';
import { Grid, Box } from '@mui/material';

export default function MyChartBox(props) {
  const {icon1, title1, chart1, icon2, title2, chart2, icon3, title3, chart3} = props
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
            sx={{width:'100%', display: 'flex', minHeight:'200px', boxShadow: 3, justifyContent:'space-evenly'}}
        >

            <Grid
                xs={12} sm={12} md={6} lg={4}
                sx={{minHeight: '200px', padding:'20px'}}
            >
                <Box sx={{marginBottom: '20px', fontWeight:'bold', display:'flex', flexDirection:'row', alignItems: 'center'}}> 
                    <Box sx={{marginRight: '15px'}}>{icon1}</Box>
                    <Box>{title1}</Box>
                </Box>

                <Box 
                sx={{
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
                    },}}>
                    {chart1}
                </Box>

            </Grid>

            <Grid
                xs={12} sm={12} md={6} lg={4}
                sx={{minHeight: '200px', padding:'20px'}}
            >
                <Box sx={{marginBottom: '20px', fontWeight:'bold', display:'flex', flexDirection:'row', alignItems: 'center'}}> 
                    <Box sx={{marginRight: '15px'}}>{icon2}</Box>
                    <Box>{title2}</Box>
                </Box>

                <Box sx={{marginBottom: '20px', '& text': {
                    fill: 'white !important',
                    },

                    '& .MuiChartsLegend-label': {
                    color: 'white !important',
                    fill: 'white !important',
                    },

                    '& .MuiPieArcLabel-root': {
                    fill: 'white !important',
                    }}}>{chart2}</Box>

            </Grid>

            <Grid
                xs={12} sm={12} md={6} lg={4}
                sx={{minHeight: '200px', padding:'20px'}}
            >
                <Box sx={{marginBottom: '20px', fontWeight:'bold', display:'flex', flexDirection:'row', alignItems: 'center'}}> 
                    <Box sx={{marginRight: '15px'}}>{icon3}</Box>
                    <Box>{title3}</Box>
                </Box>

                <Box sx={{marginBottom: '20px', '& text': {
                    fill: 'white !important',
                    },

                    '& .MuiChartsLegend-label': {
                    color: 'white !important',
                    fill: 'white !important',
                    },

                    '& .MuiPieArcLabel-root': {
                    fill: 'white !important',
                    }}}>{chart3}</Box>

            </Grid>

        </Grid>

    </>
  );
}