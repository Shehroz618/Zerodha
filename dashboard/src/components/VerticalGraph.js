// import React from "react";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { Bar } from "react-chartjs-2";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// export const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: "top",
//     },
//     title: {
//       display: true,
//       text: "Holdings",
//     },
//   },
// };

// export function VerticalGraph({ data }) {
//   return <Bar options={options} data={data} />;
// }

// import React, { useRef, useEffect } from 'react';
// import Chart from 'chart.js/auto';

// export const VerticalGraph = ({ data }) => {
//   const chartRef = useRef(null);

//   useEffect(() => {
//     const ctx = chartRef.current.getContext('2d');

//     const chart = new Chart(ctx, {
//       type: 'bar', // This creates a bar chart
//       data: data,  // Pass the data prop here
//       options: {
//         scales: {
//           y: {
//             beginAtZero: true, // Start the Y-axis at 0
//           },
//         },
//       },
//     });

//     // Cleanup on component unmount
//     return () => {
//       chart.destroy();
//     };
//   }, [data]);

//   return (
//     <div>
//       <canvas ref={chartRef} />
//     </div>
//   );
// };

// _________________________

import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};



export function VerticalGraph({data}) {
  return <Bar options={options} data={data} />;
}
