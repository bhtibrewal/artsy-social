import axios from "axios";
import { useReducer, useState } from "react";

export const useUserData = () => {
  const encodedToken = localStorage.getItem("token");
  const initialIsUserLoggedIn = encodedToken !== null ? true : false;
  if (encodedToken !== null)
    axios.defaults.headers.common["authorization"] = encodedToken;
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(initialIsUserLoggedIn);
  const localUserData = JSON.parse(localStorage.getItem("user"));
  const initialUserData = localUserData || {};

  const userDataReducer = (state, { type, payload }) => {
    switch (type) {
      case "LOGIN_USER":
        return {
          ...state,
          ...payload,
        };
      case "LOGOUT_USER":
        return {};
      case 'UPDATE_USER_DATA':
        return {...state, ...payload}

      default:
        return { ...state };
    }
  };

  const [userData, userDataDispatch] = useReducer(
    userDataReducer,
    initialUserData
  );
  return { isUserLoggedIn, setIsUserLoggedIn, userData, userDataDispatch };
};
