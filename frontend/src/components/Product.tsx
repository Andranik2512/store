import React, { FC } from 'react';
import {  useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';
import { addToCart } from '../redux/actions/cartActions';
//стили
import './Product.css'

interface Productprops {
  imageUrl: string,
  description: string,
  price: number,
  name: string,
  productId: number;
}

const Product: FC<Productprops> = ({ imageUrl, description, price, name, productId }) => {
  
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addToCart(productId));
   
   
  }
  
  return (
    <Link to={`/product/${productId}`}>
      <div className="product">
        <img src={imageUrl} alt={name} />
        <div className="product__info">
          <p className="info__name">{name}</p>
          <p className="info__description">{description.substring(0, 100)}...</p>
          <p className="info__price">${price}</p>
          <Link  to={"/cart"} onClick={handleClick} className="info__button">
            Add to cart
          </Link>
        </div>
      </div>
    </Link>
  )
};
export default Product;