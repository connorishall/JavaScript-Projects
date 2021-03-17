function my_Dictionary() { //Function Name
    var Animal = {
        species:"Dog",
        Color:"Black",
        Breed:"Labrador", // Dictionary Function options
        Age:5,
        Sound:"Bark!"
    } ;
    delete Animal.Sound ;//Deleting the selected option within the dictionary
    document.getElementById("Dictionary").innerHTML = Animal.Sound ; // Get element by id and the selected option within the dictionary
}