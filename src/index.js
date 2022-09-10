const intercala = (notas, init, middle, finish) => {
  const result = [];
  let current = 0;
  let current1 = init;
  let current2 = middle;

  while (current1 < middle && current2 < finish) {
    let student1 = notas[current1];
    let student2 = notas[current2];

    if (student1.nota < student2.nota) {
      result.push(student1);
      current1++;
    } else {
      result.push(student2);
      current2++;
    }
    current++;
  }

  while (current1 < middle) {
    result[current] = notas[current1];
    current1++;
    current++;
  }
  while (current2 < finish) {
    result[current] = notas[current2];
    current2++;
    current++;
  }

  for (let i = 0; i < current; i++) {
    notas[init + i] = result[i];
  }
  return notas;
};

const mergeSort = (notas, init, finish) => {
  let result;
  const elementsQuantity = finish - init;
  const middle = Math.round((init + finish) / 2);
  if (elementsQuantity > 1) {
    mergeSort(notas, init, middle);
    mergeSort(notas, middle, finish);
    result = intercala(notas, init, middle, finish);
  }
  return result;
};

// const notas = [
//   { nome: 'A', nota: 5 },
//   { nome: 'B', nota: 4 },
//   { nome: 'D', nota: 9 },
//   { nome: 'C', nota: 8.5 },
//   { nome: 'G', nota: 3 },
//   { nome: 'H', nota: 6.7 },
//   { nome: 'F', nota: 9.3 },
//   { nome: 'I', nota: 7 },
//   { nome: 'J', nota: 10 },
// ];
// const notasOrdenadas = handleOrder(notas, 0, notas.length);
// console.log(notasOrdenadas);

//  PROBLEMA DO TEMPO

// const time = '12:05:45AM';
// if (time.includes('PM')) {
//   const hour = Number(time.slice(0, 2)) + 12;
//   const newHour = `${hour}${time.slice(2, 8)}`;
//   console.log(newHour);
// } else {
//   const hour = Number(time.slice(0, 2)) - 12;
//   const newHour = `${hour}${time.slice(2, 8)}`;
//   console.log(newHour);
// }

const checkIsSubArray = (arrayValues, targetNumber) => {
  let count = 0;
  let positionCount = [];

  for (let i = 0; i < arrayValues.length; i++) {
    count = count + arrayValues[i];
    positionCount.push(i);
    if (count === targetNumber) {
      return {
        inicio: positionCount[0] + 1,
        fim: positionCount[positionCount.length - 1] + 1,
      };
    }
    if (count > targetNumber) {
      i = arrayValues.length - 3;
      count = 0;
      positionCount = [];
    }
  }
  return -1;
};

const slidingWindow = (arrayValues, targetNumber) => {
  let currentSum = 0;
  let start = 0;

  for (let end = 0; end < arrayValues.length; end++) {
    currentSum += arrayValues[end];
    while (currentSum > targetNumber && start < end) {
      currentSum -= arrayValues[start];
      start++;
    }
    if (currentSum === targetNumber) {
      return { inicio: start + 1, final: end + 1 };
    }
  }
  return -1;
};

let mel = (array, total) => {
  let currentFirstIndex = 0;
  let sum = 0;
  for (let index = 0; index < array.length; index++) {
    if (sum === total) {
      return [currentFirstIndex + 1, index + 1];
    }
    sum += array[index];
    if (sum > total) {
      sum -= array[currentFirstIndex];
      currentFirstIndex++;
    }
  }
  if (sum === total) {
    return [currentFirstIndex + 1, array.length];
  }
};

const numberDuplicated = (array) => {
  const numberIndex = [];
  const results = [];

  for (let i = 0; i < array.length - 1; i++) {
    numberIndex.push(i);
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        results.push({ index: j, number: array[j] });
        break;
      }
    }
  }

  if (!results[0]) return -1;

  let count = results[0].index;
  let result = results[0].number;
  for (let i = 0; i < results.length; i++) {
    if (results[i].index < count) {
      count = results[i].index;
      result = results[i].number;
    }
  }
  return result;
};

const numberDuplicatedAvelino = (array) => {
  const a = {};
  for (let i = 0; i < array.length; i++) {
    if (a[array[i]] !== undefined && a[array[i]] === 1) {
      console.log(a);
      return array[i];
    }
    a[array[i]] = 1;
  }
};

const productBigest = (array) => {
  let count = array[0] * array[1];
  for (let i = 0; i < array.length - 1; i++) {
    const a = array[i];
    const b = array[i + 1];
    if (count < a * b) {
      count = a * b;
    }
  }
  return count;
};

const shapeArea = (n) => {
  let size = 1;
  for (let i = 1; i < n; i++) {
    size = size + 4 * i;
  }
  return size;
};

const teste = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      for (let j = 0; j < i; j++) {
        if (array[j] !== 0) {
        }
      }
    }
  }
  [1, 10, 20, 0][(0, 1, 2)];
};

const celularAntigo = (array) => {
  const alf = {
    a: 2,
    b: 2,
    c: 2,
    d: 3,
    e: 3,
    f: 3,
    g: 4,
    h: 4,
    i: 4,
    j: 5,
    k: 5,
    l: 5,
    m: 6,
    n: 6,
    o: 6,
    p: 7,
    q: 7,
    r: 7,
    s: 7,
    t: 8,
    u: 8,
    v: 8,
    w: 9,
    x: 9,
    y: 9,
    z: 9,
  };
  const numbers = {};

  for (let i = 0; i < array.length; i++) {
    const palavra = array[i];
    let number = '';
    for (let j = 0; j < palavra.length; j++) {
      number = number + alf[palavra[j]];
    }
    if (numbers[number]) return true;
    numbers[number] = true;
  }
  return false;
};

/* Escreva um programa que lê uma expressão e verifica se todos os parênteses, colchetes e chaves são abertos e fechados na ordem correta. O programa imprime "SIM" (caso os parênteses, colchetes e chaves tenham sido abertos e fechados corretamente) e "NAO" caso contrário.
Por exemplo, a expressão "(10+60-[40+x]-{80})" retorna SIM, mas a expressão "[10+60-(40+x]-{80})" retorna NAO. */
const validateExpressios = (expression) => {
  const stack = [];
  const closeMap = {
    ')': '(',
    ']': '[',
    '}': '{',
  };
  const openMap = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  for (let i = 0; i < expression.length; i++) {
    const char = expression[i];
    if (openMap[char]) {
      stack.push(char);
    }
    if (closeMap[char]) {
      const verify = stack[stack.length - 1];
      if (closeMap[char] === verify) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  if (stack.length) return false;
  return true;
};

const allPairs = (A, B, X) => {
  const pairs = [];
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B.length; j++) {
      if (A[i] + B[j] === X) {
        pairs.push([A[i], B[j]]);
      }
    }
  }
  // let troca = pairs[0];
  // for (let i = 0; i < pairs.length; i++) {
  //   for (let j = 0; j < pairs.length; j++) {
  //     if (pairs[j] > pairs[j + 1]) {
  //       troca = pairs[i];
  //       pairs[i] = pairs[j];
  //       pairs[j] = troca;
  //     }
  //   }
  // }
  return pairs.sort();
};

const gasStation2 = (gas, cost) => {
  let stationTotal = gas.length;
  let start = 0;
  let tank = 0;
  let total = 0;

  for (let i = 0; i < stationTotal; i++) {
    tank += gas[i] - cost[i];
    if (tank < 0) {
      tank = 0;
      start = i + 1;
    }
    total += gas[i] - cost[i];
  }
  return total < 0 ? -1 : start;
};

const MakeArrayConsecutive2 = (statues) => {
  let lower = 21;
  let higher = 0;
  for (let i = 0; i < statues.length; i++) {
    if (lower > statues[i]) {
      lower = statues[i];
    }
    if (higher < statues[i]) {
      higher = statues[i];
    }
  }

  return higher - lower - statues.length + 1;
};

// class ListNode {
//   value;
//   next;

//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }
// você tem um robô na origem do eixo x. O robô receberá algumas instruções. Sua tarefa é prever sua posição depois de executar todas as instruções. Os comandos são:

// L: mover uma unidade para a esquerda (diminuir p em 1, onde p é a posição do robô antes de se mover)
// R: move uma unidade para a direita (aumenta p em 1)
// i: executa a mesma ação da instrução i-th. É garantido que i é um inteiro positivo não maior que o número de instruções antes disso.

// As posições dos robôs p podem ser negativas a qualquer momento, por exemplo. se está atualmente na posição 0 e recebe uma instrução L, então deve ir para a posição -1.

const robot = (instructions) => {
  let init = 0;
  const map = {};
  for (i = 0; i < instructions.length; i++) {
    if (instructions[i] === 'L') {
      init -= 1;
      map[i] = 'L';
    } else if (instructions[i] === 'R') {
      init += 1;
      map[i] = 'R';
    } else {
      const instruction = map[String(i - 1)];
      if (instruction === 'L') {
        init -= 1;
        map[i] = 'L';
      } else if (instruction === 'R') {
        init += 1;
        map[i] = 'R';
      }
    }
  }
  return console.log(init);
};

let robotThales = (input) => {
  const hash = {};
  let total = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === 'R') {
      total += 1;
      hash[i] = 1;
    } else if (input[i] === 'L') {
      total -= 1;
      hash[i] = -1;
    } else {
      total += hash[input[i]];
      hash[i] = hash[input[i]];
    }
  }
  return console.log(total);
};

let cartasThales = (cardsQtd) => {
  const cards = [];
  const giveaway = [];
  for (let i = 1; i < cardsQtd + 1; i++) {
    cards.push(i);
  }

  let as = 0;
  while (cards.length > 1) {
    console.log((as += 1));
    let a = cards.shift();
    let b = cards.shift();
    giveaway.push(a);
    cards.push(b);
  }

  console.log('Giveaway cards', giveaway);
  console.log('Developer card', cards);
};

const strongPasswordAvelino= (n, password) => {
  const numbers = '0123456789';
  const lower_case = 'abcdefghijklmnopqrstuvwxyz';
  const upper_case = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const special_characters = '!@#$%^&*()-+';

  let nCount = 0;
  let lCount = 0;
  let uCount = 0;
  let sCount = 0;

  for (let i = 0; i < password.length; i++) {
    if (numbers.includes(password[i])) {
      nCount += 1;
    } else if (lower_case.includes(password[i])) {
      lCount += 1;
    } else if (upper_case.includes(password[i])) {
      uCount += 1;
    } else if (special_characters.includes(password[i])) {
      sCount += 1;
    }
  }
  let total = 0;
  if (nCount === 0) {
    total += 1;
  }
  if (lCount === 0) {
    total += 1;
  }
  if (uCount === 0) {
    total += 1;
  }
  if (sCount === 0) {
    total += 1;
  }

  if (total > 6 - n) return total;
  return Math.max(6 - n, 0);
};

(() => {
  // console.log(validateExpressios('(10+60-(40+x-{80}))'));
  // console.log(slidingWindow([5, 6, 7, 8, 9, 10], 4));
  // console.log(checkIsSubArray([1, 2, 3, 4, 9], 17));
  // console.log(subArraySum([4, 5, 7, 9, 10, 2, 1], 12));
  // console.log(numberDuplicatedAvelino([2, 0, 3, -1, 2, 3]));
  // console.log(productBigest([-23, 4, -3, 8, -12]));
  // console.log(shapeArea(3));
  // console.log(celularAntigo(['mala', 'naja', 'maca', 'jaca']));
  // console.log(celularAntigo(['mala', 'abacate', 'abobrinha']));
  // console.log(allPairs([1, 2, 4, 5, 7], [5, 6, 3, 4, 8], 9));
  // console.log(gasStation2([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]));
  // console.log(MakeArrayConsecutive2([1, 2, 3, 4, 5, 10]));
  // robot(['R', 'R', 'R', 1]);
  // robotThales(['R', 'R', 'R', 1]);
  // cartasThales(10);
  console.log(strongPassword(4, '#Ha1'));
})();
