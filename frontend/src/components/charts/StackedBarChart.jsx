







import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function MyStackedBarChart({ dataset, XlabelName, series }) {
  return (
      <BarChart
        dataset={dataset}
        xAxis={[{
            scaleType: 'band',
            dataKey: XlabelName,
            tickLabelStyle: {
              angle: 20,
              textAnchor: 'start',
              fontSize: 10,
              fill: 'white',
            },
            labelStyle: {
              fill: 'white',
            },
        }]}
        series={series}
        width={400}
        height={250}
        sx={{
          margin: 1,
          height: 300,
        '& .MuiChartsAxis-root .MuiChartsAxis-line': {
            stroke: 'white !important',
          },

          '& .MuiChartsAxis-root .MuiChartsAxis-tick': {
            stroke: 'white !important',
          },

          '& .MuiChartsAxis-root .MuiChartsAxis-tickLabel': {
            fill: 'white !important',
          },
        }}
      />
  );
}

