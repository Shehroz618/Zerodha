// import React from "react";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// import { Doughnut } from "react-chartjs-2";

// ChartJS.register(ArcElement, Tooltip, Legend);

// export function DoughnutChart({ data }) {
//   return <Doughnut data={data} />;
// }

import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  cutout: '70%', // optional, to adjust doughnut thickness
};

export function DoughnutChart({data}) {
  return <Doughnut data={data} options={options} />;
}