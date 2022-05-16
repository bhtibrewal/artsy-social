import axios from "axios"

export const unfollowUser = async ({ unfollowUserId, showToast }) => {
    try {
        const res = await axios.post(`/api/users/unfollow/${unfollowUserId}`);

    }
    catch (e) {
        console.log(e);
        showToast({ title: e?.response?.data?.errors, type: 'error' });
    }
}