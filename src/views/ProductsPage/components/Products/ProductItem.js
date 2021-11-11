import React from 'react';
import { useDispatch } from 'react-redux';
import { productActions } from '../../../../store/slices/ProductsPage/product-slice';
import Button from '../../../UI/Button';

import Card from '../../../UI/Card';
import styles from './ProductItem.module.css';

const ProductItem = ({id, title, description, isFav}) => {
  const dispatch = useDispatch();

  const toggleFavHandler = () => {
    dispatch(productActions.toggleFav(id));
  };

  return (
    <Card style={{ marginBottom: '2rem' }}>
      <div className={styles["product-item"]}>
        <h2 className={isFav ? styles['is-fav'] : ''}>{title}</h2>
        <p>{description}</p>
        <Button className={!isFav ? styles['button-outline'] : ''} onClick={toggleFavHandler} >
          {isFav ? 'Un-Favorite' : 'Favorite'}
        </Button>
      </div>
    </Card>
  );
};

export default ProductItem;
