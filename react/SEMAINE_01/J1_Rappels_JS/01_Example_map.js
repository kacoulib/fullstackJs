

const numbers = [1, 2, 3, 4 ];

/**
 * la fonction map en JS parcours l'ensemble des valeurs d'un tableau JS et permet d'appliquer un traitement sur ces valeurs.
 * Pensez à retourner les valeurs pour ne pas obtenir un tableau vide 
 */
// const powerNumbers = numbers.map((nun, i) => { return nun**2} );
const powerNumbers = numbers.map((nun, i) => nun**2 );

console.log(powerNumbers);