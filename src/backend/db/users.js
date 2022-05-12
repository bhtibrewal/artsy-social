import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Bhavika",
    lastName: "Tibrewal",
    username: "bhtibrewal",
    email: 'bhtibrewal@gmail.com',
    password: "bhtib@1111",
    profile_pic: "https://avatars.githubusercontent.com/u/42600164?v=4",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Guest",
    lastName: "User",
    username: "guest_user",
    email: "guest@gmail.com",
    password: "guest@123",
    profile_pic: "https://media.istockphoto.com/vectors/man-artist-painting-autumn-tree-landscape-in-the-park-isolated-vector-vector-id1058684612?k=20&m=1058684612&s=612x612&w=0&h=edHBtI190lKLq_a0YbCWSliJ_FyHsPcysvOZ6fK_Ap0=",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: 'shubham',
    lastName: 'soni',
    username: "shubham_soni",
    email: "Shubhamsoni@gmail.com",
    password: "Shubham@123",
    profile_pic: "https://en.pimg.jp/066/175/574/1/66175574.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
