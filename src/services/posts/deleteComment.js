import axios from "axios"

export const deleteComment = async ({ postId, commentId, postsStateDispatch, showToast }) => {
    try {
        console.log(postId, commentId, )
        const res = await axios.delete(`/api/posts/comments/${postId}/${commentId}`);
        if (res.status === 200) {
            postsStateDispatch({ type: "UPDATE_POSTS", payload: res.data.posts });
            showToast({ title: 'comment deleted', type: 'success' });
        }
    }
    catch (e) {
        showToast({ title: e?.response?.data?.errors, type: 'error' });
    }
}