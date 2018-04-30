'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _require = require('chai'),
    expect = _require.expect;

var supertest = require('supertest');
var app = require('../server');

describe('hello to the workd', function () {
  it('/hello works', (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    var res;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return supertest(app).get('/hello').expect(200);

          case 2:
            res = _context.sent;

            expect(res.text).to.equal('hello world');

          case 4:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  })));

  it('/hi works', (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
    var res;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return supertest(app).get('/hi').expect(200);

          case 2:
            res = _context2.sent;

            expect(res.body).to.deep.equal({ message: 'hello world' });

          case 4:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  })));

  // it('/echo works', async () => {
  //   const res = await supertest(app)
  //     .post('/echo')
  //     .send({ hi: 'there'})
  //     .expect(200);
  //   expect(res.body).to.deep.equal({ hi: 'there' });
  // });
});