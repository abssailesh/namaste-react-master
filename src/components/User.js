import React, { useState } from 'react';

const User = ({ name }) => {
  const [count] = useState(0);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mx-auto">
      <h1 className="text-xl font-semibold text-gray-800 mb-2">Count: {count}</h1>
      <h2 className="text-lg text-blue-600 font-medium mb-1">Name: {name}</h2>
      <h3 className="text-md text-gray-700 mb-1">Location: DehraDun</h3>
      <h4 className="text-md text-gray-500">Contact: @akshaymarch7</h4>
    </div>
  );
};

export default User;
