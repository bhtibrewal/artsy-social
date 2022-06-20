import axios from "axios";

const axiosConfig = axios.create({
    baseURL: window.location.protocol === "http:"
    ? "http://localhost:4000" : "https://artsytalk-api.herokuapp.com", 
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});

export default axiosConfig;