import axios from "axios";
import { useReducer, useState } from "react";

export const useUserData = () => {
  const encodedToken = localStorage.getItem("token");
  const initialisUserLoggedIn = encodedToken !== null ? true : false;
  if (encodedToken !== null)
    axios.defaults.headers.common["authorization"] = encodedToken;
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(initialisUserLoggedIn);
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

      case "ATTEMPTED_QUIZZES_HANDLER":
        return { ...state, quizzesAttempted: payload };

      default:
        return { ...state };
    }
  };

  const [userData, userDataDispatch] = useReducer(
    userDataReducer,
    initialUserData
  );
  console.log(userData);
  return { isUserLoggedIn, setIsUserLoggedIn, userData, userDataDispatch };
};
