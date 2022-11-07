const conn = require('./conn');
const User = require('./User');
// const Product = require('./Product');
const Bundle = require('./Bundle');
const Order = require('./Order');
const Product = require('./Product');
const LineItem = require('./LineItem');
const fs = require('fs');
const path = require('path');

//associations
Order.belongsTo(User);
Order.hasMany(LineItem);
LineItem.belongsTo(Order);
LineItem.belongsTo(Bundle);
Product.belongsTo(Bundle);
Bundle.hasMany(Product);

const getImage = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'base64', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

const syncAndSeed = async () => {
  await conn.sync({ force: true });
  const avatar = await getImage(path.join(__dirname, '../../prof-avatar.png'));
  const [
    moe,
    lucy,
    larry,
    ethyl,
    korean,
    french,
    canadian,
    kitkat,
    oreo,
    christmas,
    spicy,
    chips,
    glutenfree,
    vegan,
    keto,
  ] = await Promise.all([
    User.create({ username: 'moe', password: '123', avatar }),
    User.create({ username: 'lucy', password: '123' }),
    User.create({ username: 'larry', password: '123' }),
    User.create({ username: 'ethyl', password: '123' }),
    Bundle.create({ name: 'Korean Package' }),
    Bundle.create({ name: 'French Package' }),
    Bundle.create({ name: 'Canadian Package' }),
    Bundle.create({ name: 'Kitkat Package' }),
    Bundle.create({ name: 'Oreo Package' }),
    Bundle.create({ name: 'Christmas Package' }),
    Bundle.create({ name: 'Spicy Package' }),
    Bundle.create({ name: 'Chips Package' }),
    Bundle.create({ name: 'Gluten Free Package' }),
    Bundle.create({ name: 'Vegan Package' }),
    Bundle.create({ name: 'Keto Package' }),
  ]);

  const cart = await ethyl.getCart();
  await ethyl.addToCart({ bundle: korean, quantity: 3 });
  await ethyl.addToCart({ bundle: kitkat, quantity: 2 });
  await Promise.all([
    Product.create({
      name: 'Haitai French Pie – Apple (11g)',
      imageURL:
        'https://candybar.snackcrate.com/wp-content/uploads/2022/08/Korea_FrenchPie_482x482_.png',
      bundleId: korean.id,
    }),
    Product.create({
      name: 'Haitai Baked Sweet Potato Sticks (27g)',
      imageURL:
        'https://candybar.snackcrate.com/wp-content/uploads/2022/08/Korea_PotatoSticks_482x482_.png',
      bundleId: korean.id,
    }),
    Product.create({
      name: 'Crown Butter Waffle (25g)',
      imageURL:
        'https://candybar.snackcrate.com/wp-content/uploads/2022/08/Korea_ButterCookie_482x482_.png',
      bundleId: korean.id,
    }),
    Product.create({
      name: 'Lotte Choco Pie – Original (28g)',
      imageURL:
        'https://candybar.snackcrate.com/wp-content/uploads/2022/08/Korea_CouqueDasseCoffee_482x482_.png',
      bundleId: korean.id,
    }),
    Product.create({
      name: 'Crown Couque D’asse – Coffee (8g)',
      imageURL:
        'https://candybar.snackcrate.com/wp-content/uploads/2022/09/USA_AbbaZabba_482x482_.png',
      bundleId: korean.id,
    }),
    Product.create({
      name: 'Crown Couque D’asse – White (8g)',
      imageURL:
        'https://candybar.snackcrate.com/wp-content/uploads/2022/08/Korea_CouqueDasseWhite_482x482_.png',
      bundleId: korean.id,
    }),
    Product.create({
      name: 'Lotte Custard Cake (23g)',
      imageURL:
        'https://candybar.snackcrate.com/wp-content/uploads/2022/08/Korea_CustardCake_482x482_.png',
      bundleId: korean.id,
    }),
    Product.create({
      name: 'Jellico Dinosaur Gummies (90g)',
      imageURL:
        'https://candybar.snackcrate.com/wp-content/uploads/2022/08/Korea_DinoGummies_482x482_.png',
      bundleId: korean.id,
    }),
    Product.create({
      name: 'Nongshim Jjolbyeong Snack (82g)',
      imageURL:
        'https://candybar.snackcrate.com/wp-content/uploads/2022/08/Korea_Jjolbyeong_482x482_.png',
      bundleId: korean.id,
    }),
    Product.create({
      name: 'Haitai Grape Candy (130g)',
      imageURL:
        'https://candybar.snackcrate.com/wp-content/uploads/2022/08/Korea_GrapeCandy_482x482_.png',
      bundleId: korean.id,
    }),
    Product.create({
      name: 'Gavottes Crepes Chocolates (90g)',
      imageURL:
        'https://candybar.snackcrate.com/wp-content/uploads/2021/11/France_Crepe_Dentelle_482x482_.png',
      bundleId: french.id,
    }),
    Product.create({
      name: 'La Trinitaine Galette Pur Beurre (3.4g)',
      imageURL:
        'https://candybar.snackcrate.com/wp-content/uploads/2021/11/France_Galette_482x482_.png',
      bundleId: french.id,
    }),
    Product.create({
      name: 'Lays Bolognaise (45g)',
      imageURL:
        'https://candybar.snackcrate.com/wp-content/uploads/2022/01/France_Saveur_Bolognaise_482x482_.png',
      bundleId: french.id,
    }),
    Product.create({
      name: 'Lays Chips Poulet (45g)',
      imageURL:
        'https://candybar.snackcrate.com/wp-content/uploads/2021/11/France_Saveur_Poulet_482x482_.png',
      bundleId: french.id,
    }),
    Product.create({
      name: 'Sucettes Fer De Lance Caremel Recharge (13g)',
      imageURL:
        'https://candybar.snackcrate.com/wp-content/uploads/2021/11/France_Caramel_Sucka_482x482_.png',
      bundleId: french.id,
    }),
    Product.create({
      name: 'Orangina Drink (330mL)',
      imageURL:
        'https://candybar.snackcrate.com/wp-content/uploads/2021/11/France_Orangina_482x482_.png',
      bundleId: french.id,
    }),
    Product.create({
      name: 'Lu Petit Ecolier Poche (50g)',
      imageURL:
        'https://candybar.snackcrate.com/wp-content/uploads/2021/11/France_PetiteColier_Box_482x482_.png',
      bundleId: french.id,
    }),
    Product.create({
      name: 'St. Michel Madelines (75g)',
      imageURL:
        'https://candybar.snackcrate.com/wp-content/uploads/2021/11/France_Madeleines_482x482_.png',
      bundleId: french.id,
    }),
    Product.create({
      name: 'Sundy Bar (36g)',
      imageURL:
        'https://candybar.snackcrate.com/wp-content/uploads/2021/11/France_Sunday_482x482_.png',
      bundleId: french.id,
    }),
    Product.create({
      name: 'Carambar Krema (2,000g)',
      imageURL:
        'https://candybar.snackcrate.com/wp-content/uploads/2021/11/France_Krema_Regalad_482x482_.png',
      bundleId: french.id,
    }),
    Product.create({
      name: 'Thrills Chewing Gum (14g)',
      imageURL:
        'https://candybar.snackcrate.com/wp-content/uploads/2021/09/Canada_Thrills_Gum_482x482_.png',
      bundleId: canadian.id,
    }),
    Product.create({
      name: 'Aero Peppermint (41g)',
      imageURL:
        'https://candybar.snackcrate.com/wp-content/uploads/2021/08/Canada_Aero_Peppermint_482x482_.png',
      bundleId: canadian.id,
    }),
    Product.create({
      name: 'Humpty Dumpty Bacon Hickory Sticks (50g)',
      imageURL:
        'https://candybar.snackcrate.com/wp-content/uploads/2021/09/Canada_Humpty_Dumpty_482x482_.png',
      bundleId: canadian.id,
    }),
    Product.create({
      name: 'Bear Paws (40g)',
      imageURL:
        'https://candybar.snackcrate.com/wp-content/uploads/2021/08/Canada_Banana_Bread_482x482_.png',
      bundleId: canadian.id,
    }),
    Product.create({
      name: 'Bec Cola (275ml)',
      imageURL:
        'https://candybar.snackcrate.com/wp-content/uploads/2021/09/Canada_Bec_Cola_233x189_-1.png',
      bundleId: canadian.id,
    }),
    Product.create({
      name: 'Cadbury Caramilk (50g)',
      imageURL:
        'https://candybar.snackcrate.com/wp-content/uploads/2021/09/Canada_Caramilk_482x482_.png',
      bundleId: canadian.id,
    }),
    Product.create({
      name: 'Nestle Coffee Crisp (50g)',
      imageURL:
        'https://candybar.snackcrate.com/wp-content/uploads/2021/09/Canada_Coffee_Crisp_482x482_.png',
      bundleId: canadian.id,
    }),
    Product.create({
      name: 'Covered Bridge Creamy Dill Pickle (36g)',
      imageURL:
        'https://candybar.snackcrate.com/wp-content/uploads/2021/09/Canada_Cover_Bridge_Chips_482x482_-1.png',
      bundleId: canadian.id,
    }),
    Product.create({
      name: 'Cadbury Crispy Crunch (48g)',
      imageURL:
        'https://candybar.snackcrate.com/wp-content/uploads/2021/09/Canada_Crispy_Crunch_482x482_.png',
      bundleId: canadian.id,
    }),
    Product.create({
      name: 'Crush Cream Soda (275ml)',
      imageURL:
        'https://candybar.snackcrate.com/wp-content/uploads/2021/09/Canada_Crush_482x482_.png',
      bundleId: canadian.id,
    }),
    Product.create({
      name: 'Kit Kat Big Little Pouch Original (50g)',
      imageURL:
        'https://candybar.snackcrate.com/wp-content/uploads/2021/09/KitKat_Big_482x482_082321.png',
      bundleId: kitkat.id,
    }),
    Product.create({
      name: 'Kit Kat Big Little Pouch Strawberry (45g)',
      imageURL:
        'https://candybar.snackcrate.com/wp-content/uploads/2021/09/KitKat_Strawberry_Balls_482x482_082321.png',
      bundleId: kitkat.id,
    }),
    Product.create({
      name: 'Kit Kat Chunky Aero Mint (45g)',
      imageURL:
        'https://candybar.snackcrate.com/wp-content/uploads/2021/09/KitKat_Chunky_Aero_482x482_082321.png',
      bundleId: kitkat.id,
    }),
    Product.create({
      name: 'Nestle Kit Kat Chunky Duo (64g)',
      imageURL:
        'https://candybar.snackcrate.com/wp-content/uploads/2021/09/KitKat_Chunky_Duo_482x482_082321.png',
      bundleId: kitkat.id,
    }),
    Product.create({
      name: 'Nestle Kit Kat Chunky Peanut Butter (42g)',
      imageURL:
        'https://candybar.snackcrate.com/wp-content/uploads/2021/09/KitKat_Chunky_PeanutButter_482x482_082321.png',
      bundleId: kitkat.id,
    }),
    Product.create({
      name: 'Nestle – Kit Kat Chunky Popcorn (48g)',
      imageURL:
        'https://candybar.snackcrate.com/wp-content/uploads/2021/08/KitKat_Chunky_Popcorn_482x482_082321.png',
      bundleId: kitkat.id,
    }),
    Product.create({
      name: 'Nestle Kit Kat Dark Mint Bag of 9 (20g)',
      imageURL:
        'https://candybar.snackcrate.com/wp-content/uploads/2021/09/KitKat_Dark_Mint_482x482_082321.png',
      bundleId: kitkat.id,
    }),
    Product.create({
      name: 'Nestle Kit Kat Gold (41g)',
      imageURL:
        'https://candybar.snackcrate.com/wp-content/uploads/2022/02/KitKatGold_482x482_.png',
      bundleId: kitkat.id,
    }),
    Product.create({
      name: 'Nestle Kit Kat Hazelnut Spread Bag of 9 (20g)',
      imageURL:
        'https://candybar.snackcrate.com/wp-content/uploads/2021/09/KitKat_Hazelnut_482x482_082321.png',
      bundleId: kitkat.id,
    }),
    Product.create({
      name: 'Nestle Kit Kat Honeycomb Bag of 9 (20g)',
      imageURL:
        'https://candybar.snackcrate.com/wp-content/uploads/2021/09/KitKat_Honeycomb_482x482_082321.png',
      bundleId: kitkat.id,
    }),
  ]);
  return {
    users: {
      moe,
      lucy,
      larry,
    },
    bundle: {
      korean,
      french,
      canadian,
      kitkat,
    },
  };
};

module.exports = {
  syncAndSeed,
  User,
  Bundle,
  Product
};
