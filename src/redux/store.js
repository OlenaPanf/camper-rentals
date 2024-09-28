import { configureStore } from '@reduxjs/toolkit';
import campersReducer from './campers/campersSlice';

const store = configureStore({
  reducer: {
    campers: campersReducer,
  },
});

export default store;

// import { configureStore } from '@reduxjs/toolkit';
// import camperReducer from './campers/camperSlice';
// import filtersReducer from './filters/filtersSlice';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; // Локальне сховище

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const persistedCamperReducer = persistReducer(persistConfig, camperReducer);

// export const store = configureStore({
//   reducer: {
//     campers: persistedCamperReducer,
//     filters: filtersReducer,
//   },
// });

// const persistor = persistStore(store);
// export default persistor;
