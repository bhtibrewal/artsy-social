import axios from "axios"

export const unfollowUser = async (followUserId, showToast) => {
    try {
        const res = await axios.post(`/api/users/unfollow/${followUserId}`);

    }
    catch(e){

    }
}