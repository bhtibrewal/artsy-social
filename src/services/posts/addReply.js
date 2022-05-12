import axios from 'axios';

export const addReply = async ({ commentId, postId, reply, postsStateDispatch, showToast }) => {
    try {
        const res = await axios.post(`/api/posts/replies/${postId}/${commentId}`, { reply });
        if (res.status === 201) {
            postsStateDispatch({ type: "UPDATE_POSTS", payload: res.data.posts });
            showToast({ title: 'reply posted', type: 'success' });
        }
    }
    catch (e) {
        showToast({ title: e?.response?.errors, type: 'error' });
    }
}