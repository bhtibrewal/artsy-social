import axios from "axios"

export const editPost = async ({postId}) => {
    try {
        const res = await axios.post(`/api/posts/edit/${postId}`);
    }
    catch (e) {

    }
}