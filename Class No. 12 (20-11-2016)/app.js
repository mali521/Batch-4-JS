// function popup(message){
//     alert(message);
// }


//  function checkAddress(fieldId) {
//        if (document.getElementById(fieldId).value === "") {
//               alert("Email address required.");
//              } 
//             }

 function fillCity() {
       var cityName;
var zipEntered = document.getElementById("zip").value;
  switch (zipEntered) {   
      case "60608" :   
       cityName = "Chicago";     break; 
          case "68114" :      cityName = "Omaha"; 
              break;
                 case "53212" :
                     cityName = "Milwaukee"; 
                      } 
    document.getElementById("city").value = cityName;
 }