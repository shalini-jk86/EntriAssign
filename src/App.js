import React, { useState } from 'react';
import productsData from './data/products';
import ProductList from './components/ProductList';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';
import SortOptions from './components/SortOptions';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortOption, setSortOption] = useState('');

  const handleAddToCart = (productName) => {
    console.log(`${productName} added to cart`);
  };

  // Filtering
  let filteredProducts = productsData.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  if (selectedCategory) {
    filteredProducts = filteredProducts.filter((p) => p.category === selectedCategory);
  }

  // Sorting
  if (sortOption === 'priceLowHigh') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === 'priceHighLow') {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortOption === 'ratingHighLow') {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  const categories = [...new Set(productsData.map((p) => p.category))];

  return (
    <div className="App">
      <header>
        <h1>Product Listing</h1>
      </header>
      <nav>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <CategoryFilter categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <SortOptions sortOption={sortOption} setSortOption={setSortOption} />
      </nav>
      <ProductList products={filteredProducts} onAddToCart={handleAddToCart} />
    </div>
  );
}

export default App;
