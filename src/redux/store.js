import { configureStore} from "@reduxjs/toolkit";
import { postsStateReducer } from "./reducers/postStateReducer";

export const store = configureStore({ reducer: { posts: postsStateReducer } });

