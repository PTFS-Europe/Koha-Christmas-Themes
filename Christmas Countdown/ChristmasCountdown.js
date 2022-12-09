var myDate = new Date(); 
var xmas = Date.parse("Dec 25, "+myDate.getFullYear()); //Change date here
var today = Date.parse(myDate); 

var navBar = document.getElementById('cart-list-nav');
var container = document.createElement("div");
navBar.append(container);
container.classList.add("countdown-container");
var p = document.createElement("p");
p.setAttribute("id","days");
container.append(p);

var daysToChristmas = Math.round((xmas-today)/(1000*60*60*24));
var daysTextLine = document.getElementById('days');

// Change the text to any event here
if (daysToChristmas == 0) 
daysTextLine.innerHTML = "It's Christmas!! Merry Christmas!";

if (daysToChristmas < 0) 
daysTextLine.innerHTML = "Christmas was "+-1*(daysToChristmas)+" days ago.";

if (daysToChristmas > 0) 
daysTextLine.innerHTML = daysToChristmas+" days to Christmas!";
