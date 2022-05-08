import axios from "axios"

export const addComment = async ({ postId, comment, postsStateDispatch, showToast }) => {
    try {
        const res = await axios.post(`/api/posts/comments/${postId}`, { comment });
        if (res.status === 201) {
            postsStateDispatch({ type: "UPDATE_POSTS", payload: res.data.posts });
            showToast({ title: 'comment posted', type: 'success' });
        }
    }
    catch (e) {
        showToast({ title: e?.response?.error, type: 'error' });
    }
}