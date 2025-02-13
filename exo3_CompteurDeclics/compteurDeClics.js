let count =0;
const compterPlus = document.getElementById("counter");
const titre = document.getElementById ("Cliquez ici")
function toto(){
    count++;
    
    
    compterPlus.textContent = count + " Clicks";
}

compterPlus.addEventListener ("click", toto);










