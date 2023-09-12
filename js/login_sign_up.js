import { loginUser, signUpUser } from "./server/account_module.js";

var loginButton = document.getElementById("loginButton");

loginButton.onclick = () => {
    var loginUsername = document.getElementById("loginUsername");
    var loginPassword = document.getElementById("loginPassword");

    var result = loginUser(loginUsername.value, loginPassword.value);
};

var signUpButton = document.getElementById("signUpButton");

signUpButton.onclick = () => {
    var signUpUsername = document.getElementById("signUpUsername");
    var signUpPassword = document.getElementById("signUpPassword");
    var signUpEmail = document.getElementById("signUpEmail");
    var signUpPhoneNumber = document.getElementById("signUpPhoneNumber");
    var signUpAddress = document.getElementById("signUpAddress");

    signUpUser(signUpUsername.value, signUpPassword.value, signUpEmail.value,
        signUpPhoneNumber.value, signUpAddress.value);
};
