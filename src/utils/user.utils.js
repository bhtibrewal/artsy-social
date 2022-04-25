export const isFollowing = () => following.some(
    (currUser) => currUser._id === followUser._id
);

export const inBookmarks = (postId) => bookmarks.some(post => post._id === postId);