var str = prompt("Enter some text");
var numChars = str.length;
for (var i = 0; i < numChars; i++) {
	if (str.slice(i, i + 2) === " ") {
		alert("no double spaces!");
		   } 
		    }