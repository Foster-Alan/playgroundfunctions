// Desafio 1
const girafa = true;
const elefante = false;
function compareTrue(num1, num2) {
  if (num1 === true && num2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let somaTriangulo = (base * height) / 2;
  return somaTriangulo;
}

// Desafio 3

function splitSentence(param1) {
  let palavras = param1.split(' ');
    return palavras;
}


// Desafio 4
function concatName(param1) {
  let resultado = param1[param1.length-1] + ', ' + param1[0];
  return resultado;
}



// Desafio 5
function footballPoints(wins, ties) {
  wins = wins * 3;
  ties = ties * 1;
  let resultado = wins + ties;
  return resultado;
  
}


// Desafio 6
function highestCount() {
  
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
