import { HiStar, HiOutlineStar } from "react-icons/hi";

const MAX_RATING = 5; // Example max rating value
// const star = 3; // Example rating value, you can dynamically set this

const Rating = ({ star }: { star: any }) => (
  <div className="flex mt-3">
    {Array.from({ length: MAX_RATING }, (_, index) =>
      index < star ? (
        <HiStar key={index} style={{ color: "#EC9D4D", fontSize: "24px" }} />
      ) : (
        <HiOutlineStar
          key={index}
          style={{ color: "#EC9D4D", fontSize: "24px" }}
        />
      )
    )}
  </div>
);

export default Rating;
