import axios from "axios"

export const followUser = async ({ followUserId, userDataDispatch, showToast }) => {
    try {
        console.log(followUserId);
        const res = await axios.post(`/api/users/follow/${followUserId}`);
        console.log(res);  
    }
    catch (e) {
        showToast({ title: e.response.data, type: 'error' })
    }
}