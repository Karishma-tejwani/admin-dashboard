import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import getRevenue from "../API/getRevenue";
import { Card } from "antd";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

function DashboardChart() {
  //Update the Revenue data
  const [revenue, setRevenue] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    getRevenue().then((res) => {
      const labels = res.carts.map((cart) => {
        return `User-${cart.userId}`;
      });

      const data = res.carts.map((cart) => {
        return cart.discountedTotal;
      });

      const dataSource = {
        labels,
        datasets: [
          {
            fill: true,
            label: "Revenue",
            data: data,
            borderColor: "rgb(255, 0, 0)",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
          },
        ],
      };

      setRevenue(dataSource);
    });
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Order Revenue",
      },
    },
  };

  return (
    <Card style={{ width: 500, height: 340 }}>
      <Line options={options} data={revenue} />{" "}
    </Card>
  );
}

export default DashboardChart;
