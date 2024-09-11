import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Last12MonthsReviewsType, LastMonthReviewsType } from "@/types/common";
import { useState } from "react";
import CustomTrendsChartToggleButton from "./CustomTrendsChartToggleButtons";
import jsPDF from "jspdf";
import DownloadButton from "../ui/DownloadButton";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

type Props = {
  reviews_last_12_months: Last12MonthsReviewsType;
  reviews_last_month: LastMonthReviewsType;
};

const TrendsChart = ({ reviews_last_12_months, reviews_last_month }: Props) => {
  const [chartLabels, setChartLabels] = useState(
    reviews_last_12_months.map((data) => data.month)
  );
  const [chartData, setChartData] = useState(
    reviews_last_12_months.map((data) => data.rate)
  );

  const generatePDF = () => {
    // We pare chartData because our data are numbers
    const parseData = chartData.map(String);
    const doc = new jsPDF();

    // Set up PDF content
    doc.text("Average rating of customer reviews", 10, 10);
    doc.text("Rate", 50, 20);

    doc.text(chartLabels, 10, 30);
    doc.text(parseData, 50, 30);

    // Save the PDF
    doc.save("customer-review-report.pdf");
  };

  //We manage the data & labels we want to render on the chart with states, we change the data with CustomTrendsChartToggleButton

  return (
    <>
      <h4 className="text-2xl lg:text-3xl pb-1 text-pinkRose font-semibold">
        Customer Reviews Trend
      </h4>
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-4">
        <h5 className="font-light italic pb-2">
          Average rating of customer reviews
        </h5>
        <DownloadButton onclick={generatePDF} />
      </div>

      <Bar
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
              backgroundColor: "#e2c3c4",
              borderColor: "#e2c3c4",
            },
          ],
        }}
      />
      <CustomTrendsChartToggleButton
        reviews_last_12_months={reviews_last_12_months}
        reviews_last_month={reviews_last_month}
        setChartData={setChartData}
        setChartLabels={setChartLabels}
      />
    </>
  );
};

export default TrendsChart;
