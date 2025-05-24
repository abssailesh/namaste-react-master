import React, { useState } from 'react';
import ItemList from './ItemList';


const RestaurantCategory = ({ data , showItems , setShowIndex}) => {
  // const [showItems , setShowItems] = useState(false)
  const handleClick = ()=>{
    // setShowItems(!showItems);
    setShowIndex();
    
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <div className="flex justify-between items-center border-b pb-2 mb-2">
        <h2 className="text-lg font-semibold text-gray-800 cursor-pointer" onClick={handleClick}>
          {data.title} ({data.itemCards.length})
        </h2>
        <span className="text-gray-500 text-xl cursor-pointer" onClick={handleClick}>⌄</span>
      </div>
      {showItems && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
