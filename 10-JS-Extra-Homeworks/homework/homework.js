// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí  

  // let MyMap = new Map([["D", 1], ["B", 2], ["C", 3]]);
  // for (let entry of MyMap) {
  //  return entry;
  // }
//  let objeto = {
//    D: 1,
//    B: 2,
//    C: 3,
// };
//   function arreglo(obj) {
//   let result = [];
//  for (key of objeto.keys(obj)) {
//     result.push([key, value]);
//  }
//  return result;
//  }
// return [Object.keys(objeto), Object.values(objeto)];
 
var array = [];

for (var prop in objeto) {
 array.push([prop, objeto[prop]])
    
  }
return array;
}


  
   



function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var obj = {};           
  for (var i = 0; i < string.length; i++){
    var count = 0;
           //si no existe
    if (!obj[string[i]]) {
      for (var j = 0; j < string.length; j++){
      if (string[i] === string[j]) {
          count++
          }
      }
        obj[string[i]] = count;
    }
  }
 return obj;



 // var obj = {};
              
//  for (var i = 0; i < string.length; i++){
           //      a             a          = 0
//    if (!obj[string[i]]) obj[string[i]] = 0;
           //   2 : 2 + 1
//    obj[string[i]] = obj[string[i]] + 1;
//  }
// return obj
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var textMax = '';
  var textMin = '';
  for (var i = 0; i < s.length; i++) {
       //s = String === S
    if (s[i] === s[i].toUpperCase()) {
      textMax = textMax + s[i];
    }
    else {textMin = textMin + s[i];}
  }
  return textMax + textMin;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

  // var palabra = '';
  // var palabraInv = '';
  // var stringInv = '';
  // for (var i = 0; i <= str.length; i++){
  //   if (str[i] === ' ' || i === str.length) {
  //     palabraInv = '';

  //     for (var j = palabra.length - 1; j >= 0; j--) {
  //       palabraInv = palabraInv + palabra[j];
        
  //     }
  //    palabra = '';

  //    if (i === str.length){
  //      stringInv = stringInv + palabraInv;
  //    } else{
  //      stringInv = stringInv + palabraInv + ' ';
  //    }

  //   } else {
  //     palabra = palabra + str[i];
  //   }

  // }
  // return stringInv;



  var arrayStringInv = [];
  var arrayPalabras = str.split(' ');   // agarra letra por letra  y agarra las separadas como elemento ['The' ; 'Henrry'....]
   for (var i = 0; i < arrayPalabras.length; i++){

     var arrayLetras = arrayPalabras[i].split(''); //array por cada letra [´T'; 'h' ; 'e']
     var arrayLetrasInv = arrayLetras.reverse();
                                        //junta todos los elementes     
     arrayStringInv.push(arrayLetrasInv.join(''));
   }
  return arrayStringInv.join(' '); //agarra los elementos y le da un espacio

} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

// var string = '' + numero;
// var capicua = '';

// for (var i = string.length - 1; i >= 0; i--){
// capicua = capicua + string[i];

// }
// if (string === capicua) {
//   return 'Es capicua';
// }
// return 'No es capicua';


var string = numero.toString(); // numero hecho string '101'
var arrayNum = string.split(''); //agarra el string y lo que pone adentro lo transforma en un array y lo separa ['1', '0', '1']
var inv = arrayNum.reverse(); //toma el arreglo y lo da vuelta
                     //unir '101' une el array y lo hace string
if (string === inv.join('')) {
  return 'Es capicua';
}
return 'No es capicua';

}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  //  var str = '';
  //  for (var i = 0; i < cadena.length; i++){
  //    if (cadena[i] !== 'a' && cadena[i] !== 'b' && cadena[i] !== 'c') {
  //      str = str + cadena[i];
  //    }
  //  }
  //  return str;


var newStr = cadena;
newStr = newStr.replace('a', '');
newStr = newStr.replace ('b', ''); // toma dos argumentos el 1 es el que va a desaparecer y porque lo vas a reemplazar //funcion reemplazar
newStr = newStr.replace('c', '');

return newStr;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

// for (let i = 0; i < arr.length; i++){
// var temp = arr[i];
// var j = i - 1;

// while (j >= 0 && temp.length < arr[j].length){
//   arr[j + 1] = arr[j];
//   j--
// }
// arr[j + 1] = temp;
// }
// return arr;



// for (var i = 0; i < arr.length; i++){
//      for ( var j = i + 1; j < arr.length; j++){
//        if (arr[i].length > arr[j].length ){
//          var aux = arr[i]; //'You' guarda el valor
//          arr[i] = arr[j]; // y lo pisa 'are'
//          arr[j] = aux;// 'You'
//        }
//      }
// }
// return arr;


var orderArr = arr.sort(function(e, proxEl){
  return e.length - proxEl.length
})
return orderArr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  

  var array = [];
  for (var i = 0; i < arreglo1.length; i++) {
     for (var j = 0; j < arreglo2.length; j++){
       if (arreglo1[i] === arreglo2[j]){
         array.push(arreglo1[i]);
       }
     }
  }
return array;

}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

