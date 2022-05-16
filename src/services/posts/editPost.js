import axios from "axios"

export const editPost = async ({ postId, postData = {}, postsStateDispatch, showToast }) => {
    try {
        const res = await axios.post(`/api/posts/edit/${postId}`, { postData });
        if (res.status === 201) {
            postsStateDispatch({ type: "UPDATE_POSTS", payload: res.data.posts });
        }
    }
    catch (e) {
        showToast({ title: e.response.errors, type: 'error' });
    }
}