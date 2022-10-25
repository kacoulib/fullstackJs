
/*

Si p1 vaut true JS ne vérifie pas p2

p1 || p2
true || false  
false || true  <-- JS va vérifier si p2 est vraie pour évaluer la condition
true || true


----- 
p1 && p2
true && true

false && n'importe quoi <-- JS ne vérifie pas p2

*/

// a n'est pas définie les code suivants ne léveront pas d'erreur

false && a ;
true || a;

// les codes suivants léveront une erreur
// true && a;
// false || a ;