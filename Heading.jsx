import React from 'react';

const Heading = ({ title, subtitle }) => {
  return (
    <div className="mx-auto px-4 text-center max-w-3xl">
      <h1 className="text-4xl font-bold mt-2 lg:text-5xl xl:text-6xl">{title}</h1>
      <h3 className="text-gray-500 mt-2 lg:text-lg xl:text-xl">{subtitle}</h3>
    </div>
  );
}

export default Heading;
