import axios from "../../axios";


export const getPosts = async ({ showToast }) => {
    try {
        const res = await axios.get("/api/posts",);
        console.log(res)
        if (res.status === 200) {
            console.log(res)
            return res.data.posts;
        }
    } catch (e) {
        console.error(e)
        // showToast({ title: e.response.errors, type: 'error' })
    }
};