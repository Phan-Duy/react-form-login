import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetch",
  async (_, thunkAPI) => {
     
  }
);

// products/fetch/fulfilled
// products/fetch/pending
// products/fetch/rejected