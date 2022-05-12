import axios from "axios";

export const getUser = async ({ username, setUserToShow, showToast }) => {
    try {
        const res = await axios.get(`/api/users/${username}`);
        setUserToShow(res.data.user);
    } catch (e) {
        showToast({ title: e.response.errors, type: 'error' });
    }
};