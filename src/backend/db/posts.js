import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),

    title: 'Focus',
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "http://res.cloudinary.com/rohitdhatrak/image/upload/v1643387481/ml4jmfl2vn4p46idm72k.jpg",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [{
      comment: 'Hey, This book was a great read.',
      profile_pic: "https://media.istockphoto.com/vectors/man-artist-painting-autumn-tree-landscape-in-the-park-isolated-vector-vector-id1058684612?k=20&m=1058684612&s=612x612&w=0&h=edHBtI190lKLq_a0YbCWSliJ_FyHsPcysvOZ6fK_Ap0=",
      firstName: ' Guest',
      lastName: 'User',
      createdAt: formatDate(),
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
    title: 'sketch',
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    firstName: 'shubham',
    lastName: 'soni',
    username: "shubham_soni",
    porofile_pic: "https://en.pimg.jp/066/175/574/1/66175574.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
