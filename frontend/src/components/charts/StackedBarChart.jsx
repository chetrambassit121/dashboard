// import { BarChart } from '@mui/x-charts/BarChart';
// import * as React from 'react';


// export default function MyStackedBarChart({dataset}) {
  
//   return (
//     <BarChart
//       dataset={dataset}
//       xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
//       series={[{ dataKey: 'seoul', label: 'Seoul rainfall', valueFormatter }]}
//       width = {400}
//       height = {300}
//     />
//   );
// }












import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function MyStackedBarChart({dataset, XlabelName, series}) {
   
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
        },
      }]}
      series={ series}
      width = {400}
      height = {250}
      margin={{ bottom: 80, left: 50, right: 20, top: 20 }}
    />
  );
}




// import { BarChart } from '@mui/x-charts/BarChart';
// import { dataset, valueFormatter } from '../dataset/weather';

// const chartSetting = {
//   xAxis: [
//     {
//       label: 'rainfall (mm)',
//     },
//   ],
//   height: 400,
//   margin: { left: 0 },
// };

// export default function HorizontalBars() {
//   return (
//     <BarChart
//       dataset={dataset}
//       yAxis={[{ scaleType: 'band', dataKey: 'month' }]}
//       series={[{ dataKey: 'seoul', label: 'Seoul rainfall', valueFormatter }]}
//       layout="horizontal"
//       {...chartSetting}
//     />
//   );
// }