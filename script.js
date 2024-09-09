let addition = document.getElementById("plus");
let soustraction = document.getElementById("moins");
let multiplication = document.getElementById("fois");
let division = document.getElementById("divise");
let a = document.getElementById("first");
let b = document.getElementById("second");
let resultat = document.getElementById("result")
let valeur = document.getElementById("egal");

addition.addEventListener("click", function(e){
    if ( a.value === "" && b.value === "" ) {
        alert("Veuillez remplir les deux champs");
        e.preventDefault;
    }else {
        document.body.style.backgroundColor = "green" ;

        valeur.addEventListener("click", function(){
            let Z = ( parseInt(a.value) + parseInt(b.value) );
            resultat.textContent = Z;

        })

    }
});

soustraction.addEventListener("click", function(){
    if ( a.value === "" && b.value === "" ) {
        alert("Veuillez remplir les deux champs");
        e.preventDefault;
    }else {
        document.body.style.backgroundColor = "yellow" ;
        
        valeur.addEventListener("click", function(){
            let Z = ( parseInt(a.value) - parseInt(b.value) );
            resultat.textContent = Z;

        })
        
    }
   
});

multiplication.addEventListener("click", function(){
    if ( a.value === "" && b.value === "" ) {
        alert("Veuillez remplir les deux champs");
        e.preventDefault;
    }else {
        document.body.style.backgroundColor = "red" ;
    
        valeur.addEventListener("click", function(){
            let Z = ( parseInt(a.value) * parseInt(b.value) );
            resultat.textContent = Z;

        })
    
    }
   
});

divise.addEventListener("click", function(){
    if ( a.value === "" && b.value === "" ) {
        alert("Veuillez remplir les deux champs");
        e.preventDefault;
    }else {
        document.body.style.backgroundColor = "blue" ;

        valeur.addEventListener("click", function(){
            let Z = ( parseInt(a.value) / parseInt(b.value) );
            resultat.textContent = Z;

        })
        
    }
    
   
});
