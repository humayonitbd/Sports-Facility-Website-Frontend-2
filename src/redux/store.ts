import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./features/counter/counterSlice";
import logger from "./middleware/logger";

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    // [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware().concat(logger),
  // middleware: (getDefaultMiddlewares) =>
  //   getDefaultMiddlewares().concat(baseApi.middleware),
});


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
