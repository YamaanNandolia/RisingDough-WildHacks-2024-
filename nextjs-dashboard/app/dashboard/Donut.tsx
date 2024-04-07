"use client";

import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { inter } from '../ui/fonts/fonts';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

function YourChartComponent() {

  let data = [
    {
      label: "Capital One",
      value: 55,
      color: "#B1EDE8",
      cutout: "50%",
    },
    {
      label: "Discover",
      value: 15,
      color: "rgba(0, 103, 160, 1)",
      cutout: "50%",
    },
    {
      label: "Sallie Mae",
      value: 80,
      color: "rgba(83, 217, 217, 1)",
      cutout: "50%",
    },
  ]

  const options: any = {
    legend: {
      display: true,
      position: "right"
    },
    plugins: {
      datalabels: {
        formatter: function (value) {
          let val = Math.round(value);
          return new Intl.NumberFormat("tr-TR").format(val); //for number format
        },
        color: "white",

        font: {
          weight: 'bold',
          size: 14,
          family: 'Helvetica',
        },
      },
      responsive: true,
    },
    cutout: data.map((item) => item.cutout),
    elements:{
      arc:{
        borderWidth: 0
      }
    }
  };

  const finalData = {
    labels: data.map((item) => item.label),
    datasets: [
      {
        data: data.map((item) => Math.round(item.value)),
        backgroundColor: data.map((item) => item.color),
        borderColor: data.map((item) => item.color),
        borderWidth: 1,
        dataVisibility: new Array(data.length).fill(true),
      },
    ],
  };

  return (
    <div>
      <h1 className={`${inter.className} text-2xl text-gray-800 md:text-3xl text-center`}> Budget</h1>
      <Doughnut data={finalData} options={options} />
    </div>);
}
export default YourChartComponent;