import { createContext, useReducer } from "react";

const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const initialPostsState = {};
  const postsStateReducer = (state, { type, payload }) => {
    switch (type) {
      default:
        return state;
    }
  };
  const [postsState, postsStateDispatch] = useReducer(
    postsStateReducer,
    initialPostsState
  );
  return (
    <PostContext.Provider value={{ postsState, postsStateDispatch }}>
      {children}
    </PostContext.Provider>
  );
};
