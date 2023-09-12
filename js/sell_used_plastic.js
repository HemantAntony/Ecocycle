import { getCurrentUserAddress } from "./server/account_module.js";
import { addPlasticSeller } from "./server/sell_plastic_module.js"

if (localStorage.getItem('currentUsername').length == 0) {
    window.open("login_sign_up.html", "_self");
}

getCurrentUserAddress((address) => {
    document.getElementById("sellerAddress").value = address;
});

document.getElementById("submitForm").onclick = () => {
    var address = document.getElementById("sellerAddress").value;
    var wasteWeight = document.getElementById("sellerWasteWeight").value;
    
    addPlasticSeller(address, wasteWeight);
}
