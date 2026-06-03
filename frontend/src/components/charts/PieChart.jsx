import { PieChart } from '@mui/x-charts/PieChart';



export default function MyPieChart({ myData }) {
  return (
    <PieChart
      series={[
        {
          arcLabel: (item) => `${item.percentage} %`,
          data: myData,
          highlightScope: { fade: 'global', highlight: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
          
        },
      ]}
      height={200}
      width={200}
      sx={{
        '& .MuiChartsLegend-label': {
          fill: 'white',
        },
        '& .MuiPieArcLabel-root': {
          fill: 'white',
          fontSize: 12,
        },
        /* Remove legend separator */
        '& .MuiChartsLegend-root': {
          border: 'none',
        },
      }}
    />
  );
}