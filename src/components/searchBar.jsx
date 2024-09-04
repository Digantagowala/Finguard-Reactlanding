
import React from 'react';
import { CiSearch } from "react-icons/ci";

function SearchBar() {
  return (
    <div className="relative w-64">
      <CiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
      <input
        type="text"
        placeholder="Search..."
        className="w-full pl-10 py-3 text-sm text-gray-900 bg-gray-100 border border-gray-300 rounded-full focus:outline-none focus:border-gray-500 hover:border-red-300"
      />
    </div>
  );
}

export default SearchBar;




