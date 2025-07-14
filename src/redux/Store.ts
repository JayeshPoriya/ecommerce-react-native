import LoaderSlices from './slices/LoaderSlices';
import DetailsSlices from './slices/DetailsSlices';
import ListSlices from './slices/ListSlices';
import CartSlice from './slices/CartSlice';
const { configureStore } = require('@reduxjs/toolkit');

export const store = configureStore({
  reducer: {
    loader: LoaderSlices,
    list: ListSlices,
    details: DetailsSlices,
    cart: CartSlice,
  },
});
