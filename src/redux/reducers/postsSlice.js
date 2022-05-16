import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPosts } from "../../services";

const initialState = {
    status: "idle",
    error: null,
    posts: []
};

export const loadPosts = createAsyncThunk('posts/loadPosts',()=> getPosts({}));
const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        updatePosts: (state, action) => {
            state.posts = action.payload;
        }
    },
    extraReducers: {
        [loadPosts.pending]: (state) => {
            state.status = 'loading';
        },
        [loadPosts.fulfilled]: (state, action) => {
            console.log("enter in fulfilled", action.payload);
            state.status = 'fulfilled';
            state.posts = action.payload;
        }
    }
})

export default postSlice.reducer;
export const {updatePosts} = postSlice.actions;

