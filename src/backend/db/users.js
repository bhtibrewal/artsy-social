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
    profile_pic: "https://avatars.githubusercontent.com/u/42600164?v=4",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
