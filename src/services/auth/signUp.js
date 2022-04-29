import axios from "axios";

export const signUp = async ({ data, showToast, navigate }) => {
    try {
        const res = await axios.post("/api/auth/signup", data);
        if (res.status === 201) {
            navigate("/sign-in");
            showToast({ title: 'sign up successful   ', type: 'success' });
        }
    }
    catch (e) {
        console.log(e.response.data.errors);
    }
}