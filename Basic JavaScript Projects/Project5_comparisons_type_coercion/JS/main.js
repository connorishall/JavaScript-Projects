document.write(typeof "word");
document.write("10" + 5) ;

function firstFunction() {
document.getElementById("test").innerHTML = isNaN('this is a string');
}
function twoFunction() {
document.getElementById("test2").innerHTML = isNaN('24');
}

document.write(2E310) ;
// infinity
document.write(-3E310) ;

document.write(12 > 5) ; //boolean true

document.write(12 < 5) ; //boolean false

console.log(2 + 2) ; //console log

console.log(20 < 3) ; // console boolean

document.write(10 == 10) ; //double equal sign true

document.write(2 == 10) ; // double equal sign false

X = 10 ;
Y = 10 ;
document.write(X === Y) ;// Trip;e equal return true

C = 12 ;
D = 13 ;
document.write(C === D) ; // Triple equal return false

document.write(5 > 2 && 10 > 4) ; // and operator returns true

document.write(2 > 10 && 10 > 4) ; // and operator returns false

function not_Function() {
    document.getElementById("not").innerHTML = !(20 > 10) ; //Not operator returns false
}

function not_the_Function() {
    document.getElementById("not2").innerHTML = !(20 < 10) ; //Not operator returns true
}