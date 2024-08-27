import { createAction, createSlice } from "@reduxjs/toolkit";

const setCounter = createAction<number>("setCounter");

const slice = createSlice({
  name: "counter",
  initialState: {
    data: 0,
  },
  reducers: {
    // setCounter: (state, action) => {
    //   state.data = action.payload;
    // },
    },
  extraReducers: (builder) => {
    builder
      .addCase(setCounter, () => {
        // console.log("setCounter common");
      })
  },
});

const { reducer } = slice;
// const { setCounter } = actions;

export { setCounter };
    
export default reducer;