function Animal_Function() {
    var Animal_Output ;
    var Animals = document.getElementById("Animal_Input").value ;
    var Animal_String = " is a great animal!" ;
    switch(Animals) {
        case "Dog":
          Animal_Output = "Dog" + Animal_String ;
        break ;
        case "Cat":
            Animal_Output = "Cat" + Animal_String ;
        break ;
        case "Bird":
            Animal_Output = "Bird" + Animal_String ;
        break ;
        case "Snake":
            Animal_Output = "Snake" + Animal_String ;
        break ;
        case "Lizard":
            Animal_Output = "Lizard" + Animal_String ;
        break ;
        case "Fish":
            Animal_Output = "Fish" + Animal_String ;
        break ;
        default:
            Animal_Output = "Please enter a animal exactly as written on the list above.";
    }
    document.getElementById("Output").innerHTML = Animal_Output ;
}

//GETELEMENTSBYCLASSNAME()
function Hello_World_Function() {
    var A = document.getElementsByClassName("Click") ;
    A[0].innerHTML = "This text has changed!" ;
}

//CANVAS 
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var my_gradient = ctx.createLinearGradient(0, 0, 0, 170);
my_gradient.addColorStop(0, "black");
my_gradient.addColorStop(1, "white");
ctx.fillStyle = my_gradient;
ctx.fillRect(20, 20, 150, 100);