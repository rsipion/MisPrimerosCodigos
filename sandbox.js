


/* Escribe un bucle que realice siete llamadas a console.log para mostrar el siguiente triángulo:

#
##
###
####
#####
######
####### */
/* let stringa='';
for (let i =0; i<7;i++){
    
    stringa += '#';
    console.log(stringa)
}
 */

/* Escribe un programa que use console.log para imprimir todos los números del 1 al 100, con dos excepciones. 
Para los números divisibles por 3, imprime "Fizz" en lugar del número, y para los números divisibles por 5 (y no por 3), imprime "Buzz" en su lugar. */
/* 


/* for (let i =1; i<100;i++){  

    divisibilex3 = i%3;
    divisibilex5 = i%5;
    if (!divisibilex3 & !divisibilex5){
        console.log('fizzbuzzz');
    }else{
        if (!divisibilex3){
        console.log('fizz');
        } else{
            if (!divisibilex5){
                console.log('buzz');
            } else{
                console.log(numero=+i);
            }
        }       
    }
} */


/* Tablero de ajedrez
Escribe un programa que cree una cadena que represente un tablero de 8x8, 
usando caracteres de salto de línea para separar las líneas. En cada posición 
del tablero hay un carácter de espacio o un carácter "#". Los caracteres deben formar un tablero de ajedrez. */

/* function creaAjedrez(size){
    for (let j=0;size>j;j++){
        let tablero = '';
        for (let i=0;size>i;i++){
            tablero +='# ' ;
            if(size-i==1)
            console.log(tablero);
        }
    }
    
}

console.log(creaAjedrez(4));
 */



/* let elNumero = Number(prompt("Elige un número"));
if (!Number.isNaN(elNumero)) {
  console.log("Tu número es la raíz cuadrada de " +
              elNumero * elNumero);
}
 */




/* switch (prompt("¿Cómo está el clima?")) {
    case "lluvioso":
      console.log("Recuerda llevar un paraguas.");
      break;
    case "soleado":
      console.log("Vístete ligero.");
    case "nublado":
      console.log("Sal al exterior.");
      break;
    default:
      console.log("¡Tipo de clima desconocido!");
      break;
  }
 */
/* 

let numeri = [1, 2, 3, 4, 5];

if (numeri.every(variabile => typeof variabile === 'number')) {
  console.log('Sono tutti numeri');
} else {
  console.log('Non sono tutti numeri');
} */

/* let result = 1;
let counter = 0;
while (counter < 10) {
  result = result * 2;
  counter = counter + 1;
}
console.log(result, counter);
 */









//Crea una funzione sommaArray che prende un array di numeri e restituisce la somma di tutti gli elementi.

/* let numeri = [ 1, 2, 3, 4, 5];

function somma (){
    let total = 0;
    for (let i = 0; numeri.length > i; i++){
        
        total = total + numeri[i];
    }
    return total;
}

console.log(somma(numeri)); */





//Esercizio 2: Trovare il massimo in un array Crea una funzione trovaMassimo che prende un array di numeri e restituisce il valore massimo.

/* 
let numeri = [ 1, 2, 3, 4, 5];

function trovaMassimo(){
    let variabileOggetto = 0;
    let massimoNumero = 0;
    for(let i = 0; numeri.length>i;i++){
        variabileOggetto = numeri[i];
        for(let c=0; numeri.length>c;c++){
            if (numeri[c]>variabileOggetto){
                massimoNumero = numeri[c];
            }
        }
    }
 console.log(massimoNumero);
}


trovaMassimo(); */




















//Array para los nombres
/* let nombresPkm = ['Charmander', 'Pikachu', 'Bulbasaur', 'Squirtle'];

//Array habilidades
let habilidades = [
    [80,70,90], //Charmander
    [40,55,95], //Pikachu
    [80,70,65], //Bulbsaur
    [85,90,70], //Squirtle
];
 */

//Funcion que calcula el promedio

/* function calcPromedios(habilidades){
    let promedios = [];
    for(let i=0;habilidades.length>i;i++){
        let fila = habilidades[i];
        let suma = fila.reduce((total,habilidad)=>total+habilidad,0);
        promedios[i] = suma/fila.length;
    }
    return promedios;
   
} */

//Function che evalua la aptitud

/* function evaluaAptitud (nombresPkm, promedios){

    for (let i=0; i<promedios.length;i++){
        if (promedios[i]>=70){
            console.log('El pokemon' + nombresPkm[i] 
            + 'supero el promedio con:' + promedios [i]);
        } else {
            console.log('el pokemon ' + nombresPkm[i] + ' no superò la prueba');
        }
    }
}

let promedios = calcPromedios(habilidades);
evaluaAptitud(nombresPkm, promedios);
 */















/* //CONTROL FLOW - CICLI FOR E WHILE

const names = ['rey', 'kelly', 'bran'];

for (let i =0; i< names.length; i++){


 let html = `<div>${names[i]}</div>`;   
 console.log(html); 
}

while (let i =0; i< names.length; i++){


    let html = `<div>${names[i]}</div>`;   
    console.log(html); 
   }
 */
/* 
for(let i = 0; i <5;i++){
    console.log(i);
}

console.log('Controllo finito'); */


//Capire e covertire il type di una variabile
/* let result = Boolean(0);
console.log(result, typeof(result));
 */


//Come convertire il type di una variabile
/* let stringa = '100';

stringa = stringa + 1;
console.log(stringa); 

stringa = Number(stringa);
console.log(stringa+1); */



//let name = 'Rey';
//let lastname= 'Sipion';
//let fullname = name +lastname;
//console.log(fullname);
//console.log(fullname.length);
//console.log(fullname.toUpperCase());

//let result = fullname.lastIndexOf('i');
//console.log(result);

//let result = fullname.slice(0,4);
//console.log(result);
//let email = 'rsipion.4c.et@gmail.com';
//result = email.substring(0,7);
//result = email.replace('r','R');


/**let radius = 10;
let pi=3;
result = radius*pi;
console.log(result);
result++;//Aggiungere al risultat 1 o aggiungere 1 a un contatore
console.log(result);**/

//template strings
/* const title = 'best reads of 2024';
const author = 'Rey';
const likes = 30; */

///let result = 'the blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';
/**let result= `The blog called ${title} by ${author} has ${likes} likes`;

let html = `
    <h2>${title}</h2>
    <p>By ${author}</p>
    <span>this blog has ${likes}</span>
    `;**/

//let ninjas = ['shaun', 'ryu', 'chin-yu'];

//ninjas[0] = 'Rey';//sovrascrivere un elemento di un array
//let result = ninjas.concat(['ken','crystal']);
//let result = ninjas.push('kappa');
//let myage = null;
//result = myage + 3;

/* let result = lastname.includes('i');
console.log(result); */

/* 
let age = 27;
console.log(age==27);

console.log(age==28); */