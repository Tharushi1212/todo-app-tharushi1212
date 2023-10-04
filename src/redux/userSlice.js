import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  type:"",
  data: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.type = action.payload.type
      state.data = action.payload.data
    },
  },
});

export const { setData } = userSlice.actions;

export default userSlice.reducer;
