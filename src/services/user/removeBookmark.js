import axios from "axios"

export const removeBookmark = async ({ postId, userDataDispatch, showToast }) => {
    try {
        const res = await axios.post(`/api/users/remove-bookmark/${postId}`);
        if (res.status === 200) {
            userDataDispatch({ type: 'UPDATE_USER_DATA', payload: res.data });
            showToast({ title: 'removed bookmark', type: 'success' })
        }
    }
    catch (e) {
        showToast({ title: e.response.errors, type: 'error' })
    }
}