import { createSlice } from '@reduxjs/toolkit';
export let user = createSlice({
  name: 'user',
  initialState: { id: 'somypark', name: '박소영', age: 2 },
});
