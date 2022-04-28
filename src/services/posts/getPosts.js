import axios from "axios";

export const getPosts = async ({ setPosts }) => {
    try {
        const res = await axios.get("/api/posts");
        if (res.status === 200) {
            setPosts(res.data.posts);
        }
    } catch (e) {
        console.error(e);
    }
};