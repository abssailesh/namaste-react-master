import React from "react";

const Grocery = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-4xl font-bold text-green-700 mb-4">
        Welcome to Our Grocery Store! 🛒
      </h1>
      <p className="text-lg text-gray-600 max-w-xl">
        Discover fresh produce, pantry essentials, and everyday items all in one place.
        We're committed to bringing you quality groceries at unbeatable prices.
      </p>
    </div>
  );
};

export default Grocery;
