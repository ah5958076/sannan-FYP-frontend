import React from 'react';

const InputImageField = ({ label,name, value, multiple = true, onChange }) => {
  return (
    <div className='upload-image md:py-6 py-3'>
      <label className="block mb-2 text-sm font-medium text-primary-900" htmlFor="file_input">{label}</label>
      <input
        className="block w-full text-sm text-primary-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
        aria-describedby="file_input_help"
        id="file_input"
        multiple={multiple}
        type="file"
        accept='.jpg, .jpeg, .png, .gif, .svg'
        name={name}
        value={value}
        onChange={onChange}
      />
      <p className="mt-1 ps-2 text-xs text-gray-500 dark:text-gray-300">
        SVG, PNG, JPG, JFIF, JPEG or GIF (MAX. 800x400px).
      </p>
    </div>
  );
}

export default InputImageField;
