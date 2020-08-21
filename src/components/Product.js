import React from 'react';

import './Product.css';
import StarIcon from '@material-ui/icons/Star';

function Product({ title, price, rating, image }) {
  return (
    <div className='product'>
      <div className='product__info'>
        <p>{title}</p>
        <p className='product__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='product__rating'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon className='star' key={i} />
            ))}
        </div>
      </div>
      <img src={image} alt='' />
      <button onClick={() => console.log('hi')}>Add to basket</button>
    </div>
  );
}

export default Product;