import { configureStore } from "@reduxjs/toolkit";
import reducerProducts from "./slides/products";
import reducerCounter from "./slides/counter";

const store = configureStore({
  reducer: {
    products: reducerProducts,
    counter: reducerCounter
  },
  // middleware
});


// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store

export default store;