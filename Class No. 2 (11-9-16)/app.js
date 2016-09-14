var a = 1+1-3;
a = a + 5;
a = 5 + a;
alert(a);

// + - * / ++ -- %
// = += -= !=
// == < > <= >= === && ||

var b = 1;
alert(b++);

var c = 1;
alert(++c);

var d = 1;
alert(d--);

var e = 1;
alert(e--);

var b = 1;
alert(b++);

var e = 5;
e = 6;
alert(e);

var f = 5;
f = f++ + 5;
// 5 + 5 = 10 (result)
// 5 + 1 = 6 (result save in f after post increment)
// f = 10 

var f = 5;
f = ++f + 5;
// 5 + 1 = 6(result save in f)
// 6 + 5 = 11 (result)
// f = 11 

f = 5;
f = 6;
f = 10;

var g = "My name is:    ";
console.log(g + "Ali");