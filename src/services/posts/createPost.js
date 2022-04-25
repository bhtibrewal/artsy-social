import axios from "axios"

export const createPost = async ({postData}) => {
    try {
        const res = await axios.post(`/api/posts`, {postData});
    }
    catch (e) {

    }
}