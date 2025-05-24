import React from 'react';
import { CDN_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';

const ItemList = ({ items }) => {
  // console.log(items);

  const dispatch = useDispatch();

  const handleAddItem = (item)=>{
    //Dispatch an Action
    dispatch(addItem(item)) // Whatever is inside the action is basically the payload of the action
  }




  return (
    <div className="space-y-6">
      {items.map((item) => {
        const { id, name, price, description, imageId, defaultPrice } = item.card.info;

        return (
          <div
            key={id}
            className="flex gap-4 p-4 border rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 bg-white"
          >
            {/* Image with Add button */}
            <div className="relative w-28 h-28">
              <img
                src={CDN_URL + imageId}
                alt={name}
                className="w-full h-full object-cover rounded-xl border"
              />
              <button
                className="absolute bottom-1 right-1 bg-white text-xs px-3 py-1 rounded-md shadow-md text-blue-600 hover:bg-blue-100 transition" onClick={()=> handleAddItem(item)}>
                Add
              </button>
            </div>

            {/* Text content */}
            <div className="flex flex-col justify-between flex-1">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
                {description && (
                  <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                    {description}
                  </p>
                )}
              </div>

              <div className="text-sm font-medium text-green-600 mt-2">
                ₹{(price || defaultPrice) / 100}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
