 var parentDiv = document.getElementById("div1");
 var newParagraph = document.createElement("p");
 var t = document.createTextNode("Hello world!");
 newParagraph.appendChild(t);
 parentDiv.appendChild(newParagraph);