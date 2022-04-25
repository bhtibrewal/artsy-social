import axios from "axios";

export const getUsers = async ({ setUsers, showToast }) => {
    try {
        const res = await axios.get('/api/users');
        if (res.status === 200) {
            setUsers(res.data.users);
        }
    }
    catch (e) {
        showToast({ title: "Couldn't load users", type: 'error' });
    }
}