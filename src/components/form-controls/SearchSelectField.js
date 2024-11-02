import React, { useState } from 'react';

const SearchSelectField = ({ options, placeholder = "Search...", className, selectedCategories, setSelectedCategories }) => {
  const [optionState, setOptionState] = useState("hidden");
  const [searchTerm, setSearchTerm] = useState("");

  const toggleOptions = () => {
    setOptionState(optionState === "hidden" ? "block" : "hidden");
  };

  const handleOptionClick = (option) => {
    setSelectedCategories((prevSelected) => {
      if (prevSelected.some((cat) => cat.value === option.value)) {
        return prevSelected.filter((cat) => cat.value !== option.value);
      } else {
        return [...prevSelected, option];
      }
    });
    setOptionState("hidden");
  };

  const filteredOptions = options.filter(option =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`relative group ${className}`}>
      <div
        className="inline-flex justify-between items-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
        onClick={toggleOptions}
      >
        <input
          className="min-w-[90%] focus:outline-none active:outline-none"
          readOnly
          placeholder={placeholder}
        />
        <i className="fa-solid fa-chevron-down cursor-pointer"></i>
      </div>
      <div
        className={`${optionState} max-h-[10rem] overflow-y-auto absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1`}
      >
        <input
          id="search-input"
          className="block w-full px-4 py-2 text-gray-800 border rounded-md border-gray-300 focus:outline-none"
          type="text"
          placeholder="Search items"
          autoComplete="off"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {filteredOptions.map((option, index) => (
          <div
            key={index}
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:border-l-4 hover:border-primary-500 active:bg-blue-100 cursor-pointer rounded-md"
            onClick={() => handleOptionClick(option)}
          >
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchSelectField;
