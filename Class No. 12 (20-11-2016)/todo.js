var array = [];

function addTodo() {
    var GetInputValue = document.getElementById("input").value;
    if (GetInputValue == " " || GetInputValue == "") { // if you want to check all space add a loop
        alert("Please write some thing");
    }
    else {
        array.push(GetInputValue);
    }
    if (array.length >= 1) {
        document.getElementById("heading").innerHTML = "Todo you entered are";
    }
    var todoList = document.getElementById("todo_list");
    var data = "";
    for (var i = 0; i < array.length; i++) {
        data += "<li>" + array[i] + document.getElementById("btn")+"</li>";
        todoList.innerHTML = data;
       
    }
    data = "";
    document.getElementById("input").value = ""

}

function removedall() {
  document.getElementById("todo_list").innerHTML = "";
    array = []
}
 function remove(b) {
     var a = document.getElementById("todo_list");
     a.removeChild(b);
 }
