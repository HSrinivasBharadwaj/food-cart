import React from "react";

const Button = ({ title, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 w-20 md:w-full lg:w-full xl:w-full"
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
