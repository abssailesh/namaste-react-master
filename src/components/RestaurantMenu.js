import React, { useState } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex , setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards?.[2]?.card?.card?.info || {};

  const categories = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">{name}</h1>
      <p className="text-gray-600 mb-6 text-sm">
        {cuisines?.join(', ')} • {costForTwoMessage}
      </p>

      <div className="space-y-4">
        {/* Accordion Menu */}
        {categories.map((category,index) => (
          //Restaurant Category is now a controlled component
          <RestaurantCategory
            key={category.card.card.title}
            data={category?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex = {()=>setShowIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
