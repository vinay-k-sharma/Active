import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const CustomLeftArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full p-2 z-10"
    >
      <FaArrowLeft className="text-gray-600 text-lg" />
    </button>
  );
};

const CustomRightArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full p-2 z-10"
    >
      <FaArrowRight className="text-gray-600 text-lg" />
    </button>
  );
};

export { CustomLeftArrow, CustomRightArrow };
