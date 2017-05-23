'use strict';

const primeFactorsCache = {};

function getPrimeFactors(number) {
  if (isNaN(number) || number < 2) return [];
  if (!Number.isInteger(number)) return [];
  if (primeFactorsCache.hasOwnProperty(number)) return primeFactorsCache[number];
  const original = number;
  const primeFactors = [];

  for (let i = 2; i <= number / i; i++) {
    while (number % i === 0) {
      number = number / i;
      primeFactors.push(i);
    }
  }

  if (number > 1) primeFactors.push(number);

  primeFactorsCache[original] = primeFactors;

  return primeFactors;
}

module.exports = getPrimeFactors;
