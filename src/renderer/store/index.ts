import { configureStore } from '@reduxjs/toolkit';
import cduDataReducer from './cdu/cduData';
import isfdDataReducer from './displays/ISFDData';
// ...

export const store = configureStore({
  reducer: {
    cduData: cduDataReducer,
    ISFDData: isfdDataReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
