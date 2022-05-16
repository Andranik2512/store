import React, { FC,useState,useEffect } from 'react';
import {useSelector, useDispatch  } from 'react-redux';

import Product from '../components/Product';
import {BsList} from "react-icons/bs";



import {getProducts as listProducts} from '../redux/actions/productActions'
import './HomeScreen.css'

const HomeScreen: FC= () => {
  const [list, setList] = useState(true);

  const dispatch = useDispatch();

  const getProducts = useSelector((state:any) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className="homescreen__products">
      <div>
        <BsList onClick={() => setList(!list)} className='bslist'/>
        </div>
      <div className={list ? "grid" : "list"}>
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          console.log(products),
          products.map((product:any) => (
            <Product
            key={product._id}
            name={product.name}
            description={product.description}
            price={product.price}
            imageUrl={product.imageUrl}
            productId={product._id}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default HomeScreen;