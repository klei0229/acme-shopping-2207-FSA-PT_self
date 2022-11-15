const express = require('express');
const app = express.Router();
const Stripe = require('stripe');
const stripe = Stripe('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

module.exports = app;

app.post('/checkout', async (req, res) => {
  console.log('Stripe API called');
  const session = await stripe.checkout.sessions.create({
    success_url: `${req.protocol}://${req.hostname}:${
      process.env.PORT || 3000
    }/#/order-success`,
    cancel_url: `${req.protocol}://${req.hostname}:${
      process.env.PORT || 3000
    }/#/order-fail`,
    line_items: req.body.map((payment) => {
      return {
        price_data: {
          product_data: {
            name: payment.name,
          },
          unit_amount_decimal: payment.total * 100,
          currency: 'usd',
        },
        quantity: payment.quantity,
      };
    }),
    mode: 'payment',
  });
  res.send(session.url);
});
