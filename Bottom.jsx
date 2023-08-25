import React from "react";
import { HiUser } from "react-icons/hi";
import { HiMiniSquare2Stack } from "react-icons/hi2";
import { BsFillChatTextFill } from "react-icons/bs";
import { ImHeart } from "react-icons/im";

const Bottom = () => {
  return (
    <div className="fixed bottom-0 left-0 z-50 w-full bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600 shadow-md">
      <div className="max-w-lg mx-auto font-medium p-4">
        <div className="grid grid-cols-4 gap-4">
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center px-6 group" // Increased padding for button
          >
            <HiMiniSquare2Stack
              className="w-6 h-6 mb-2 text-gray-600 dark:text-gray-400 group-hover:text-pink-600" // Increased icon size and adjusted colors
            />
            <span className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-pink-600">
              
            </span>
          </button>
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center px-6 group" // Increased padding for button
          >
            <div className="relative">
              <ImHeart
                className="w-5 h-5 mb-2 text-gray-600 dark:text-gray-400 group-hover:text-pink-600" // Increased icon size and adjusted colors
              />
              <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-pink-500"></span> {/* Adjusted indicator size */}
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-pink-600">
              
            </span>
          </button>
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center px-6 group" // Increased padding for button
          >
            <BsFillChatTextFill
              className="w-6 h-6 mb-2 text-gray-600 dark:text-gray-400 group-hover:text-pink-600" // Increased icon size and adjusted colors
            />
            <span className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-pink-600">
              
            </span>
          </button>
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center px-6 group" // Increased padding for button
          >
            <HiUser className="w-6 h-6 mb-2 text-gray-600 dark:text-gray-400 group-hover:text-pink-600" /> {/* Increased icon size and adjusted colors */}
            <span className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-pink-600">
              
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
