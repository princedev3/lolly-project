"use client";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Analytics = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: { display: true },
      y: { display: true },
    },
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "weekly sales",
      },
    },
  };

  const datas = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        type: "line" as const,
        label: "Revenue Growth",
        data: [400, 600, 700, 650, 800, 720],
        borderColor: "#f97316",
        borderWidth: 2,
        fill: false,
        tension: 0.3,
      },
    ],
  };

  return (
    <div className="w-full h-full">
      <div className="relative w-full h-[400px] md:h-full ">
        <Line
          options={options}
          style={{ height: "100%", width: "100%" }}
          data={datas}
        />
      </div>
    </div>
  );
};

export default Analytics;
