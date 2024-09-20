import { Last12MonthsReviewsType, LastMonthReviewsType } from "@/types/common";
import { useState } from "react";

type Props = {
  reviews_last_12_months: Last12MonthsReviewsType;
  reviews_last_month: LastMonthReviewsType;
  setChartLabels: (value: string[]) => void;
  setChartData: (value:  (number | null)[]) => void;
};

const CustomTrendsChartToggleButton = ({
  reviews_last_12_months,
  reviews_last_month,
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
          "lg:border-b-2 border-primary font-semibold text-primary"
        }`}
        onClick={() => (
          setChartLabels(reviews_last_12_months.map((data) => data.month)),
          setChartData(reviews_last_12_months.map((data) => data.rate)),
          setToggle(1)
        )}
      >
        Last 12 months
      </button>
      <button
        className={`hover:opacity-50 ${
          toggle === 2 &&
          "lg:border-b-2 border-pinkRose font-semibold text-pinkRose"
        }`}
        onClick={() => (
          setChartLabels(
            reviews_last_12_months
              /**
               * We use slice to get only the last 6 months
               */
              .slice(reviews_last_12_months.length - 6)
              .map((data) => data.month)
          ),
          setChartData(
            reviews_last_12_months
              .slice(reviews_last_12_months.length - 6)
              .map((data) => data.rate)
          ),
          setToggle(2)
        )}
      >
        Last 6 months
      </button>
      <button
        className={`hover:opacity-50 ${
          toggle === 3 &&
          "lg:border-b-2 border-pinkRose font-semibold text-pinkRose"
        }`}
        onClick={() => (
          setChartLabels(
            reviews_last_12_months
              /**
               * We use slice to get only the last 3 months
               */
              .slice(reviews_last_12_months.length - 3)
              .map((data) => data.month)
          ),
          setChartData(
            reviews_last_12_months
              .slice(reviews_last_12_months.length - 3)
              .map((data) => data.rate)
          ),
          setToggle(3)
        )}
      >
        Last 3 months
      </button>
      <button
        className={`hover:opacity-50 ${
          toggle === 4 &&
          "lg:border-b-2 border-pinkRose font-semibold text-pinkRose"
        }`}
        onClick={() => (
          setChartLabels(reviews_last_month.map((data) => data.day)),
          setChartData(reviews_last_month.map((data) => data.rate)),
          setToggle(4)
        )}
      >
        Last month
      </button>
    </div>
  );
};

export default CustomTrendsChartToggleButton;
