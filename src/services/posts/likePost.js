import axios from "axios"

export const likePost = async ({postId}) => {
    try {
        const res = await axios.post(`/api/posts/like/${postId}`);
        console.log(res);
    }
    catch (e) {

    }
}