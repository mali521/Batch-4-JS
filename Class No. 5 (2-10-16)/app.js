//console.log(1);
//console.log(2);
//console.log(3);
//console.log(4);
//console.log(5);


// Kinds of Loops:
// 1, for loop
// 2, foreach
// 3, while loop
// 4, dowhile loop


// FOR LOOP :

//for(var i = 0; i < 10; i++ ){
	//console.log(i);
//}


// var i;
// for(i = 0 ; i <= 50 ; i = i + 1){
// 	console.log(i);	
// }


// var i;
// for(i = 0 ; i <= 50 ; i = i + 5){
// 	console.log(i);	
// }


// var cities = ["Karachi", "Hyderabad", "Lahore" , "Quetta" ];
// for (var moiz = 0; moiz <= cities.length - 1 ; moiz++){
// 	console.log("Best city of Pakistan " + cities[moiz]);
// }


// var cityToCheck = prompt("Enter your city");
// var cleanestCities = ["Karachi", "Hyderabad", "Lahore" , "Quetta" ];
//  for (var i = 0; i <= 4; i++) { 
// 	    if (cityToCheck === cleanestCities[i]) { 
// 	alert("It's one of the cleanest cities"); 
// 	 }  
// 	 } 
	 
	 
// var cityToCheck = prompt("Enter your city");
// var cleanestCities = ["Karachi", "Hyderabad", "Lahore" , "Quetta" ];
//  var matchFound = false; 
// for (var i = 0; i < 4; i++) { 
// if (cityToCheck === cleanestCities[i]) { 
// 	 matchFound = true;
// alert("It's one of the cleanest cities"); 
// } 
// } 
//  if (matchFound === false) {
//  alert("It's not on the list");
//   } 


var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];  
var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"]; 
var fullNames = []; 
for (var i = 0; i < firstNames.length; i++) {   
for (var j = 0; j < lastNames.length; j++) {
fullNames.push(firstNames[i] + lastNames[j]);
}  
}
console.log(fullNames);