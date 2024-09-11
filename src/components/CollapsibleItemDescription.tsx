import Image from "next/image";
import ImgPlaceholder from "../../public/images/winePlaceholder.jpg";

type Props = {
  country: string;
  stock: number;
  price: number;
  flavor: string;
  smell: string;
  description: string;
};

const CollapsibleItemDescription = ({
  country,
  stock,
  price,
  flavor,
  smell,
  description,
}: Props) => {
  return (
    <>
      <Image
        className="col-span-4 lg:col-span-4"
        src={ImgPlaceholder}
        alt="wine-placeholder"
      />
      <div className="col-span-4 lg:col-span-4 lg:col-start-9 flex flex-col text-lg ">
        <span className="font-semibold pb-2 border-b border-mediumGray w-full">
          Origin: <span className="font-light">{country}</span>
        </span>
        <span className="font-semibold py-2 border-b border-mediumGray w-full">
          Stock: <span className="font-light">{stock} units </span>
        </span>
        <span className="font-semibold py-2 border-b border-mediumGray w-full">
          Price: <span className="font-light">{price} €</span>
        </span>
        <span className="font-semibold py-2 border-b border-mediumGray w-full">
          Flavor: <span className="font-light">{flavor} </span>
        </span>
        <span className="font-semibold py-2 border-b border-mediumGray w-full">
          Smell: <span className="font-light">{smell} </span>
        </span>
      </div>
      <h3 className="col-span-4 lg:col-span-12 pt-3 font-light text-lg">
        {description}
      </h3>
    </>
  );
};

export default CollapsibleItemDescription;
