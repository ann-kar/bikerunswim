
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export const DoughnutChart = ({labels, values}:any) => {

  ChartJS.overrides.doughnut.plugins.legend.position = "right";
  const options = {
    layout: {
      padding: 10
    }
  }
  const data = {
    labels: labels || ['running', 'biking', 'swimming'],
    datasets: [
      {
        data: values || [40, 25, 35],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="flex justify-center">
      <Doughnut data={data} options={options} />
    </div>
  );
};
