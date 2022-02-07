import React, { FC } from 'react';
import './ProductScreen.css'
import { getProductDetails } from '../redux/actions/productActions';
import { addToCart } from '../redux/actions/cartActions';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';


const ProductScreen: FC = () => {

  const pathname = window.location.href;
  const arr = pathname.split("/");
  const prodId = arr[arr.length-1];
  console.log(prodId);

  const productDetails = useSelector((state:any) => state.getProductDetails);
  const { loading, error, product } = productDetails;

  const dispatch = useDispatch();

  useEffect(() => {
    if (product && prodId !== product._id) {
      dispatch(getProductDetails(prodId));
    }
  }, [dispatch, product]);

  const addToCartHandler = () => {
    dispatch(addToCart(product._id));
    // history.push(`/cart`);
  };
  return (
    <div className="productscreen">
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <div className="productscreen__left">
            <div className="left__image">
              <img src={product.imageUrl} alt={product.name} />
            </div>
            <div className="left__info">
              <p className="left__name">{product.name}</p>
              <p>Price: ${product.price}</p>
              <p>Description: {product.description}</p>
            </div>
          </div>
          <div className="productscreen__right">
            <div className="right__info">
              <p>
                Price:
                <span>${product.price}</span>
              </p>
              <p>
                Status:
                <span>{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</span>
              </p>
              <p>
                <button type="button" onClick={addToCartHandler}>
                  Add To Cart
                </button>
              </p>
            </div>
          </div>
        </>
      )}
    </div>

  )
}

export default ProductScreen;