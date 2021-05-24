import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { MODULE_NAME as authModule, reducer as authReducer } from './auth/reducer';
import { MODULE_NAME as dashBoardModal, reducer as dashBoardModalReducer } from './dashBoardModal/reducer';
import { MODULE_NAME as cart, cartReducer } from './cart/reducer'
import { MODULE_NAME as productsModule, reducer as productsReducer } from './products/reducer';
import { MODULE_NAME as wishlistModule, reducer as wishlistReducer } from './wishlist/reducer'
import { MODULE_NAME as mainCatalog, mainCatalogReducer} from './productsPreview/reducer';
import { MODULE_NAME as subscribeModalModule, reducer as subscribeModalReducer } from './subscriceOnProductModal/reducer'
import { MODULE_NAME as authModal, reducer as authModalReducer } from './authModal/reducer';
import { MODULE_NAME as customerInfo, reducer as customerReducer } from './customer/reducer';
import { MODULE_NAME as catalogModule, reducer as catalogReducer} from './catalog/reducer'

const persistConfig = {
  key: 'authLS',
  storage,
}

const persistedAuthReducer = persistReducer(persistConfig, authReducer)

const rootReducer = combineReducers({
  [authModule]: persistedAuthReducer,
  [cart]: cartReducer,
  [productsModule]: productsReducer,
  [dashBoardModal]: dashBoardModalReducer,
  [wishlistModule]: wishlistReducer,
  [mainCatalog]: mainCatalogReducer,
  [subscribeModalModule]: subscribeModalReducer,
  [authModal]: authModalReducer,
  [customerInfo]: customerReducer,
  [catalogModule]: catalogReducer
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
export const persistor = persistStore(store);

export default store;
