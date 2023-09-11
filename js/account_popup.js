import { logoutUser, onUserChanged } from "./server/account_module.js";

var loginSignUp = document.getElementById("loginSignUpContainer");
var logout = document.getElementById("logoutContainer");

function updateUserPopup() {
    var currentLoggedInUser = localStorage.getItem('currentUsername');
    if (currentLoggedInUser && currentLoggedInUser.length > 0) {
        loginSignUp.style.display = 'none';
        logout.style.display = 'block';
    } else if (!currentLoggedInUser || currentLoggedInUser.length == 0) {
        loginSignUp.style.display = 'block';
        logout.style.display = 'none';
    }
}

updateUserPopup();
onUserChanged(updateUserPopup);

loginSignUp.onclick = () => {
    window.location.replace("../login_sign_up.html")
}

logout.onclick = () => {
    logoutUser();
}
