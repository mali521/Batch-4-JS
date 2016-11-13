var array = [];

function addTodo() {
    var GetInputValue = document.getElementById("input").value;
    console.log(GetInputValue);
    // if (GetInputValue == " " || GetInputValue == "") { // if you want to check all space add a loop
    //     alert("Kuch likho beta shabash!")
    // }
    // else {
        array.push(GetInputValue);
    // }
    if (array.length >= 1) {
        document.getElementById("heading").innerHTML = "Todo you entered are";
    }
    var todoList = document.getElementById("todo_list");
    var links = "";
    for (var i = 0; i < array.length; i++) {
        links += "<li>" + array[i] + "</li>";
        todoList.innerHTML = links;
    }
    links = "";
    document.getElementById("input").value = ""

}

function removed() {
    document.getElementById("todo_list").innerHTML = "";
    array = []
}