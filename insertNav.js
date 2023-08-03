/** insertNav.js
  
Author:         Jack
Date:           2023-06-30
Last rev:       2023-06-30
Description:    Adds a navbar to the page when it loads
*/

let nav = document.createElement("nav"),
    navContent = "";

navContent += "<a href='index.html'>Home</a>";
navContent += "<a href='#'>Page 1</a>";
navContent += "<a href='#'>Page 2</a>";
navContent += "<a href='#'>Page 3</a>";
navContent += "<a href='#'>Page 4</a>";

nav.innerHTML = navContent;
document.body.appendChild(nav);