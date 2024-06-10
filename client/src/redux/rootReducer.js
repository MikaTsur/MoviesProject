import { v4 as uuidv4 } from 'uuid';

const initialState = {
  products: [],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD': {
      return {
        ...state,
        products: [...state.products, { ...action.payload }],
      };
    }

    case 'REMOVE': {
      const products = state.products.filter(
        (prod) => prod.serialNo !== action.payload
      );
      return { ...state, products };
    }

    default:
      return state;
  }
};

export default productsReducer;
