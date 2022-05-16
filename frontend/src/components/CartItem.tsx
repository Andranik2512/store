import React, { FC } from 'react';
import { Link } from "react-router-dom";

import "./CartItem.css";

interface Productprops{
  item:any, 
  removeHandler:any, 
  key:any
}

const CartItem: FC<Productprops> = ({item, removeHandler, key}) => {
  return (
    <div className="cartitem">
      <div className="cartitem__image">
        <img src={item.imageUrl} alt={item.name} />
      </div>
      <Link to={`/product/${item.product}`} className="cartItem__name">
        <p>{item.name}</p>
      </Link>
      <p className="cartitem__price">${item.price}</p>
      <button
        className="cartItem__deleteBtn"
        onClick={() => removeHandler(item.product)}
      >
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default CartItem;