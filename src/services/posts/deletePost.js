import axios from "axios"

export const deletePost = async ({postId}) => {
    try {
        const res = await axios.delete(`/api/posts/${postId}`);
    }
    catch (e) {

    }
}