import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateProduct } from '../features/productSlice';

const EditProduct = ({ product }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedProduct, setEditedProduct] = useState(product);
  const dispatch = useDispatch();

  const handleSave = () => {
    dispatch(updateProduct(editedProduct));
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <div className="edit-form">
          <input
            value={editedProduct.name}
            onChange={(e) => setEditedProduct({...editedProduct, name: e.target.value})}
          />
          <textarea
            value={editedProduct.description}
            onChange={(e) => setEditedProduct({...editedProduct, description: e.target.value})}
          />
          <input
            type="number"
            value={editedProduct.price}
            onChange={(e) => setEditedProduct({...editedProduct, price: Number(e.target.value)})}
          />
          <label>
            Available:
            <input
              type="checkbox"
              checked={editedProduct.available}
              onChange={(e) => setEditedProduct({...editedProduct, available: e.target.checked})}
            />
          </label>
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <button style={{margin: '5px'}} onClick={() => setIsEditing(true)}>Edit</button>
      )}
    </div>
  );
};

export default EditProduct;