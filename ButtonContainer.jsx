import React from "react";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

const buttonStyles = {
  width: "50px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "20px",
  marginRight: "20px",
  marginLeft: "20px",
};

const ButtonContainer = () => {
  const location = useLocation();
  const currentPage = location.pathname.split("/")[1];

  return (
    <div className="flex justify-between">
      <NavigationButton direction="backward" />
      <NavigationButton direction="forward" />
    </div>
  );
};

const NavigationButton = ({ direction }) => {
  const location = useLocation();
  const currentPage = location.pathname.split("/")[1];

  const pagePath = getPagePath(currentPage, direction);

  
  return (
    <Link to={pagePath}>
      <button
        type="button"
        className="text-pink-500 bg-white border border-gray-300 hover:bg-pink-100 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm p-2.5 dark:bg-pink-400 dark:border-gray-600 dark:hover:bg-pink-500 dark:focus:ring-pink-800"
        style={{
          ...buttonStyles,
          marginLeft: direction === "forward" ? "20px" : "10px", // Adjusted margin
          marginRight: direction === "backward" ? "20px" : "10px", // Adjusted margin
        }}
      >
        {direction === "forward" ? (
          <HiOutlineChevronRight className="w-5 h-5" />
        ) : (
          <HiOutlineChevronLeft className="w-5 h-5" />
        )}
        <span className="sr-only">Icon description</span>
      </button>
    </Link>
  );
};

const getPagePath = (currentPage, direction) => {
  const pages = ["professional", "education", "interest", "language", "tagline"];
  const currentIndex = pages.indexOf(currentPage);
  if (direction === "forward") {
    return currentIndex < pages.length - 1 ? `/${pages[currentIndex + 1]}` : null;
  } else if (direction === "backward") {
    return currentIndex > 0 ? `/${pages[currentIndex - 1]}` : null;
  }
  return null;
};

export default ButtonContainer;
