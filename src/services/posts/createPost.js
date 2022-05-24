import axios from "axios"

export const createPost = async ({ postData, dispatch, updatePosts, showToast }) => {
    try {
        const res = await axios.post(`/api/posts`, { postData });
        if (res.status === 201) {
            dispatch(updatePosts(res.data.posts));
            showToast({ title: 'Post Created', type: 'success' });
        }
    }
    catch (e) {
        showToast({ title: e.response.errors, type: 'error' });
    }
}