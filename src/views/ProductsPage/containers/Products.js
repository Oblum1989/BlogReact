import React from "react";
import { useSelector } from "react-redux";
import styles from './Products.module.css';

import ProductItem from "../components/Products/ProductItem";

const Products = () => {
  const productList = useSelector((state) => state.shop.products);

  return (
    <ul className={styles['products-list']}>
      {productList.map((prod) => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
