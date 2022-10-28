const { expect } = require('chai');
const { syncAndSeed, User } = require('../server/db');
const jwt = require('jsonwebtoken');
const app = require('supertest')(require('../server/app'));

describe('The Shopping Routes', ()=> {
  let seed;
  beforeEach(async()=> {
    seed = await syncAndSeed();
  });
  describe('Getting A Cart', ()=> {
    it('it returns the users cart', async()=> {
      const response = await app.get('/api/orders/cart')
        .set('authorization', seed.users.moe.generateToken());
      expect(response.status).to.equal(200);
      expect(response.body.userId).to.equal(seed.users.moe.id);
    });
  });
  describe('Adding to a cart', ()=> {
    it('it returns the cart with the item', async()=> {
      const response = await app.post('/api/orders/cart')
        .set('authorization', seed.users.moe.generateToken())
        .send({ product: seed.products.foo, quantity: 7});
      expect(response.status).to.equal(200);
      expect(response.body.lineItems[0].quantity).to.equal(7);
    });
  });
  describe('Removing from Cart', ()=> {
    it('it returns the updated cart', async()=> {
      let response = await app.post('/api/orders/cart')
        .set('authorization', seed.users.moe.generateToken())
        .send({ product: seed.products.foo, quantity: 7});
      response = await app.put('/api/orders/cart')
        .set('authorization', seed.users.moe.generateToken())
        .send({ product: seed.products.foo, quantityToRemove: 2});
      expect(response.status).to.equal(200);
      expect(response.body.lineItems[0].quantity).to.equal(5);
    });
  });
  describe('Creating an order', ()=> {
    it('it returns the order', async()=> {
      let response = await app.post('/api/orders/cart')
        .set('authorization', seed.users.moe.generateToken())
        .send({ product: seed.products.foo, quantity: 7});
      response = await app.post('/api/orders')
        .set('authorization', seed.users.moe.generateToken())
      expect(response.status).to.equal(200);
      expect(response.body.isCart).to.equal(false);
    });
    /*
    describe('with no lineItems', ()=> {
      it('should throw an exception', async()=> {
        try {
          const response = await app.post('/api/orders')
          .set('authorization', seed.users.moe.generateToken())
          throw 'nooooo';
        }
        catch(ex){
          expect(ex.message).to.equal('must have line items');
        }
      });
    });
    */
  });
});
