import React, { useState } from "react";

const CheckButton = ({ buttonText }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    console.log(`Checkbox "${buttonText}" is now ${newValue ? "checked" : "unchecked"}`);
  };

  return (
    <label
      className={`flex-shrink-0 inline-flex flex-col items-center justify-center w-140 h-45 p-2 ml-4 mt-4 text-${
        isChecked ? "white" : "black"
      } ${
        isChecked ? "bg-gray-700" : "bg-white"
      } border-1 border-black rounded-lg cursor-pointer ${
        isChecked ? "lg:hover:text-white" : "lg:hover:text-gray-600"
      }`}
      style={{
        border: "1px solid black",
        width: "140px", // Fixed width for both states
        height: "45px", // Fixed height for both states
        fontSize: buttonText.length > 10 ? "0.8rem" : "1rem",
        marginBottom: "0.25rem", // Add a very minimal spacing between rows
      }}
    >
      <input
        type="checkbox"
        id={buttonText}
        className="hidden peer"
        required=""
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <div className="text-md font-semibold text-center overflow-hidden whitespace-nowrap border-black">
        {buttonText}
      </div>
    </label>
  );
};

export default CheckButton;
