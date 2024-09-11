import chevron from "../icons/chevron";
import { useState } from "react";
import Grid from "./ui/Grid";
import CollapsibleItemDescription from "./CollapsibleItemDescription";
import SalesChart from "./charts/SalesChart";
import ConversionRateChart from "./charts/ConversionRateChart";
import { WineItemType } from "@/types/common";
import TrendsChart from "./charts/TrendsChart";
import Reviews from "./Reviews";

const CollapsibleItem = ({
  name,
  country,
  stock,
  price,
  flavor,
  smell,
  description,
  reviews,
  sales_last_12_months,
  sales_last_month,
  reviews_last_12_months,
  reviews_last_month,
}: WineItemType) => {
  const [openItem, setOpenItem] = useState(false);

  return (
    <div className="border-b border-primary">
      <button
        onClick={() => setOpenItem(!openItem)}
        className="flex justify-between items-center w-full py-4"
      >
        <h3 className="text-2xl lg:text-3xl text-primary">{name}</h3>
        <span
          className={`h-2 w-5 text-primary ${
            openItem && "rotate-180 transform duration-500"
          }`}
        >
          {chevron}
        </span>
      </button>
      {openItem && (
        <Grid>
          <CollapsibleItemDescription
            country={country}
            stock={stock}
            price={price}
            flavor={flavor}
            smell={smell}
            description={description}
          />
          <div className="col-span-4 lg:col-span-12 flex flex-col text-lg ">
            <h3 className="text-2xl lg:text-3xl font-bold text-primary pb-3 text-center">
              Analytics
            </h3>
            <SalesChart
              sales_last_12_months={sales_last_12_months}
              sales_last_month={sales_last_month}
            />
            <ConversionRateChart
              sales_last_12_months={sales_last_12_months}
              sales_last_month={sales_last_month}
            />
            <TrendsChart
              reviews_last_12_months={reviews_last_12_months}
              reviews_last_month={reviews_last_month}
            />
            <Reviews reviews={reviews} />
          </div>
        </Grid>
      )}
    </div>
  );
};

export default CollapsibleItem;
