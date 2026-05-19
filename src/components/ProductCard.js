import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>
      <p>Rating: ⭐ {product.rating}</p>
      <button onClick={() => onAddToCart(product.name)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
