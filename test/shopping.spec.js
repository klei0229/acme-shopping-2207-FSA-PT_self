const { expect } = require('chai');
const { syncAndSeed, User } = require('../server/db');
const jwt = require('jsonwebtoken');
const app = require('supertest')(require('../server/app'));

describe('The Shopping Process', ()=> {
  let seed;
  beforeEach(async()=> {
    seed = await syncAndSeed();
  });
  describe('Getting A Cart', ()=> {
    describe('If the cart does not exits', ()=> {
      it('gets created', async()=> {
        const cart = await seed.users.moe.getCart();
        expect(cart).to.be.ok;
      });
    });
    describe('If the cart does exist', ()=> {
      it('it returns the existing cart', async()=> {
        let cart = await seed.users.larry.getCart();
        const id = cart.id;
        cart = await seed.users.larry.getCart();
        expect(cart.id).to.equal(id);
      });
    });
  });
  describe('adding a product to a cart', ()=> {
    describe('product is not in a lineItem', ()=> {
      it('lineItem gets created', async()=> {
        const foo = seed.products.foo; 
        const larry = seed.users.larry;
        const cart = await larry.addToCart({ product: foo, quantity: 2 });
        expect(cart.lineItems.length).to.equal(1);
      });
    });
    describe('product is a lineItem', ()=> {
      it('lineItem gets updated', async()=> {
        const foo = seed.products.foo; 
        const larry = seed.users.larry;
        await larry.addToCart({ product: foo, quantity: 2 });
        const cart = await larry.addToCart({ product: foo, quantity: 3 });
        expect(cart.lineItems.length).to.equal(1);
        expect(cart.lineItems[0].quantity).to.equal(5);
      });
    });

  });
});
