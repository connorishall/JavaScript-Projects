function count_To_ten() {
    var Digit = "" ;
    var X = 1 ;
    while (X < 11) {
        Digit += "<br>" + X ;
        X++
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit ;
}

//For Loop
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"] ;
var Content = "" ;
var Y ;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content ;
}

//ARRAYS AND OBJECTS  
function cat_pics() {
    var Cat_Picture;
    Cat_Picture[0] = "sleeping" ;
    Cat_Picture[1] = "playing" ;
    Cat_Picture[2] = "eating" ;
    Cat_Picture[3] = "purring" ;
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " +
        Cat_Picture[2] + "." ;
}

//CONSTANT FUNCTION
function constant_function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue" ;
    Musical_Instrument.price = "$900" ;
    document.getElementById("Constant").innerHTML = "The cost of the " +
        Musical_Instrument.type + " was " + Musical_Instrument.price ;
}

//LET KEYWORD
var X = 82 ;
document.write(X) ;
{
    let X = 33 ;
    document.write("<br>" + X) ;
}
document.write("<br>" + X) ;

//RETURN STATEMENT0
function myFunction() {
    return Math.PI;
}

//OBJECT WITH PROPERTIES
let car = {
    make: "Dodge ",
    model: "Viper",
    year: "2021",
    color: "red",
    description : function() {
        return "The car is a " + this.year + this.color + this.make + this.model ;
    }
} ;
document.getElementById("Car_Object").innerHTML = car.description() ;  

//BREAK STATEMENT
var text = "";
var i;
for (i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text += "The number is " + i + "<br>";
}
document.getElementById("break").innerHTML = text;

//CONTINUE STATEMENT
var text = "";
var i;
for (i = 0; i < 10; i++) {
  if (i === 3) { continue; }
  text += "The number is " + i + "<br>";
}
document.getElementById("continue").innerHTML = text;