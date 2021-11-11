const { createSlice } = require("@reduxjs/toolkit");

const productSlice = createSlice({
  name: "shop",
  initialState: {
    products: [
      {
        id: 'p1',
        title: 'Red Scarf',
        description: 'A pretty red scarf.',
        isFavorite: false
      },
      {
        id: 'p2',
        title: 'Blue T-Shirt',
        description: 'A pretty blue t-shirt.',
        isFavorite: false
      },
      {
        id: 'p3',
        title: 'Green Trousers',
        description: 'A pair of lightly green trousers.',
        isFavorite: false
      },
      {
        id: 'p4',
        title: 'Orange Hat',
        description: 'Street style! An orange hat.',
        isFavorite: false
      }
    ]
  },
  reducers: {
    toggleFav(state, action) {
      const prodIndex = state.products.findIndex(
        p => p.id === action.payload
      );
      state.products[prodIndex].isFavorite = !state.products[prodIndex].isFavorite;
    },
  },
});

export const productActions = productSlice.actions;
export default productSlice;
