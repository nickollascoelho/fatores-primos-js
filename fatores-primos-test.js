'use strict';

const test = require('tape');
const fatoresPrimos = require('./fatores-primos-nickollas');

test('fatores primos de números não primos', (t) => {
  t.same(fatoresPrimos(6), [2, 3], '2 x 3');
  t.same(fatoresPrimos(100), [2, 2, 5, 5], '2 x 2 x 5 x 5');
  t.same(fatoresPrimos(198), [2, 3, 3, 11], '2 x 3 x 3 x 11');
  t.same(fatoresPrimos(276), [2, 2, 3, 23], '2 x 2 x 3 x 23');
  t.end();
});

test('fatores primos de números primos', (t) => {
  t.same(fatoresPrimos(2), [2], 'fator primo de 2 é ele mesmo');
  t.same(fatoresPrimos(5), [5], 'fator primo de 5 é ele mesmo');
  t.same(fatoresPrimos(7), [7], 'fator primo de 7 é ele mesmo');
  t.same(fatoresPrimos(13), [13], 'fator primo de 13 é ele mesmo');
  t.same(fatoresPrimos(181), [181], 'fator primo de 181 é ele mesmo');
  t.end();
});

test('parametros sem fatores primos', (t) => {
  t.same(fatoresPrimos(), []);
  t.same(fatoresPrimos(null), []);
  t.same(fatoresPrimos(undefined), []);
  t.same(fatoresPrimos(-1), []);
  t.same(fatoresPrimos(1.2), []);
  t.same(fatoresPrimos('test'), []);
  t.same(fatoresPrimos([]), []);
  t.same(fatoresPrimos({}), []);
  t.same(fatoresPrimos(0), []);
  t.same(fatoresPrimos(1), []);
  t.end();
});
