'use strict';

const assert = require('chai').assert;
const moment = require('moment');

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
    it('should return correct data', done => {
      const Okcoin = require('../index').default;
      const okcoin = new Okcoin();
      okcoin.getTicker('anscny').then(res => {
        assert.isTrue(res.date - moment().unix() < 100);
        assert.isTrue(+res.ticker.buy > 0);
        assert.isTrue(+res.ticker.high > 0);
        assert.isTrue(+res.ticker.last > 0);
        assert.isTrue(+res.ticker.low > 0);
        assert.isTrue(+res.ticker.sell > 0);
        assert.isTrue(+res.ticker.vol >= 0);
        done();
      });
    });
  });
});
