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
import { useState } from "react";
import { websiteVisitorsPerMonth } from "../../data/data.json";
import CustomConversionRateChartToggleButton from "./CustomConversionRateChartToggleButtons";

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
  sales_last_12_months: { month: string; sales: number }[];
  sales_last_month: { day: string; sales: number }[];
};

const ConversionRateChart = ({
  sales_last_12_months,
  sales_last_month,
}: Props) => {
  const [chartLabels, setChartLabels] = useState(
    sales_last_12_months.map((data) => data.month)
  );
  const [chartData, setChartData] = useState(
    sales_last_12_months.map(
      (data, index) =>
        (data.sales / websiteVisitorsPerMonth[index].visitors) * 100
    )
  );

  //We manage the data & labels we want to render on the chart with states, we change the data with CustomConversionRateChartToggleButton

  return (
    <>
      <h4 className="text-2xl lg:text-3xl pb-1 text-greenOlive font-semibold">
        Conversion Rate
      </h4>
      <h5 className="font-light italic pb-2">Conversion rate (%)</h5>
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
              backgroundColor: "#808000",
              borderColor: "#808000",
            },
          ],
        }}
      />
      <CustomConversionRateChartToggleButton
        sales_last_12_months={sales_last_12_months}
        sales_last_month={sales_last_month}
        setChartData={setChartData}
        setChartLabels={setChartLabels}
      />
    </>
  );
};

export default ConversionRateChart;
