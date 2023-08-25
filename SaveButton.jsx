import React from "react";

const SaveButton = ({ onSave }) => {
  return (
    <div className="flex justify-center items-center mt-4">
      <button
        type="button"
        className="text-white bg-pink-500 hover:bg-pink-600 focus:outline-none focus:ring-4 focus:ring-pink-300 font-medium rounded-full text-lg px-8 py-4 mr-2 mb-2 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800"
        onClick={onSave}
      >
        Save
      </button>
    </div>
  );
};

export default SaveButton;
