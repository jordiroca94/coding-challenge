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
import jsPDF from "jspdf";
import DownloadButton from "../ui/DownloadButton";

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

  const generatePDF = () => {
    // We pare chartData because our data are numbers
    const parseData = chartData.map(String);
    const doc = new jsPDF();

    // Set up PDF content
    doc.text("Wine bottles sold", 10, 10);
    doc.text("Units", 48, 20);

    doc.text(chartLabels, 10, 30);
    doc.text(parseData, 50, 30);

    // Save the PDF
    doc.save("sales-report.pdf");
  };

  //We manage the data & labels we want to render on the chart with states, we change the data with CustomSalesChartToggleButton
  return (
    <>
      <h4 className="text-2xl lg:text-3xl pb-1 text-primary font-semibold">
        Sales Chart
      </h4>
      <div className="flex justify-between items-center mb-4">
        <h5 className="font-light italic pb-2">Wine bottles sold</h5>
        <DownloadButton onclick={generatePDF} />
      </div>
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
