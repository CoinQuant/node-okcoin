'use strict';

const assert = require('chai').assert;

describe('node-okcoin', () => {
  describe('#getTicker', () => {
    it('should throw an error if symbol is not provided', done => {
      const Okcoin = require('../index').default;
      const okcoin = new Okcoin();
      okcoin.getTicker().catch(err => {
        assert.equal(err, 'market symbol is required');
        done();
      });
    });
  });
});
