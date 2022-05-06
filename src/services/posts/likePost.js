import axios from "axios"

export const likePost = async ({ postId, postsStateDispatch, showToast }) => {
    try {
        const res = await axios.post(`/api/posts/like/${postId}`);
        console.log(res)
        if (res.status === 201) {
            postsStateDispatch({ type: "UPDATE_POSTS", payload: res.data.posts });
            showToast({ title: 'post liked', type: 'success' });
        }
    }
    catch (e) {
        showToast({ title: e.response.errors, type: 'error' });
    }
}