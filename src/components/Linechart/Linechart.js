import React from "react";
import { useState } from "react";
import "./Linechart.css"
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from "chart.js";
ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
);

const Linechart = () => {
  const [data, setData] = useState({
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Project Meetings With",
        data: [3, 5, 6, 4, 5, 3],
        backgroundColor: "#3954FF",
        borderColor: "#ED1690",
        tension: 0.4,
        fill: true,

        pointBorderColor: "#ED1690",
        pointBackgroundColor: "#fff",
        showLine:true
      },
    ],
  });

  return (
    <div className="linechartcontainer">
      <Line data={data}></Line>
    </div>
  );
};

export default Linechart;
