import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import reducerDirectory from './directory/reducer.directory';
import shopReducer from './shop/reducer.shop';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
}

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer, 
  directory: reducerDirectory,
  shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);
