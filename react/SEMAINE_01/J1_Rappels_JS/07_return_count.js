
let count = 0;
function increment(){

    //return ++count; // incrémente avant retour de la fonction
    return count++; // incrémente après retour de la fonction
}

console.log( increment() ) ;

