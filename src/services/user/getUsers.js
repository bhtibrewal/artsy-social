import axios from "../../axios"

export const getUsers = async ({ setUsers, showToast }) => {
    try {
        const res = await axios.get('/api/users');
        if (res.status === 200) {
            console.log("here")
            setUsers(res.data.users);
        }
    }
    catch (e) {
        console.log(e)
        showToast({ title: "Couldn't load users", type: 'error' });
    }
}