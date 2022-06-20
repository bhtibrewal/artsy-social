import axios from "../../axios";

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
        const res = await axios.post("/api/auth/login", JSON.stringify(data));
        if (res.status === 200) {
            console.log(res)
            const {
                data: {
                    user,
                    token
                }
            } = res;
            userDataDispatch({
                type: "LOGIN_USER",
                payload: user
            })
            setIsUserLoggedIn(true);
            axios.defaults.headers.common["authorization"] = token;
            showToast({ title: 'logged in successfully', type: 'success' });
            if (keepMeLoggedIn) {
                localStorage.setItem("token", token);
                localStorage.setItem('user', JSON.stringify({
                    ...user
                }))
            }
            navigateBack();
        }
    } catch (e) {
        setSigninError(e.response.data.errors);
    }
}