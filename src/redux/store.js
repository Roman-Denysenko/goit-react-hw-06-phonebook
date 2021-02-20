import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

import rootReducer from './reducer';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const persistConfig = {
  key: 'contacts',
    storage,
  blacklist: ['filter'],
}

const store = configureStore({
    reducer: {
    contacts: persistReducer(persistConfig, rootReducer),
    },
    middleware,
     devTools: process.env.NODE_ENV === 'development',
});


const persistor = persistStore(store);

export default { store, persistor };