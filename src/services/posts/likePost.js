import axios from "axios"

export const likePost = async ({postId}) => {
    try {
        const res = await axios.post(`/api/posts/like/${postId}`);
    }
    catch (e) {

    }
}