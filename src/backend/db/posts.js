import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),

    title: 'Artsy Shop',
    content:
      "Hey, guys check out this cool online art store",
    image: "https://res.cloudinary.com/bhtibrewal-cloud/image/upload/v1652970141/xm8d3wehc9vbzywjqcai.png",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [{
      _id: uuid(),
      comment: 'Yes, I recently bought a painting ',
      profile_pic: "https://media.istockphoto.com/vectors/man-artist-painting-autumn-tree-landscape-in-the-park-isolated-vector-vector-id1058684612?k=20&m=1058684612&s=612x612&w=0&h=edHBtI190lKLq_a0YbCWSliJ_FyHsPcysvOZ6fK_Ap0=",
      firstName: ' Guest',
      lastName: 'User',
      createdAt: formatDate(),
      replies: [],
    }],
    firstName: 'Bhavika',
    lastName: 'Tibrewal',
    username: "bhtibrewal",
    profile_pic: "https://avatars.githubusercontent.com/u/42600164?v=4",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    title: 'Painting',
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    firstName: 'shubham',
    lastName: 'soni',
    username: "shubham_soni",
    profile_pic: "https://en.pimg.jp/066/175/574/1/66175574.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    title: 'Sketch',
    content:
      "Hey guys, how is this sketch I made a few days ",
    image: "https://images.unsplash.com/photo-1500145588304-deb802b4af76?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNrZXRjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    firstName: 'shubham',
    lastName: 'soni',
    username: "shubham_soni",
    profile_pic: "https://en.pimg.jp/066/175/574/1/66175574.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    title: 'dummy post',
    content: 'dummy content',
    image: "https://cdn.singulart.com/artworks/v2/cropped/10801/main/zoom/1387023_70a06b872ad30f26deca1bcd9dbfc5e1.jpeg",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    firstName: "Guest",
    lastName: "User",
    username: "guest_user",
    profile_pic: "https://media.istockphoto.com/vectors/man-artist-painting-autumn-tree-landscape-in-the-park-isolated-vector-vector-id1058684612?k=20&m=1058684612&s=612x612&w=0&h=edHBtI190lKLq_a0YbCWSliJ_FyHsPcysvOZ6fK_Ap0=",

  },

  {
    _id: uuid(),
    title: 'brushes',
    content: 'brushes ',
    image: "https://images.unsplash.com/photo-1613746203812-717e6e5db3da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGFydCUyMGRlc2lnbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    firstName: "Guest",
    lastName: "User",
    username: "guest_user",
    profile_pic: "https://media.istockphoto.com/vectors/man-artist-painting-autumn-tree-landscape-in-the-park-isolated-vector-vector-id1058684612?k=20&m=1058684612&s=612x612&w=0&h=edHBtI190lKLq_a0YbCWSliJ_FyHsPcysvOZ6fK_Ap0=",

  }
];
