import axios from "axios"

export const dislikePost = async ({ postId, postsStateDispatch, showToast }) => {
    try {
        const res = await axios.post(`/api/posts/dislike/${postId}`);
        if (res.status === 201) {
            postsStateDispatch({ type: "UPDATE_POSTS", payload: res.data.posts });
            showToast({ title: 'post liked', type: 'success' });
        }
    }
    catch (e) {
        showToast({ title: e.response.errors, type: 'error' });
    }
}