import axios from "../../axios"

export const editUser = async ({ userData, userDataDispatch, setUserToShow, showToast }) => {
    try {
        const res = await axios.post(`/api/users/${userData.username}`, { userData });
        if (res.status === 201) {
            setUserToShow(res.data.user);
            userDataDispatch({ type: 'UPDATE_USER_DATA', payload: res.data.user })
            showToast({ title: 'user data updated', type: 'success' });
        }
    }
    catch (e) {
        console.log(e.response);
        showToast({ title: e?.response?.data?.errors, type: 'error' });
    }
}