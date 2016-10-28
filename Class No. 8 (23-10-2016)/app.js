var arr = [1,2,3,5,8,5,2,10,5]

var found = 0;
for(var i = 0; i < arr.length; i++){
	console.log("arr[i] == 5", arr[i], 5)
	if(arr[i] == 5){
		found++;
	}
}

console.log(found)



var arr = [1,2,3,5,8,5,2,10,5]

var found = false;
for(var i = 0; i < arr.length; i++){
	if(arr[i] == 5){
		found = true;
		break;
	}
}
console.log(found)



var  a = Date.now();
for(var i = 0; i < 100; i++){
	console.log(i);
}
console.log(Date.now() - a)





var arr = [1,2,3,5,8,5,2,10,5]

var found = false;
var found2=false;
for(var i = 0; i < arr.length; i++){
	if(arr[i] == 1){
		found = true;
	}
	if(arr[i] == 2){
	found2=true;
	}
	if(found==true && found2==true){
	console.log("true");
	break;
	}
}












var arr = [2,1,3,5,8,5,2,10,5]

var found = false;
for(var i = 0; i < arr.length; i++){
	if(arr[i] == 1){
		for(var j = 0; j < arr.length; j++){
			if(arr[j]==2){
				found=true;
				break;
			}
		}
		break;
	}


}

if(found==true ){
	console.log("true");
}








var arr = [2,1,3,5,8,5,2,10,5]

var found = false;
for(var i = 0; i < arr.length; i++){
	if(arr[i] == 1 || arr[i] == 2){
		found=true;
		break;
	}
}

if(found==true ){
	console.log("true");
}





var arr = [2,1,3,5,8,5,2,10,5]

var found = false;
for(var i = 0; i < arr.length; i++){
	if(arr[i] == 1 || arr[i] == 2){
		if(!found){
			if(found != arr[i]){
				console.log("TRUE");
				break;
			}
		} else {
			console.log("SET foun")
			found = arr[i];
		}
	}
}

var arr = [2,1,3,5,8,5,2,10,5]

var found = false;
for(var i = 0; i < arr.length; i++){
	if(arr[i] == 1 || arr[i] == 2){
		if(found && found != arr[i]){
			console.log("true");
			break;
		}
		found = arr[i];
	}
}












var arr = [2,1,3,5,8,5,2,10,5,2,1,3,5,8,5,2,10,5,2,1,3,5,8,5,2,10,5,2,1,3,5,8,5,2,10,5]

var found = false;
for(var i = 0; i < arr.length; i++){
	if(arr[i] == 1 || arr[i] == 2){
		if(found && found != arr[i]){
			console.log("true");
			break;
		}
		found = arr[i];
	}
}



var needToFound = [1,2, 200, 300, 5]
var arr = [2,1,3,5,8,5,2,10,5,2,1,3,5,8,5,2,10,5,2,1,3,5,8,5,2,10,5,2,1,3,5,8,5,2,10,5, 200, 300]

for(var i = 0; i < needToFound.length; i++){
	var index = arr.indexOf(needToFound[i]);
	if(index != -1){
		needToFound.splice(i,1);
		i--;
	}
}
if(!needToFound.length){
	console.log("Found All")
} else {
	console.log("Not Found these numbers : " + needToFound.join(",,"));
}


//Write a program to find multiple numbers 
//	a) With indexOf 
//	b) 