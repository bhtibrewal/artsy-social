import axios from "axios"

export const deletePost = async ({ postId, postsStateDispatch, showToast }) => {
    try {
        const res = await axios.delete(`/api/posts/${postId}`);
        if(res.status === 200){
            postsStateDispatch({type: "UPDATE_POSTS", payload: res.data.posts});
            showToast({title: 'post deleted', type:'success'});
        }
    }
    catch (e) {
        showToast({ title: e.response.errors, type: 'error' });
    }
}