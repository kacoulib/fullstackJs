
// une constante en JS bloque la ré-assignation de la valeur avec une autre valeur
const a = 1;

const numbers = [1, 2, 3, 4];

// numbers =  [1, 2, 3, 4, 5, 6, 7]; // IMPOSSIBLE CAR CONSTANTE

numbers.push(5,6,7);

console.log(numbers);