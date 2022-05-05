import axios from "axios"

export const createPost = async ({ postData, postsStateDispatch, showToast }) => {
    try {
        const res = await axios.post(`/api/posts`, { postData });
        if (res.status === 201) {
            postsStateDispatch({ type: "UPDATE_POSTS", payload: res.data.posts });
            showToast({ title: 'Post Created', type: 'success' });
        }
    }
    catch (e) {
        showToast({ title: e.response.errors, type: 'error' });
    }
}