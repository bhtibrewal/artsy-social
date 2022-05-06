import axios from "axios"

export const deleteComment = async ({ postId, commentId, postsStateDispatch, showToast }) => {
    try {
        const res = await axios.delete(`/api/posts/comment/${postId}/${commentId}`);
        if (res.status === 201) {
            postsStateDispatch({ type: "UPDATE_POSTS", payload: res.data.posts });
            showToast({ title: 'comment deleted', type: 'success' });
        }
    }
    catch (e) {
        showToast({ title: e.response.errors, type: 'error' });
    }
}