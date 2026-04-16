import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WishlistState {
  wishlistCount: number;
}

const initialState: WishlistState = {
  wishlistCount: 0,
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    setWishlistCount(state, action: PayloadAction<number>) {
      state.wishlistCount = action.payload;
    },
  },
});

export const { setWishlistCount } = wishlistSlice.actions;
export default wishlistSlice.reducer;
