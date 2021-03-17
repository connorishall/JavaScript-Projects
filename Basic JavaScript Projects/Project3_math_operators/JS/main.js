function mathFunction() { 
    var addition = 2 + 2 ;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition ; // Math funtion using addition
}

function subtractionFunction() {
    var subtraction = 12 - 4 ;
    document.getElementById("subtraction").innerHTML = "12 - 4 = " + subtraction ; // Math funtion using subtraction
}

function multiplicationFunction() {
    var simple_Math = 18 * 8 ;
    document.getElementById("multiplication").innerHTML = "18 * 8 = " + simple_Math ; // Math funtion using multiplication
}

function divisionFunction() {
    var simple_Math = 20 / 5 ;
    document.getElementById("division").innerHTML = "20 / 5 = " + simple_Math ; // Math funtion using division
}

function operationsFunction() {
    var simple_Math = (20 + 4) * 13 / 4 -5 ;
    document.getElementById("multiple.operations").innerHTML = "20 plus 4, multiplied by 13, divided by 4 and then subtracted by 5 equals " + simple_Math ; // Math funtion using multiple operations
}

function modulus_operatorFunction() {
    var simple_Math = 26 % 5 ;
    document.getElementById("modulusoperator").innerHTML = "The remainder is: " + simple_Math ; // Math funtion to find the remainder
}

function negation_operatorFunction() {
    var X = 10 ;
    document.getElementById("negationoperator").innerHTML = -X ; // Math function finding X
}

{
var X = 5 ;
X++ ;
document.write(X); // Increment operator
}

{
var Y = 5.25 ;
Y-- ;
document.write(Y) ; //Decrement operator
}

window.alert(Math.random() * 100) ; //Random number generator



