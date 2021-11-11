import React from 'react';
import { useSelector } from 'react-redux';

import FavoriteItem from '../components/Favorites/FavoriteItem';
import Navigation from '../components/Nav/Navigation';
import styles from './Products.module.css';

const Favorites = props => {
  const favoriteProducts = useSelector(state =>
    state.shop.products.filter(p => p.isFavorite)
  );
  let content = <p className={styles.placeholder}>Got no favorites yet!</p>;
  if (favoriteProducts.length > 0) {
    content = (
      <ul className="products-list">
        {favoriteProducts.map(prod => (
          <FavoriteItem
            key={prod.id}
            id={prod.id}
            title={prod.title}
            description={prod.description}
          />
        ))}
      </ul>
    );
  }
  return(
    <React.Fragment>
      <Navigation />
      {content}
    </React.Fragment>
  );
};

export default Favorites;
