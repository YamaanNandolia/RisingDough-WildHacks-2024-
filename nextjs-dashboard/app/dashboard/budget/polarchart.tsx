"use client";

import React from 'react';
import { Chart as ChartJS,
        RadialLinearScale,
        ArcElement,
        Tooltip,
        Legend,
} from 'chart.js';
import { PolarArea } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export const data = {
    labels: ['Food', 'Utilities', 'Rent', 'Car Expenses', 'Savings', 'Fun'],
    datasets: [
      {
        label: '# of Votes',
        data: [200, 175, 800, 225, 300, 150],
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
        ],
        borderWidth: 1,
      },
    ],
  };
  
function App() {
    return( 
    <div>
        <h1 className="text-2xl text-black md:text-3xl text-bold text-center mt-10">Monthly Budget</h1>
        <PolarArea data={data}/>
    </div>);
}
export default App;