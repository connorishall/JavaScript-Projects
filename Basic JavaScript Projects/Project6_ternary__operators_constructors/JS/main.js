//Ternary operators
function Vote_Function() {
    var Age, Can_vote ;
    Age = document.getElementById("Age").value ;
    Can_vote = (Age < 18) ? "You are not old enough ":"You are old enough " ;
    document.getElementById("Vote").innerHTML = Can_vote + " to vote." ;
}

//Object oriented 
function Vehicle(Make, Model, Year, Color) { 
    this.Vehicle_Make = Make ;
    this.Vehicle_Model = Model ; 
    this.Vehicle_Year = Year ;
    this.Vehicle_Color = Color ;
}
var Jack = new Vehicle("Doge", "Viper", 2020, "Red") ;
var Emily = new Vehicle("Jeep", "Wrangler", 2020, "White") ;
var Erick = new Vehicle("Ford", "Pinto", 1971, "Mustard") ;
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erick drives a " + Erick.Vehicle_Color + "-colored " + Erick.Vehicle_Model +
    " manufactured in " + Erick.Vehicle_Year ;
}

//Object oriented
function Dog(name, breed, age, color) {
    this.dogName = name;
    this.dogBreed = breed;
    this.age = age;
    this.furColor = color;
  }
var arguments = new Dog("Buddy", "jack russell", 8, "white and brown");//Using reserved keywords
var abstract = new Dog("Thor", "german shepherd", 5, "brown and black");
function myFunction2() {
    document.getElementById("New_and_This").innerHTML =
    "Buddy is a " + arguments.dogBreed + " age " + arguments.age + " and has a " +
    arguments.furColor + " fur coat "
}

//Nested functions
function count_Function() {
    document.getElementById("Nested_Function").innerHTML = Count() ;
    function Count() {
        var Starting_point = 9 ;
        function Plus_one() {Starting_point += 1 ;}
        Plus_one() ;
        return Starting_point ;
    }
}