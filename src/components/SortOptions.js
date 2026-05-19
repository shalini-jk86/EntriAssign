import React from 'react';

const SortOptions = ({ sortOption, setSortOption }) => {
  return (
    <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
      <option value="">Sort By</option>
      <option value="priceLowHigh">Price: Low to High</option>
      <option value="priceHighLow">Price: High to Low</option>
      <option value="ratingHighLow">Rating: High to Low</option>
    </select>
  );
};

export default SortOptions;
