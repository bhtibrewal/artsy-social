import axios from "axios"

export const removeBookmark = async () => {
    try {
        const res = await axios.post(`/api/users/remove-bookmark/:postId/`,)
    }
    catch {

    }
}