import { add } from '../src/index.js';

let assert = require('assert');

it('add(1,2) === 3', function () {
  assert.equal(add(1, 2), 3);
});
