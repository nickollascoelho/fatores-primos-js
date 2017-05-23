'use strict';

const primeFactorsMemo = {};

function getPrimeFactors(number) {
  if (isNaN(number) || number < 2) return [];
  if (!Number.isInteger(number)) return [];

  if (primeFactorsMemo.hasOwnProperty(number)) return primeFactorsMemo[number];

  const primeFactors = calcPrimeFactors(number);
  primeFactorsMemo[number] = primeFactors;
  return primeFactors;
}

function calcPrimeFactors(number) {
  const primeFactors = [];

  for (let i = 2; i <= number / i; i++) {
    while (number % i === 0) {
      number = number / i;
      primeFactors.push(i);
    }
  }

  if (number > 1) primeFactors.push(number);

  return primeFactors;
}

module.exports = getPrimeFactors;
