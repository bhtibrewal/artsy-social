import axios from "axios";

export const getPosts = async ({ showToast }) => {
    try {
        const res = await axios.get("/api/posts");
        if (res.status === 200) {
            return res.data.posts;
        }
    } catch (e) {
        console.error(e)
        // showToast({ title: e.response.errors, type: 'error' })
    }
};