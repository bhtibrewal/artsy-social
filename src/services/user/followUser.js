import axios from "axios"

export const followUser = async (followUserId, showToast) => {
    try {
        const res = await axios.post(`/api/users/follow/${followUserId}`);

    }
    catch(e){

    }
}