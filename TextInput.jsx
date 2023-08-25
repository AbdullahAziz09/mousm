import React, { useState } from 'react';

const TextInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [isPlaceholderVisible, setIsPlaceholderVisible] = useState(true);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputFocus = () => {
    setIsPlaceholderVisible(false);
  };

  const handleInputBlur = () => {
    if (inputValue === '') {
      setIsPlaceholderVisible(true);
    }
  };

  return (
    <div className="relative text-center mt-8">
      <input
        type="text"
        className="border border-gray-300 rounded px-4 py-2 w-6/12 md:w-307 h-12 md:h-45 mx-auto mb-4 md:mb-0 "
        value={inputValue}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
      {isPlaceholderVisible && (
        <div
          className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center px-4 text-gray-400 cursor-text pointer-events-none"
          onClick={() => {
            setIsPlaceholderVisible(false);
          }}
        >
          Write here
        </div>
      )}
    </div>
  );
};

export default TextInput;
