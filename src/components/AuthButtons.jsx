import React from 'react';

const AuthButtons = () => {
  return (
    <div className="flex items-center space-x-4">
      <button className="text-sm font-semibold text-gray-900 hover:text-black">Log in</button>
      <button className="px-6 py-3 text-sm font-semibold text-white bg-gray-900 rounded-full hover:bg-gray-800">
        Sign up
      </button>
    </div>
  );
};

export default AuthButtons;
