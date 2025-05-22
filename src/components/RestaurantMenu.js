import React, { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';


const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo===null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } = resInfo?.cards?.[2]?.card?.card?.info || {};

  const cardData =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card || {};

  const items = cardData.itemCards || cardData.carousel || [];
  const isCarousel = !!cardData.carousel;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines?.join(", ") || "No cuisines available"} - {costForTwoMessage}</p>
      <h2>Menu</h2>
      <ul>
        {items.map((item) => {
          const info = isCarousel ? item.dish?.info : item.card?.info;

          if (!info) return null;

          return (
            <li key={info.id}>
              {info.name} - Rs.{(info.price ?? info.defaultPrice) / 100}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
