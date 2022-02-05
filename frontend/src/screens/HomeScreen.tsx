import React, { FC } from 'react';
import Product from '../components/Product';
import './HomeScreen.css'



const HomeScreen: FC = () => {
  return (
    <div className='homescreen'>
      <h2 className='homescreen__title'>Latest Products</h2>

      <div className='homescreen__products'>
        <Product />
      </div>
    </div>
  )
}

export default HomeScreen;;
