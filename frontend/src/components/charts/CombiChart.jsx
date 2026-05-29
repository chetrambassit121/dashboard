// import * as React from 'react';
// import Box from '@mui/material/Box';
// import { ResponsiveChartContainer } from '@mui/x-charts/ResponsiveChartContainer';
// import { BarPlot } from '@mui/x-charts/BarChart';
// import { LinePlot, MarkPlot } from '@mui/x-charts/LineChart';
// import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
// import { ChartsLegend } from '@mui/x-charts/ChartsLegend';

import * as React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { ChartsContainer } from '@mui/x-charts/ChartsContainer';
import { BarPlot } from '@mui/x-charts/BarChart';
import { LinePlot, MarkPlot } from '@mui/x-charts/LineChart';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';

export default function BasicComposition({data, myseries, xcolumn}) {
  const [isResponsive, setIsResponsive] = React.useState(false);

  const sizingProps = isResponsive ? {} : { width: 500, height: 300 };
  return (
    <Box sx={{ width: '100%', overflow: 'auto' }}>
      <FormControlLabel
        checked={isResponsive}
        control={
          <Checkbox onChange={(event) => setIsResponsive(event.target.checked)} sx={{
            color: 'white',

            '&.Mui-checked': {
              color: 'white',
            },
          }}/>
        }
        label="Use responsive container"
        labelPlacement="end"
      />
      <Paper sx={{ margin: 1, height: 300 }} elevation={3}>
        <ChartsContainer
          dataset={data}
          series={myseries}

          xAxis={[
            {
              dataKey: xcolumn,
              scaleType: 'band',
              id: 'x-axis-id',
              tickLabelStyle: {
                angle: 20,
                textAnchor: 'start',
                fontSize: 10,
            },
            },
          ]}
          {...sizingProps}
        >
          <BarPlot />
          <LinePlot />
          <MarkPlot />
          <ChartsXAxis position="bottom" label="X axis" axisId="x-axis-id" sx={{
            '& .MuiChartsAxis-tickLabel': {
              fill: 'white',
            },

            '& .MuiChartsAxis-label': {
              fill: 'white',
            },

            '& .MuiChartsAxis-line': {
              stroke: 'white',
            },

            '& .MuiChartsAxis-tick': {
              stroke: 'white',
            },
          }}/>
        </ChartsContainer>
      </Paper>
    </Box>
  );
}














// import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';
// import Checkbox from '@mui/material/Checkbox';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import { ChartsContainer } from '@mui/x-charts/ChartsContainer';
// import { BarPlot } from '@mui/x-charts/BarChart';
// import { LinePlot, MarkPlot } from '@mui/x-charts/LineChart';
// import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';

// export default function BasicComposition() {
//   const [isResponsive, setIsResponsive] = React.useState(false);

//   const sizingProps = isResponsive ? {} : { width: 500, height: 300 };
//   return (
//     <Box sx={{ width: '100%', overflow: 'auto' }}>
//       <FormControlLabel
//         checked={isResponsive}
//         control={
//           <Checkbox onChange={(event) => setIsResponsive(event.target.checked)} />
//         }
//         label="Use responsive container"
//         labelPlacement="end"
//       />
//       <Paper sx={{ margin: 1, height: 300 }} elevation={3}>
//         <ChartsContainer
//           series={[
//             {
//               type: 'bar',
//               data: [1, 2, 3, 2, 1],
//             },
//             {
//               type: 'line',
//               data: [4, 3, 1, 3, 4],
//               showMark: true,
//             },
//           ]}
//           xAxis={[
//             {
//               data: ['A', 'B', 'C', 'D', 'E'],
//               scaleType: 'band',
//               id: 'x-axis-id',
//               height: 48,
//             },
//           ]}
//           {...sizingProps}
//         >
//           <BarPlot />
//           <LinePlot />
//           <MarkPlot />
//           <ChartsXAxis label="X axis" axisId="x-axis-id" />
//         </ChartsContainer>
//       </Paper>
//     </Box>
//   );
// }




