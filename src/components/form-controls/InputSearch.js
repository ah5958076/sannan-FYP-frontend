import React from 'react';

const InputSearch = ({ className = ' ', bg = 'bg-neutral-300', handleSearch }) => {
  return (
    <form className='flex justify-center items-center' onSubmit={(e) => e.preventDefault()}>
      <div className={`w-max rounded-lg flex items-center justify-between px-3 py-1 ${bg} ${className}`}>
        <input
          type='text'
          className='bg-transparent py-2 focus:outline-none'
          placeholder='Search...'
          onChange={(e) => handleSearch(e.target.value)}
        />
        <button type='submit' className='flex justify-center items-center'>
          <i className='fa-solid fa-magnifying-glass'></i>
        </button>
      </div>
    </form>
  );
};

export default InputSearch;
