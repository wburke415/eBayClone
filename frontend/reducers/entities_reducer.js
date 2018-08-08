import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import productsReducer from './products_reducer';
import productImagesReducer from './product_images_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  products: productsReducer,
  productImages: productImagesReducer
});

export default entitiesReducer;
