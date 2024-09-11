import { ReviewType } from "@/types/common";
// @ts-ignore
import ReactStars from "react-rating-stars-component";

type Props = {
  reviews?: ReviewType[];
};
const Reviews = ({ reviews }: Props) => {
  return (
    <div>
      <h4 className="text-2xl lg:text-3xl pb-1 text-darkBlue font-semibold">
        Latest reviews
      </h4>
      <h5 className="font-light italic pb-2">Reviews of our customers</h5>
      <div className="py-3">
        {reviews?.map((item, index) => (
          <div
            className="py-3 flex flex-col lg:flex-row justify-between items-start lg:gap-12 border-t border-darkBlue"
            key={index}
          >
            <p>{item.comment}</p>
            <div className="w-full sm:w-auto lg:min-w-[150px] flex flex-col items-end pt-2 lg:pt-0">
              <ReactStars
                count={5}
                value={item.rate}
                edit={false}
                size={24}
                activeColor="#55629a"
              />
              <p>{item.author}</p>
            </div>
          </div>
        ))}
        {!reviews && (
          <div className="w-full flex justify-center pb-8">
            This product does not have any review
          </div>
        )}
      </div>
    </div>
  );
};

export default Reviews;
