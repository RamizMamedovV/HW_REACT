import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../features/productSlice';

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    available: false
  });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      ...product,
      id: Date.now(),
      price: Number(product.price)
    };
    dispatch(addProduct(newProduct));
    setProduct({ name: '', description: '', price: '', available: false });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={product.name}
        onChange={(e) => setProduct({...product, name: e.target.value})}
        required
      />
      <textarea
        placeholder="Description"
        value={product.description}
        onChange={(e) => setProduct({...product, description: e.target.value})}
      />
      <input
        type="number"
        placeholder="Price"
        value={product.price}
        onChange={(e) => setProduct({...product, price: e.target.value})}
        required
      />
      <label>
        Available:
        <input
          type="checkbox"
          checked={product.available}
          onChange={(e) => setProduct({...product, available: e.target.checked})}
        />
      </label>
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProduct;