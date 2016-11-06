// // Fibonacci Series (0,1,1,2,3,5,8,13....)
// var input = +prompt("Enter limitation");
// var firstDigit = 0;
// var secondDigit = 1;
// var nextDigit;
// document.write(firstDigit + " " + secondDigit);
// for(var i = 2 ; i <= input ; i++){
//     nextDigit = firstDigit + secondDigit;
//     document.write(" " + nextDigit + " ");
//     firstDigit = secondDigit;
//     secondDigit = nextDigit;
// }


// function table(){
//     var a = +prompt("Enter Any Num");
//     for ( var i= 1; i<=20; i++){
//         document.write(a + " x " + i + " = " + a*i + " <br>");
//     }
// }
// table();


// function diamond(){
// var noOfRows = prompt("Enter The Number Of number")
// var row,colSpace,colStar
// document.write('<pre>')
// for(row=1;row<=noOfRows;row++){
// for(colSpace=noOfRows-row;colSpace>=1;colSpace--){
// document.write('&nbsp')
// }
// for(colStar=1;colStar<=(row*2)-1;colStar++){
// document.write('*')
// }
// document.write("<br/>")
// }
// for(row=noOfRows-1;row>=1;row--){

// for(colSpace=1;colSpace<=noOfRows-row;colSpace++){
// document.write('&nbsp')
// }

// for(colStar=1;colStar<=2*row-1;colStar++){
// document.write("*")
// }
// document.write("<br />")
// }

// }

// diamond();

// function add(a){
//     // var add1= a;
//     return a*2;
// }

// var value = add(2);
// alert(value);


//var num;
//num1();
//function num1(){
    num = 5;
    //console.log(num);
    // var num = 15;
    // var num2 = 17;
    //console.log("Inside variable value is:" + num);
//return num =5;
//}
//console.log("Outside variable value is:" +num);
//console.log("Outside function value is:" +num2);
//num1();
//console.log(num1());

//console.log(num);


//General Syntax of Switch
// switch(expression) {
//     case n:
//         code block
//         break;
//     case n:
//         code block
//         break;
//     default:
//         default code block
// }

switch (new Date().getDay()){
    case 0:
    alert("Sunday");
    break;
     case 1:
    alert("Mon");
    break;
     case 2:
    alert("Tues");
    break;
     case 3:
    alert("Wed");
    break;
     case 4:
    alert("Thurs");
    break;
     case 5:
    alert("Friday");
    break;
    default:
    alert("Sat")
}