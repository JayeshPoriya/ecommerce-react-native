const { createSlice } = require('@reduxjs/toolkit');

const ListSlices = createSlice({
  name: 'list',
  initialState: {
    productsList: [],
  },
  reducers: {
    storeProductsList(state, actions) {
      state.productsList = actions.payload;
    },
    clearProductsList(state, actions) {
      state.productsList = [];
    },
  },
});

export const { storeProductsList, clearProductsList } = ListSlices.actions;
export default ListSlices.reducer;
