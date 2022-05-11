const initialPostsState = [];

export const postsStateReducer = (state = initialPostsState, { type, payload }) => {
    switch (type) {
        case "UPDATE_POSTS":
            return [...payload];
        default:
            return state;
    }
};