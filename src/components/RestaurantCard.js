import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    sla,
  } = resData?.info;

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img
        className="w-full h-40 object-cover"
        alt="restaurant"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 truncate">{name}</h3>
        <p className="text-sm text-gray-500 mb-1 truncate">
          {cuisines.join(", ")}
        </p>
        <p className="text-sm text-gray-600">⭐ {avgRating} | {sla?.slaString}</p>
        <p className="text-sm font-medium text-gray-700">{costForTwo}</p>
      </div>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <div className="absolute top-2 left-2 bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded shadow-sm">
          Open Now
        </div>
        <RestaurantCard {...props} />
      </div>
    );
  };
};


export default RestaurantCard;
