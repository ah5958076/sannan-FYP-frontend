import React, { useState } from 'react';
import useGetProduct from '../../hooks/useGetProduct';
import Product from './Product';
import InputSearch from '../form-controls/InputSearch';

const ProductList = () => {
  const products = useGetProduct();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  // Ensure products is not undefined before filtering
  const filteredProducts = products && products.length > 0
    ? products.filter(product =>
        product.productName.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <div className='min-h-screen bg-secondary-100 flex flex-col justify-center' id='productList'>
      <InputSearch className='md:w-[30rem]' bg='bg-neutral-100' handleSearch={handleSearch} />
      <div className='max-w-screen-xl grid gap-6 md:gap-12 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 place-items-center px-6 py-6'>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <Product product={product} key={index} />
          ))
        ) : (
          <h3 className='text-xl'>No data Available</h3>
        )}
      </div>
    </div>
  );
};

export default ProductList;
