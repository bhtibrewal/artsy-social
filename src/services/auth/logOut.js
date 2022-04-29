export const logOut = ({ setIsUserLoggedIn, userDataDispatch, showToast }) => {
    setIsUserLoggedIn(false);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    userDataDispatch({ type: "LOGOUT_USER" });
    showToast({ title: 'logged out', type: 'success' });
}