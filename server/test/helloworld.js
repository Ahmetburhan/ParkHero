const { expect } = require('chai');
const supertest = require('supertest');
const app = require('../server');

describe('hello to the workd', () => {
  it('/hello works', async () => {
    const res = await supertest(app)
      .get('/hello')
      .expect(200);
    expect(res.text).to.equal('hello world');
  });

  it('/hi works', async () => {
    const res = await supertest(app)
      .get('/hi')
      .expect(200);
    expect(res.body).to.deep.equal({ message: 'hello world' });
  });

  // it('/echo works', async () => {
  //   const res = await supertest(app)
  //     .post('/echo')
  //     .send({ hi: 'there'})
  //     .expect(200);
  //   expect(res.body).to.deep.equal({ hi: 'there' });
  // });
});
