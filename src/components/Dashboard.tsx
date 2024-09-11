"use client";
import Container from "./ui/Container";
import Grid from "./ui/Grid";
import { wines } from "../data/data.json";
import Introduction from "./Introduction";
import CollapsibleItem from "./CollapsibleItem";

const Dashboard = () => {
  return (
    <Container className="py-5 lg:py-10">
      <Grid>
        <Introduction />
        <div className="col-span-4 lg:col-span-10 lg:col-start-2 py-4 lg:py-10">
          {wines.map((item) => (
            <CollapsibleItem
              key={item.id}
              id={item.id}
              name={item.name}
              country={item.country}
              stock={item.stock}
              price={item.price}
              flavor={item.flavor}
              smell={item.smell}
              description={item.description}
              reviews={item.reviews}
              sales_last_12_months={item.sales_last_12_months}
              sales_last_month={item.sales_last_month}
              reviews_last_12_months={item.reviews_last_12_months}
              reviews_last_month={item.reviews_last_month}
            />
          ))}
        </div>
      </Grid>
    </Container>
  );
};

export default Dashboard;
