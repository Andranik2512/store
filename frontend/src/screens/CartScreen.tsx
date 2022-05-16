import "./CartScreen.css";
import React, { FC } from 'react';

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

// Components
import CartItem from "../components/CartItem";

// Actions
import { addToCart, removeFromCart } from "../redux/actions/cartActions";




const CartScreen: FC = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state:any) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {}, []);

  const qtyChangeHandler = (id:number) => {
    dispatch(addToCart(id));
  };

  const removeFromCartHandler = (id:number) => {
    dispatch(removeFromCart(id));
  };

   const getCartCount = () => {
     return cartItems.length;
   };

  const getCartSubTotal = () => {
    return cartItems
      .reduce((price:number, item:any) => price + item.price, 0)
      .toFixed(2);
  };

  return (
    <>
      <div className="cartscreen">
        <div className="cartscreen__left">
          <h2>Shopping Cart</h2>

          {cartItems.length === 0 ? (
            <div>
              Your Cart Is Empty <Link to="/">Go Back</Link>
            </div>
          ) : (
            cartItems.map((item:any) => (
              <CartItem
                key={item.product}
                item={item}
                removeHandler={removeFromCartHandler}
              />
            ))
          )}
        </div>

        <div className="cartscreen__right">
          <div className="cartscreen__info">
            <p>Subtotal ({getCartCount()}) items</p>
            <p>${getCartSubTotal()}</p>
          </div>
          <div>
            <button>Proceed To Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartScreen;