import axios from "axios"

export const bookmarkPost = async () => {
    try {
        const res = await axios.post(`/api/users/bookmark/:postId/`,)
    }
    catch {

    }
}