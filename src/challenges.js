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
  let resultado = param1[param1.length - 1] + ', ' + param1[0];
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
function highestCount(param1) {
  let maiorNumero = Math.max(...param1);
  let numerosDeVezes = 0;
  for (i = 0; i < param1.length; i += 1) {
    if (param1[i] === maiorNumero) {
      numerosDeVezes += 1;
    }
  }
  return numerosDeVezes;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let rato = mouse;
  let gato1 = cat1;
  let gato2 = cat2;
  if (Math.abs(rato - gato1) < Math.abs(rato - gato2)) {
    return 'cat1';
  } else if (Math.abs(rato - gato1) === Math.abs(rato - gato2)) {
    return 'os gatos trombam e o rato foge';
  } else {
    return 'cat2';
  }
}

// Desafio 8
function fizzBuzz(param1) {
  let resultado = [];
  for (let i = 0; i < param1.length; i += 1) {
    if (param1[i] % 3 === 0 && param1[i] % 5 === 0) {
      resultado.push('fizzBuzz');
    } else if (param1[i] % 3 === 0) {
      resultado.push('fizz');
    } else if (param1[i] % 5 === 0) {
      resultado.push('buzz');
    } else if (param1[i] % 3 !== 0 && param1[i] % 5 !== 0) {
      resultado.push('bug!');
    }
  }
  return resultado;
}
console.log(fizzBuzz([15, 3, 5, 1, 10, 50]));

// Desafio 9
function encode(param1) {
  let subA = param1.replace(/a/g, '1');
  let subE = subA.replace(/e/g, '2');
  let subI = subE.replace(/i/g, '3');
  let subO = subI.replace(/o/g, '4');
  let subU = subO.replace(/u/g, '5');

  return subU;
}
function decode(param2) {
  let sub1 = param2.replace(/1/g, 'a');
  let sub2 = sub1.replace(/2/g, 'e');
  let sub3 = sub2.replace(/3/g, 'i');
  let sub4 = sub3.replace(/4/g, 'o');
  let sub5 = sub4.replace(/5/g, 'u');

  return sub5;
}

console.log(encode('hello'));
console.log(decode('h2ll4'));

// Desafio 10
function techList(param1, param2) {
  let resultado = [];
  let vazio = 'Vazio!';
  param1 = param1.sort();
  if (param1.length !== 0) {
  for (i = 0; i < param1.length; i += 1) {
  let tecnologiaENome = {
    tech: param1[i],
    name: param2,
  }
  resultado.push(tecnologiaENome);
  }
  return resultado;
}
else {
  return vazio;
} 
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
