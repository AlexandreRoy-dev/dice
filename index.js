function diceRoll(){
    var diceRoll1 = Math.floor((Math.random()*6+1));
    var diceRoll2 = Math.floor((Math.random()*6+1));
    document.getElementById("d1").setAttribute("src", "./images/dice"+diceRoll1+".png");
    document.getElementById("d2").setAttribute("src", "./images/dice"+diceRoll2+".png");

    if (diceRoll1 > diceRoll2) {
        document.getElementById("Result").innerHTML="Le joueur 1 gagne !"
    } else if (diceRoll2 > diceRoll1) {
        document.getElementById("Result").innerHTML="Le joueur 2 gagne !"
    } else { 
        document.getElementById("Result").innerHTML="Égalité !"
    }
    }