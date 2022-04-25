import axios from "axios"

export const dislikePost = async ({postId}) => {
    try {
        const res = await axios.post(`/api/posts/dislike/${postId}`);
    }
    catch (e) {

    }
}