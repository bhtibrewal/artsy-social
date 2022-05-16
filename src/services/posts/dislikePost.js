import axios from "axios"

export const dislikePost = async ({ postId, dispatch, updatePosts, showToast }) => {
    try {
        const res = await axios.post(`/api/posts/dislike/${postId}`);
        if (res.status === 201) {
            dispatch(updatePosts(res.data.posts) );
            showToast({ title: 'post disliked', type: 'success' });
        }
    }
    catch (e) {
        showToast({ title: e.response.errors, type: 'error' });
    }
}