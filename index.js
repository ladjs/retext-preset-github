'use strict';

exports.plugins = [
  [require('retext-sentence-spacing'), {preferred: 1}],
  [require('retext-quotes'), {preferred: 'straight'}],
  require('retext-diacritics'),
  require('retext-redundant-acronyms'),
  require('retext-repeated-words'),
  require('retext-indefinite-article'),
  [require('retext-contractions'), {straight: true}]
];
