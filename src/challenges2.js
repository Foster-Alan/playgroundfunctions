// Desafio 11
function generatePhoneNumber(arrayNumbers) {
  if (arrayNumbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let i of arrayNumbers) {
    if (i < 0) {
      return 'não é possível gerar um número de telefone com esses valores';
}
}
  for (let i of arrayNumbers) {
    if (i > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  for (let i = 0; i < arrayNumbers.length; i += 1) {
    let count = 0;
    for (let r = i; r < arrayNumbers.length; r += 1) {
      if (arrayNumbers[i] === arrayNumbers[r]) {
        count++;
      }
    }
    if (count >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  arrayNumbers.splice(0, 0, '(');
  arrayNumbers.splice(3, 0, ')');
  arrayNumbers.splice(4, 0, ' ');
  arrayNumbers.splice(10, 0, '-');
  return arrayNumbers.join('');
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (
  (lineA + lineB < lineC && lineC > Math.abs(lineA - lineB)) ||
  (lineB + lineC < lineA && lineA > Math.abs(lineB - lineC)) ||
  (lineC + lineA < lineB && lineB > Math.abs(lineC - lineA))
) {
  return false;
} 
  return true;
}

// Desafio 13
function hydrate(param) {
  let numbers = param.match(/\d/g);
  let conver = numbers.map(Number);
  let sum = 0;
  for (let i = 0; i < conver.length; i += 1) {
    sum += conver[i];
  }
  if (sum > 1) {
    return `${sum} copos de água`;
  }
  return `${sum} copo de água`;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
