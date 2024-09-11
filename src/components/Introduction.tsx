import { wines } from "../data/data.json";

const Introduction = () => {
  const totalStock = wines.reduce((acc, curr) => acc + curr.stock, 0);

  return (
    <div className="col-span-4 lg:col-span-10 lg:col-start-2 text-center">
      <h1 className="text-3xl lg:text-5xl font-semibold text-primary mb-6 uppercase">
        Jordi's Winehouse
      </h1>
      <div className="w-full flex justify-center">
        <p className="text-lg py-6 lg:w-2/3 border-b-2 border-t-2 border-primary">
          Welcome to your dynamic dashboard! Monitor key metrics, analyze
          performance, and gain actionable insights with real-time data.
        </p>
      </div>
      <h2 className="text-4xl pt-10 pb-2 text-primary font-semibold ">
        Our products
      </h2>
      <p className="font-light text-lg">
        We currently have <span className="font-bold">{wines.length}</span>{" "}
        kinds of wines from all over the world
      </p>
      <p className="font-light text-lg pt-2">
        Over <span className="font-bold">{totalStock} </span> bottles of wine in
        our cellar
      </p>
    </div>
  );
};

export default Introduction;
