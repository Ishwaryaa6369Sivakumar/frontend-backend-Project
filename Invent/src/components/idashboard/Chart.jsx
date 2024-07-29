// import * as React from 'react';
// import { useTheme } from '@mui/material/styles';
// import { LineChart, axisClasses } from '@mui/x-charts';

// import Title from './Title';

// // Generate Sales Data
// function createData(time, amount) {
//   return { time, amount: amount ?? null };
// }

// const data = [
//   createData('00:00', 0),
//   createData('03:00', 300),
//   createData('06:00', 600),
//   createData('09:00', 800),
//   createData('12:00', 1500),
//   createData('15:00', 2000),
//   createData('18:00', 2400),
//   createData('21:00', 2400),
//   createData('24:00'),
// ];

// export default function Chart() {
//   const theme = useTheme();

//   return (
//     <React.Fragment>
//       <Title>Today</Title>
//       <div style={{ width: '100%', flexGrow: 1, overflow: 'hidden' }}>
//         <LineChart
//           dataset={data}
//           margin={{
//             top: 16,
//             right: 20,
//             left: 70,
//             bottom: 30,
//           }}
//           xAxis={[
//             {
//               scaleType: 'point',
//               dataKey: 'time',
//               tickNumber: 2,
//               tickLabelStyle: theme.typography.body2,
//             },
//           ]}
//           yAxis={[
//             {
//               label: 'Sales ($)',
//               labelStyle: {
//                 ...theme.typography.body1,
//                 fill: theme.palette.text.primary,
//               },
//               tickLabelStyle: theme.typography.body2,
//               max: 2500,
//               tickNumber: 3,
//             },
//           ]}
//           series={[
//             {
//               dataKey: 'amount',
//               showMark: false,
//               color: theme.palette.primary.light,
//             },
//           ]}
//           sx={{
//             [`.${axisClasses.root} line`]: { stroke: theme.palette.text.secondary },
//             [`.${axisClasses.root} text`]: { fill: theme.palette.text.secondary },
//             [`& .${axisClasses.left} .${axisClasses.label}`]: {
//               transform: 'translateX(-25px)',
//             },
//           }}
//         />
//       </div>
//     </React.Fragment>
//   );
// }





//cg 2
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart, axisClasses } from '@mui/x-charts';

import Title from './Title';
import { red } from '@mui/material/colors';

// Generate Sales Data
function createData(time, amount) {
  return { time, amount: amount ?? null };
}

const data = [
  createData('00:00', 0),
  createData('03:00', 300),
  createData('06:00', 600),
  createData('09:00', 800),
  createData('12:00', 1500),
  createData('15:00', 2000),
  createData('18:00', 2400),
  createData('21:00', 2400),
  createData('24:00'),
];

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Today's Sales</Title>
      <div style={{ width: '100%', flexGrow: 1, overflow: 'hidden' }}>
        <LineChart
          dataset={data}
          margin={{
            top: 16,
            right: 30,
            left: 50,
            bottom: 40,
            
          }}
          xAxis={[
            {
              scaleType: 'point',
              dataKey: 'time',
              tickNumber: 8,
              tickLabelStyle: {
                ...theme.typography.body2,
                fontSize: '0.875rem',
                fill: theme.palette.text.secondary,
              },
            },
          ]}
          yAxis={[
            {
              label: 'Sales ($)',
              labelStyle: {
                ...theme.typography.body1,
                fill: theme.palette.text.primary,
              },
              tickLabelStyle: {
                ...theme.typography.body2,
                fontSize: '0.875rem',
                fill: theme.palette.text.secondary,
              },
              max: 2500,
              tickNumber: 5,
            },
          ]}
          series={[
            {
              dataKey: 'amount',
              showMark: true,
              markRadius: 4,
              markColor: theme.palette.error.main,
              color: theme.palette.error.main,
              lineStyle: {
                strokeDasharray: '5,5',
                strokeWidth: 2,
              },
            },
          ]}
          sx={{
            [`.${axisClasses.root} line`]: { stroke: theme.palette.divider },
            [`.${axisClasses.root} text`]: { fill: theme.palette.text.primary },
            [`& .${axisClasses.left} .${axisClasses.label}`]: {
              transform: 'translateX(-20px)',
            },
            [`& .${axisClasses.bottom} .${axisClasses.label}`]: {
              transform: 'translateY(30px)',
            },
          }}
        />
      </div>
    </React.Fragment>
  );
}


