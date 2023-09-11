fetch('navbar.html')
.then(res => res.text())
.then(text => {
    var template = document.createElement('template');
    template.innerHTML = text;
    document.getElementsByTagName("body")[0].prepend(template.content.firstChild);
    var accountButton = document.getElementById("accountButton");
    accountButton.onclick = () => {
        var accountPopup = document.getElementById("accountPopup");
        if (accountPopup.className.includes("Closed")) {
            accountPopup.className = accountPopup.className.replace('Closed', '');
        } else {
            accountPopup.className += "Closed";
        }
    };
})

var accountScript = document.createElement('script');
accountScript.setAttribute('src', "js/account_popup.js");
accountScript.setAttribute('type', "module");
document.head.appendChild(accountScript);
