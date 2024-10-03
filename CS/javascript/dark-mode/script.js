function darkMode () {
    //Const-key: word in Java Script that forever assigns a variable that cannot change
    const body = document.body;
    //If the button is clicked is curently white, the screen, the screen should turn black and vice-versa
    if (body.style.backgroundColor === 'white'){
        //the screen should turn black
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
    }
    else {
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
    }
}
