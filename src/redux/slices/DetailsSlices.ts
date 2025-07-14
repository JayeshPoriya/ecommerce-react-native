const { createSlice } = require('@reduxjs/toolkit');

const DetailsSlices = createSlice({
  name: 'details',
  initialState: {
    bannerList: [],
    selectedBannerForUpdate: {},
  },
  reducers: {
    storeBannerList(state, actions) {
      state.bannerList = actions.payload;
    },
    clearBannerList(state, actions) {
      state.bannerList = [];
    },
    storeSelectedBannerForUpdate(state, actions) {
      state.selectedBannerForUpdate = actions.payload;
    },
  },
});

export const {
  storeBannerList,
  clearBannerList,
  storeSelectedBannerForUpdate,
} = DetailsSlices.actions;
export default DetailsSlices.reducer;
