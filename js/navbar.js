fetch('navbar.html')
.then(res => res.text())
.then(text => {
    var template = document.createElement('template');
    template.innerHTML = text;
    document.getElementsByTagName("body")[0].prepend(template.content.firstChild);
})
