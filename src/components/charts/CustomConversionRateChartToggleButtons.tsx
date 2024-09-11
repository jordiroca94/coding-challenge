import { Last12MonthsSalesType, LastMonthsSalesType } from "@/types/common";
import { useState } from "react";
import { websiteVisitorsPerMonth } from "../../data/data.json";
import { websiteVisitorsLastMonth } from "../../data/data.json";

type Props = {
  sales_last_12_months: Last12MonthsSalesType;
  sales_last_month: LastMonthsSalesType;
  setChartLabels: (value: string[]) => void;
  setChartData: (value: number[]) => void;
};

const CustomConversionRateChartToggleButton = ({
  sales_last_12_months,
  sales_last_month,
  setChartLabels,
  setChartData,
}: Props) => {
  const [toggle, setToggle] =
    useState(1); /* 1 Stands as button index to toggle charts */

  return (
    <div className="flex lg:flex-row flex-col justify-center gap-2 lg:gap-10 pb-6">
      <button
        className={`hover:opacity-50 ${
          toggle === 1 &&
          "lg:border-b-2 border-greenOlive font-semibold text-greenOlive"
        }`}
        onClick={() => (
          setChartLabels(sales_last_12_months.map((data) => data.month)),
          setChartData(
            sales_last_12_months.map(
              (data, index) =>
                (data.sales / websiteVisitorsPerMonth[index].visitors) * 100
            )
          ),
          setToggle(1)
        )}
      >
        Last 12 months
      </button>
      <button
        className={`hover:opacity-50 ${
          toggle === 2 &&
          "lg:border-b-2 border-greenOlive font-semibold text-greenOlive"
        }`}
        onClick={() => (
          setChartLabels(
            sales_last_12_months
              /**
               * We use slice to get only the last 6 months
               */
              .slice(sales_last_12_months.length - 6)
              .map((data) => data.month)
          ),
          setChartData(
            sales_last_12_months.slice(sales_last_12_months.length - 6).map(
              (data, index) =>
                /**
                 * We need to add + 6 to the index in order to get the last 6 months of websiteVisitorPerMonth [], as we are not iterating over websiteVisitorsPerMonth[]
                 */
                (data.sales / websiteVisitorsPerMonth[index + 6].visitors) * 100
            )
          ),
          setToggle(2)
        )}
      >
        Last 6 months
      </button>
      <button
        className={`hover:opacity-50 ${
          toggle === 3 &&
          "lg:border-b-2 border-greenOlive font-semibold text-greenOlive"
        }`}
        onClick={() => (
          setChartLabels(
            sales_last_12_months
              /**
               * We use slice to get only the last 3 months
               */
              .slice(sales_last_12_months.length - 3)
              .map((data) => data.month)
          ),
          setChartData(
            sales_last_12_months.slice(sales_last_12_months.length - 3).map(
              (data, index) =>
                /**
                 * We need to add + 9 to the index in order to get the last 3 months of websiteVisitorPerMonth [], as we are not iterating over websiteVisitorsPerMonth[]
                 */
                (data.sales / websiteVisitorsPerMonth[index + 9].visitors) * 100
            )
          ),
          setToggle(3)
        )}
      >
        Last 3 months
      </button>
      <button
        className={`hover:opacity-50 ${
          toggle === 4 &&
          "lg:border-b-2 border-greenOlive font-semibold text-greenOlive"
        }`}
        onClick={() => (
          setChartLabels(sales_last_month.map((data) => data.day)),
          setChartData(
            sales_last_month.map(
              (data, index) =>
                (data.sales / websiteVisitorsLastMonth[index].visitors) * 100
            )
          ),
          setToggle(4)
        )}
      >
        Last month
      </button>
    </div>
  );
};

export default CustomConversionRateChartToggleButton;
