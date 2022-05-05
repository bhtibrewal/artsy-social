import axios from "axios"

export const addComment = async ({ postId, comment, postsStateDispatch, showToast }) => {
    try {
        const res = await axios.post(`/api/posts/comments/${postId}`, { comment });
        console.log(res);
        if (res.status === 201) {
            postsStateDispatch({ type: "UPDATE_POSTS", payload: res.data.posts });
            showToast({ title: 'comment posted', type: 'success' });
        }
    }
    catch (e) {
        console.log(e)
        showToast({ title: e?.response?.errors, type: 'error' });
    }
}