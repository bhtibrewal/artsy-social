import axios from "axios";

export const getPosts = async ({ postsStateDispatch, showToast }) => {
    try {
        const res = await axios.get("/api/posts");
        if (res.status === 200) {
            postsStateDispatch({ type: "UPDATE_POSTS", payload: res.data.posts });
        }
    } catch (e) {
        showToast({ title: e.response.errors, type: 'error' })
    }
};