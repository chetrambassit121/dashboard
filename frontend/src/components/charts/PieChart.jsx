import * as React from 'react';
import { PieChart, PieArcLabel, PieArcLabelPlot } from '@mui/x-charts/PieChart';

export default function MyPieChart({ myData }) {
  return (
    <PieChart
      series={[
        {
            arcLabel: (item) => `${item.percentage} %`,
            data: myData,
            highlightScope: {faded:'global', highlighted: 'item'},
            faded: { innerRadius: 30, additionalRadius: -30, color:'gray'}
        },
      ]}
      sx={{
        // [`& .${PieArcLabel.MuiPieArcLabel-root}`]:{
        [`& .${PieArcLabelPlot.root}`]:{
            fill: 'white', 
            fontSize: 14,
        }
      }}
      width={200}
      height={200}
    />
  );
}
