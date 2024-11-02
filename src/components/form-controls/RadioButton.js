import React from "react";

const RadioButton = ({label,value,checked,onChange}) => {
  return (
    <div className="inline-flex items-center">
      <label
        className="relative flex items-center p-3 rounded-full cursor-pointer"
        htmlFor={label}
      >
        <input
          name="type"
          type="radio"
          value={value}
          checked={checked}
          onChange={onChange}
          className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-gray-400 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-8 before:w-8 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-primary-900 checked:before:bg-primary-900 hover:before:opacity-10"
          id={label}
        />
        <span className="absolute text-primary-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5"
            viewBox="0 0 16 16"
            fill="currentColor"
          >
            <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
          </svg>
        </span>
      </label>
      <label
        className={(checked?"text-primary-700 font-medium":"text-gray-700 font-light") + " mt-px cursor-pointer select-none"}
        htmlFor={label}
      >
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
