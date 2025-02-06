"use client";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Chart.js modules register karna
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

// Items ka type define karna
interface RevenueItem {
  date: string;
  data?: {
    totalRevenue?: number;
  };
}

// Component props ke liye type define karna
interface RevenueChartProps {
  items: RevenueItem[];
}

export default function RevenueChart({ items }: RevenueChartProps) {
  const data = {
    labels: items?.map((item) => item?.date),
    datasets: [
      {
        label: "Revenue",
        data: items?.map((item) => (item?.data?.totalRevenue ?? 0) / 100),
        backgroundColor: "#879fff20",
        borderColor: "#879fff80",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Revenue Line Chart",
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <section className="bg-white p-5 rounded-xl shadow w-full h-[430px]">
      <Line data={data} options={options} />
    </section>
  );
}
