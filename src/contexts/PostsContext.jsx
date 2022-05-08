import { createContext, useReducer, useContext, useEffect } from "react";
import { getPosts } from "../services";
import { useToast } from "./ToastContext";

const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
  
  const {showToast} = useToast();
  const initialPostsState = [];
  const postsStateReducer = (state, { type, payload }) => {
    switch (type) {
      case "UPDATE_POSTS":
        return  [...payload] ;
      default:
        return state;
    }
  };
  const [postsState, postsStateDispatch] = useReducer(
    postsStateReducer,
    initialPostsState
  );

  useEffect(() => {
    getPosts({ postsStateDispatch, showToast });
  }, []);

  return (
    <PostsContext.Provider value={{ postsState, postsStateDispatch }}>
      {children}
    </PostsContext.Provider>
  );
};
export const usePosts = () => {
  const context = useContext(PostsContext);
  if (!context) {
    throw new Error(`use usePosts must be used inside a context provider`);
  }
  return context;
};
