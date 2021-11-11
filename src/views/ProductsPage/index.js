import React from 'react';

import Navigation from './components/Nav/Navigation';
import Products from './containers/Products';

const ProductsPage = props => {
  return (
    <React.Fragment>
      <Navigation />
      <Products />
    </React.Fragment>
  );
};

export default ProductsPage;
