import React, { useState } from "react";

const SelectField = ({ label, options, selectedOption, onClick, className }) => {
  const [toggleOption, setToggleOption] = useState(false);

  const handleToggleOptions = () => {
    setToggleOption(!toggleOption);
  };

  const handleOptionClick = (optionValue) => {
    onClick(optionValue);
    handleToggleOptions();
  };

  return (
    <div className={`${className}`}>
      <label htmlFor="select" className="font-semibold block text-primary-900">
        {label}
      </label>

      <div className="relative">
        <div className="h-10 bg-white flex border border-gray-200 rounded items-center" onClick={handleToggleOptions}>
          <input
            value={selectedOption ? options.find(option => option.value === selectedOption).label : "-- Select a value --"}
            name="select"
            id="select"
            className="px-4 appearance-none outline-none text-primary-900 w-full"
            readOnly
          />
          <label className="cursor-pointer outline-none focus:outline-none border-l border-primary-200 transition-all text-primary-900 hover:text-primary-900">
            <svg
              className="w-4 h-4 mx-2 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
          </label>
        </div>
        <div className={`absolute z-30 ${toggleOption ? 'block' : 'hidden'} rounded shadow bg-white overflow-hidden w-full mt-1 border border-gray-200`}>
          {options.map((option, index) => (
            <div className="cursor-pointer group" key={index} onClick={() => handleOptionClick(option.value)}>
              <a className="block p-2 border-transparent border-l-4 text-primary-900 group-hover:border-primary-600 group-hover:bg-gray-100">
                {option.label}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectField;
