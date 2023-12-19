import { createSlice } from '@reduxjs/toolkit';

import cartData from './cartData';

export let cartList = createSlice({
  name: 'cartList',
  initialState: cartData,
});
