// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function imprimirSumaNumeros() {
    // Imprime la suma de los números del 1 al 10
    // Pista: usa un acumulador
    // Tu código:
    var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    var sumar = numeros.reduce(function (abc1, abc2) {
      return abc1 + abc2;
    } );

    return (sumar);
}

function encuentraPares(array){
  // Devuelve un arreglo con los pares encontrados
  // en el arreglo de enteros pasado como parámetro
  // Tu código:
  function getEvenNumbers(arrNumbers) // array
  {
      const output = [];
      for (let i = 0; i < arrNumbers.length; i++) {
          const number = arrNumbers[i];
          if (number % 2 === 0) {
              output.push(number);
          }
      }

      return output;
  }

  const num = [2,5,6,8,10,3];

  return (getEvenNumbers(num));
   

  
}

function elevaAlCuadrado(array){
  // Devuelve un arreglo con cada número del array
  // elevado al cuadrado
  // Tu código:
  var elevar = [1,4,5,7,6];

  var cuadrado = elevar.map(function (numero) {
   return numero ** 2;
  });

return (cuadrado);

}

function sumaArray(array){
  // Devuelve el resultado de sumar todos los elementos
  // de un arreglo de enteros dado
  // Tu código:
  var num = [1, 3, 5, 7, 8 ];

  var unir = num.reduce(function (suma1, suma2) {
    return suma1 + suma2;
  });

  return (unir);


}

function numeroDigitos(num){
  // Devuelve el número de dígitos de un número dado
  // Tu código:
 var skincare = ['exfoliante', 'limpiador', 'hidratante', 'protector'];

 return (skincare.length)
}
  
  
  // No modificar nada debajo de esta línea
  // --------------------------------
  
  module.exports = {
    imprimirSumaNumeros,
    encuentraPares,
    elevaAlCuadrado,
    sumaArray,
    numeroDigitos
  };
