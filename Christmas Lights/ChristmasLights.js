var body = document.body;

var div = document.createElement("div")
div.classList.add("lightcontainer");
var ul = document.createElement("ul");
ul.classList.add("lightrope");

for(var i = 1; i < 30; i++){
    ul.innerHTML += '<li></li>';
}

div.append(ul)
body.prepend(div);

