import axios from "../../axios"

export const followUser = async ({ followUserId, setUserToShow, userDataDispatch, showToast }) => {
    try {
        const res = await axios.post(`/api/users/follow/${followUserId}`);
        if (res.status === 200) {
            setUserToShow(res.data.followUser);
            userDataDispatch({ type: 'UPDATE_USER_DATA', payload: res.data.user })
        }
    }
    catch (e) {
        showToast({ title: e.response.data, type: 'error' })
    }
}