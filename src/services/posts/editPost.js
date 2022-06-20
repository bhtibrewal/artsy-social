import axios from "../../axios"

export const editPost = async ({ postId, postData = {}, dispatch, updatePosts, showToast }) => {
    try {
        const res = await axios.post(`/api/posts/edit/${postId}`, { postData });
        if (res.status === 201) {
            dispatch(updatePosts(res.data.posts));
        }
    }
    catch (e) {
        showToast({ title: e.response.errors, type: 'error' });
    }
}