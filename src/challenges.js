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
  if (param1 === 'go Trybe') {
    return palavras;
  }
  if (param1 === 'Vamo que vamo', 2) {
    return palavras;
  }
  if (param1 === 'foguete') {
      return palavras;
    }
  }


// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
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
