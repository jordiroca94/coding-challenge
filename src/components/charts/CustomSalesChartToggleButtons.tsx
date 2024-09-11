import { Last12MonthsSalesType, LastMonthsSalesType } from "@/types/common";
import { useState } from "react";

type Props = {
  sales_last_12_months: Last12MonthsSalesType;
  sales_last_month: LastMonthsSalesType;
  setChartLabels: (value: string[]) => void;
  setChartData: (value: number[]) => void;
};

const CustomSalesChartToggleButton = ({
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
        className={`${
          toggle === 1 &&
          "lg:border-b-2 border-primary font-semibold text-primary"
        }`}
        onClick={() => (
          setChartLabels(sales_last_12_months.map((data) => data.month)),
          setChartData(sales_last_12_months.map((data) => data.sales)),
          setToggle(1)
        )}
      >
        Last 12 months
      </button>
      <button
        className={`${
          toggle === 2 &&
          "lg:border-b-2 border-primary font-semibold text-primary"
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
            sales_last_12_months
              .slice(sales_last_12_months.length - 6)
              .map((data) => data.sales)
          ),
          setToggle(2)
        )}
      >
        Last 6 months
      </button>
      <button
        className={`${
          toggle === 3 &&
          "lg:border-b-2 border-primary font-semibold text-primary"
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
            sales_last_12_months
              .slice(sales_last_12_months.length - 3)
              .map((data) => data.sales)
          ),
          setToggle(3)
        )}
      >
        Last 3 months
      </button>
      <button
        className={`${
          toggle === 4 &&
          "lg:border-b-2 border-primary font-semibold text-primary"
        }`}
        onClick={() => (
          setChartLabels(sales_last_month.map((data) => data.day)),
          setChartData(sales_last_month.map((data) => data.sales)),
          setToggle(4)
        )}
      >
        Last month
      </button>
    </div>
  );
};

export default CustomSalesChartToggleButton;
