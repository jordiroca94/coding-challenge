import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Last12MonthsSalesType, LastMonthsSalesType } from "@/types/common";
import { useState } from "react";
import CustomSalesChartToggleButton from "./CustomSalesChartToggleButtons";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type Props = {
  sales_last_12_months: Last12MonthsSalesType;
  sales_last_month: LastMonthsSalesType;
};

const SalesChart = ({ sales_last_12_months, sales_last_month }: Props) => {
  const [chartLabels, setChartLabels] = useState(
    sales_last_12_months.map((data) => data.month)
  );
  const [chartData, setChartData] = useState(
    sales_last_12_months.map((data) => data.sales)
  );

  //We manage the data & labels we want to render on the chart with states, we change the data with CustomSalesChartToggleButton
  return (
    <>
      <h4 className="text-2xl lg:text-3xl pb-1 text-primary font-semibold">
        Sales Chart
      </h4>
      <h5 className="font-light italic pb-2">Wine bottles sold</h5>
      <Line
        className="mb-10"
        options={{
          responsive: true,
          plugins: {
            legend: {
              display: false, // Hide default dataset labels (legends)
            },
          },
        }}
        data={{
          labels: chartLabels,
          datasets: [
            {
              data: chartData,
              backgroundColor: "#73343A",
              borderColor: "#73343A",
            },
          ],
        }}
      />
      <CustomSalesChartToggleButton
        sales_last_12_months={sales_last_12_months}
        sales_last_month={sales_last_month}
        setChartData={setChartData}
        setChartLabels={setChartLabels}
      />
    </>
  );
};

export default SalesChart;
