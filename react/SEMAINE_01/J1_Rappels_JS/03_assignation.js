// assignation
let a, b, rest;
[a, b] = [10, 11];

console.log(a, b);

// permuter deux valeurs
[a, b] = [b, a];

console.log(a, b);

// ...rest permet d'assigner le reste du tableau dans un tableau rest ici
[a, b,...rest] = [9, 100, 120, 189, 17, 18];
console.log(rest);

// assignation pour un littéral

const student = { mention : "AB", note : 12 };

// assignation par clé sur un littéral
const { mention, note } = student;
console.log(mention, note);

// Pour les constantes on ne peut pas les redéfinir
// const { mention, note  } = student;


const { mention: Mention, note : Note } = student;
console.log(Mention, Note);

// on peut également assigner de manière imbriquée des constantes 

const st = { username : "Alan" , family : { mother : "Alice"} };

const { username , family: { mother }} = st;

console.log(username,  mother);

/*
const infoStudent = (props) => `${props.mention} ${props.note}` ;

console.log(infoStudent(student));

*/

// Une autre version du code précédent

const infoStudent = ({mention ,note}) => `${mention} ${note}` ;

console.log(infoStudent(student));