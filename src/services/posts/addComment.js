import axios from "axios"

export const addComment = async ({ postId, comment, dispatch, updatePosts, showToast }) => {
    try {
        const res = await axios.post(`/api/posts/comments/${postId}`, { comment });
        if (res.status === 201) {
            dispatch(updatePosts(res.data.posts));
            showToast({ title: 'comment posted', type: 'success' });
        }
    }
    catch (e) {
        showToast({ title: e?.response?.error, type: 'error' });
    }
}