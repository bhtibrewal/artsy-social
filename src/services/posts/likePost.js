import axios from "../../axios"

export const likePost = async ({ postId, dispatch, updatePosts, showToast }) => {
    try {
        const res = await axios.post(`/api/posts/likes/${postId}`);
        if (res.status === 201) {
            dispatch(updatePosts(res.data.posts));
            showToast({ title: 'post liked', type: 'success' });
        }
    }
    catch (e) {
        showToast({ title: e?.response?.errors, type: 'error' });
    }
}