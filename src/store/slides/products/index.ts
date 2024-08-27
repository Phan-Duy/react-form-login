import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "../../thunks/product.thunk";

const slice = createSlice({
  name: "products",
  initialState: {
    data: [],
    isLoading: false,
    error: null,
    page: 10,
    counter: 0,
    abc: {
      a: 1,
      b: 2,
      c: 3,
    }
  },
  reducers: {
    setProducts: (state, action) => {
      state.data = action.payload;
    },
    setLoading: (state) => {
      state.isLoading = !state.isLoading;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

const { reducer, actions } = slice;
const { setProducts, setLoading } = actions;

export { setProducts, setLoading };

export default reducer;

// {
//     type: "products/setProducts",
//         payload: {}
// }