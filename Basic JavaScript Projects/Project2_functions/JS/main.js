function Button_Function()  { //function name
    var str = "This text is blue" ; //string
    var result = str.fontcolor("blue") ; //Something that is done to the string
    document.getElementById("Blue_Text").innerHTML = result ;
}

function myFunction() { //function name
    var sentence = "I am learning"; //example of += operator
    sentence += " a lot from this book!";
    document.getElementById("Concatenate").innerHTML = sentence;
}
