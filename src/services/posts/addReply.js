import axios from 'axios';

export const addReply = async ({ commentId, postId, reply, dispatch, updatePosts, showToast }) => {
    try {
        const res = await axios.post(`/api/posts/replies/${postId}/${commentId}`, { reply });
        if (res.status === 201) {
            dispatch(updatePosts(res.data.posts));
            showToast({ title: 'reply posted', type: 'success' });
        }
    }
    catch (e) {
        showToast({ title: e?.response?.errors, type: 'error' });
    }
}