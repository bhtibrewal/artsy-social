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
    comments:[],
    firstName:'Bhavika',
    lastName: 'Tibrewal', 
    username: "bhtibrewal",
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
    comments:[],
    firstName:'shubham',
    lastName: 'soni', 
    username: "@shubham_soni",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
