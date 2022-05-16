import axios from "axios"

export const deleteComment = async ({ postId, commentId, dispatch, updatePosts, showToast }) => {
    try {
        const res = await axios.delete(`/api/posts/comments/${postId}/${commentId}`);
        if (res.status === 200) {
            dispatch(updatePosts(res.data.posts));
            showToast({ title: 'comment deleted', type: 'success' });
        }
    }
    catch (e) {
        showToast({ title: e?.response?.data?.errors, type: 'error' });
    }
}