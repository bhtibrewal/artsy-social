import axios from "axios";

export const signIn = async ({
    setSigninError,
    data,
    userDataDispatch,
    setIsUserLoggedIn,
    showToast,
    keepMeLoggedIn,
    navigateBack
}) => {
    try {
        console.log(data)
        const res = await axios.post("/api/auth/login", data);
        if (res.status === 200) {
            const {
                data: {
                    foundUser,
                    encodedToken
                }
            } = res;
            userDataDispatch({
                type: "LOGIN_USER",
                payload: foundUser
            })
            setIsUserLoggedIn(true);
            axios.defaults.headers.common["authorization"] = encodedToken;
            showToast({ title: 'logged in successfully', type: 'success' });
            if (keepMeLoggedIn) {
                localStorage.setItem("token", encodedToken);
                localStorage.setItem('user', JSON.stringify({
                    ...foundUser
                }))
            }
            navigateBack();
        }
    } catch (e) {
        setSigninError(e.response.data.errors);
    }
}