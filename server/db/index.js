const conn = require("./conn");
const User = require("./User");
const Bundle = require("./Bundle");
const Order = require("./Order");
const Product = require("./Product");
const LineItem = require("./LineItem");
const Address = require("./Address");
const fs = require("fs");
const path = require("path");

//associations
Order.belongsTo(User);
Order.hasMany(LineItem);
LineItem.belongsTo(Order);
LineItem.belongsTo(Bundle);
Product.belongsTo(Bundle);
Bundle.hasMany(Product);
Address.belongsTo(User);
Address.hasMany(Order);
Order.belongsTo(Address);
User.hasMany(Address);

const getImage = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "base64", (err, data) => {
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
  const avatar = await getImage(path.join(__dirname, "../../prof-avatar.png"));
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
    gum,
    glutenfree,
    vegan,
    halloween,
    thanksgiving,
  ] = await Promise.all([
		User.create({
			username: 'moe',
			password: '123',
			avatar,
			firstName: 'Moe',
			lastName: 'Stooge',
			email: 'moe@gmail.com',
		}),
		User.create({
			username: 'lucy',
			password: '123',
			firstName: 'Lucy',
			lastName: 'Lawless',
			email: 'xena@gmail.com',
		}),
		User.create({
			username: 'larry',
			password: '123',
			firstName: 'Larry',
			lastName: 'Stooge',
			email: 'larry@gmail.com',
		}),
		User.create({
			username: 'ethyl',
			password: '123',
			firstName: 'Ethyl',
			lastName: 'Stooge',
			email: 'ethyl@gmail.com',
		}),
    Bundle.create({
      name: "Korean Package",
      imageUrl:
      'https://img.freepik.com/premium-photo/south-korean-flag-white-background_532129-108.jpg?w=2000',
      price: 35.0,
      type: "featured",
      description:
        "Enjoy cookies, chips, and goodies in sweet, spicy, and salty flavors from South Korea.  We have created a unique selection of flavors so you can enjoy the ultimate snacking experience.",
    }),
    Bundle.create({
      name: "French Package",
      imageUrl:
      'https://img.freepik.com/premium-vector/waving-flag-france-country-isolated-french-tricolor-flag-white-background-vector-flat-illustration_502651-399.jpg?w=2000',
      price: 50.0,
      type: "best",
      description:
        "Enjoy cookies, chips, and goodies in sweet, spicy, and salty flavors from France.  We have created a unique selection of flavors so you can enjoy the ultimate snacking experience.",
    }),
    Bundle.create({
      name: "Canadian Package",
      imageUrl:
      'https://img.freepik.com/premium-photo/canada-flag-white-background_532129-52.jpg?w=2000',
      price: 40.0,
      type: "featured",
      description: "Our delicious Canadian snack box includes an assortment of 45 single serve snacks that are perfect for anyone, anytime, and anywhere."
    }),
    Bundle.create({
      name: "Kitkat Package",
      imageUrl:
      'https://people.com/thmb/OV9M9FQjGOWKt7ybtiCXOrrlE4k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2)/kit-kat-mint-chocolate-3-2000-56cd5f85c1cf404998ca520c8e7f73de.jpg',
      price: 30.0,
      type: "new",
      description:"The perfect balance of chocolate and wafer, there's a reason KitKat is enjoyed in more than 80 countries. The iconic brand is an international symbol for hitting the pause button on life - to enjoy a well-earned break."
    }),
    Bundle.create({
      name: "Oreo Package",
      imageUrl:
      'https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/oreo-isolated-on-white-background-nenov-images.jpg',
      price: 30.0,
      type: "best",
      description:`Super-sized and oh-so-soft to the touch. We\'ve brought your OREO dreams to life with our exclusive OREO Pillow! Just open the "sleeve" and you'll find five removable cookie plushes. A must-have for the OREO obsessed!`
    }),
    Bundle.create({
      name: "Christmas Package",
      imageUrl:
      'https://media.istockphoto.com/photos/santa-hat-picture-id471122543?k=20&m=471122543&s=612x612&w=0&h=xJPSjeeFqfsXS_Ah3-xYu9Nyg2a3aWuYA012gzrLWLI=',
      price: 50.0,
      type: "new",
      description: "This 45 count Christmas Care Package is filled with Candy, Snacks, and Toys - it is perfect to use for Stocking Stuffers! It's also the Perfect Gift for Anyone this Christmas!"
    }),
    Bundle.create({
      name: "Spicy Package",
      imageUrl:
      'https://img.freepik.com/premium-photo/red-chili-peppers-isolated-white-background-top-view-flat_438009-1946.jpg?w=2000',
      price: 35.0,
      type: "new",
      description:"International Spicy Mystery Snack Box Perfect for gifting College Care Package and Birthday gifts. For Spicy lovers of all ages and people looking to try new things. Spicy snacks from all over the world."
    }),
    Bundle.create({
      name: "Chips Package",
			imageUrl: 'https://m.media-amazon.com/images/I/51ZZaghK+FL.jpg',
      price: 30.0,
      type: "best",
      description:"Delight the taste buds of friends, family and co-workers with an assortment of chip flavors from around the world."
    }),
    Bundle.create({
      name: "Gum Package",
      imageUrl:
      'https://img.freepik.com/premium-photo/chewing-gum-isolated-white-background_252173-136.jpg?w=2000',
      price: 20.0,
      type: "new",
      description:"Skip buying boxes of different snacks when you can enjoy a variety of different snacks from your favorite brands in just one box! With 160 packs, this purchase gives you plenty of treats to last a while."
    }),
    Bundle.create({
      name: "Gluten Free Package",
      imageUrl:
      'https://img.freepik.com/premium-vector/gluten-free-hand-drawn-lettering-phrase-with-green-leaves-isolated-white-background_166089-1032.jpg?w=2000',
      price: 45.0,
      type: "new",
      description:`Every snack in this Premium Gift bag is curated for its quality, freshness and most importantly NO GLUTEN CONTAINING FOODS`
    }),
    Bundle.create({
      name: "Vegan Package",
      imageUrl:
      'https://img.freepik.com/premium-photo/pistachio-white-background_263154-248.jpg?w=2000',
      price: 45.0,
      type: "featured",
      description:"From vegan mac and cheese and delicious vegan chocolate, to avocado chips, hummus crackers and superfood smoothies, the Vegancuts Snack Box is your monthly delivery of the best vegan snacks and meal items, and drinks on the market."
    }),
    Bundle.create({
      name: "Halloween Package",
      imageUrl:
        "https://www.history.com/.image/t_share/MTU3ODc4NTk5NzYxNDcwNzkz/hungy-halloween-candy-istock_000021704258large-2.jpg",
      price: 50.0,
      type: "featured",
      description:`If you want your house to be the favorite stop on your neighborhood’s trick-or-treating route, look no further than our Halloween-themed candy.`
    }),
    Bundle.create({
      name: "Thanksgiving Package",
      imageUrl:
        "https://www.shakentogetherlife.com/wp-content/uploads/2019/11/easy-Indian-corn-Thanksgiving-favors.jpg",
      price: 50.0,
      type: "new",
      description:`There’s plenty of dessert to go around with this tasty bundle. Wrapped in an orange bow, these holiday delights make a thoughtful gift for your Thanksgiving dinner host or for any occasion this autumn`
    }),
  ]);

  const cart = await ethyl.getCart();
  await ethyl.addToCart({
    bundle: korean,
    quantity: 1,
    size: "Small",
    frequency: "Monthly",
  });
  await ethyl.addToCart({
    bundle: kitkat,
    quantity: 2,
    size: "Large",
    frequency: "Annually",
  });
  await ethyl.addToCart({
    bundle: vegan,
    quantity: 1,
    size: "Small",
    frequency: "Monthly",
  });
  const cart2 = await moe.getCart();
  await moe.addToCart({
    bundle: korean,
    quantity: 3,
    size: "Small",
    frequency: "Monthly",
  });
  await moe.addToCart({
    bundle: kitkat,
    quantity: 2,
    size: "Large",
    frequency: "Annually",
  });

  await Promise.all([
    Product.create({
      name: "Haitai French Pie – Apple",
      imageURL:
        "https://candybar.snackcrate.com/wp-content/uploads/2022/08/Korea_FrenchPie_482x482_.png",
      bundleId: korean.id,
    }),
    Product.create({
      name: "Haitai Baked Sweet Potato Sticks",
      imageURL:
        "https://candybar.snackcrate.com/wp-content/uploads/2022/08/Korea_PotatoSticks_482x482_.png",
      bundleId: korean.id,
    }),
    Product.create({
      name: "Crown Butter Waffle",
      imageURL:
        "https://candybar.snackcrate.com/wp-content/uploads/2022/08/Korea_ButterCookie_482x482_.png",
      bundleId: korean.id,
    }),
    Product.create({
      name: "Lotte Choco Pie – Original",
      imageURL:
        "https://candybar.snackcrate.com/wp-content/uploads/2022/08/Korea_CouqueDasseCoffee_482x482_.png",
      bundleId: korean.id,
    }),
    Product.create({
      name: "Crown Couque D’asse – Coffee",
      imageURL:
        "https://candybar.snackcrate.com/wp-content/uploads/2022/09/USA_AbbaZabba_482x482_.png",
      bundleId: korean.id,
    }),
    Product.create({
      name: "Crown Couque D’asse – White",
      imageURL:
        "https://candybar.snackcrate.com/wp-content/uploads/2022/08/Korea_CouqueDasseWhite_482x482_.png",
      bundleId: korean.id,
    }),
    Product.create({
      name: "Lotte Custard Cake",
      imageURL:
        "https://candybar.snackcrate.com/wp-content/uploads/2022/08/Korea_CustardCake_482x482_.png",
      bundleId: korean.id,
    }),
    Product.create({
      name: "Jellico Dinosaur Gummies",
      imageURL:
        "https://candybar.snackcrate.com/wp-content/uploads/2022/08/Korea_DinoGummies_482x482_.png",
      bundleId: korean.id,
    }),
    Product.create({
      name: "Nongshim Jjolbyeong Snack",
      imageURL:
        "https://candybar.snackcrate.com/wp-content/uploads/2022/08/Korea_Jjolbyeong_482x482_.png",
      bundleId: korean.id,
    }),
    Product.create({
      name: "Haitai Grape Candy",
      imageURL:
        "https://candybar.snackcrate.com/wp-content/uploads/2022/08/Korea_GrapeCandy_482x482_.png",
      bundleId: korean.id,
    }),
    Product.create({
      name: "Gavottes Crepes Chocolates",
      imageURL:
        "https://candybar.snackcrate.com/wp-content/uploads/2021/11/France_Crepe_Dentelle_482x482_.png",
      bundleId: french.id,
    }),
    Product.create({
      name: "La Trinitaine Galette Pur Beurre",
      imageURL:
        "https://candybar.snackcrate.com/wp-content/uploads/2021/11/France_Galette_482x482_.png",
      bundleId: french.id,
    }),
    Product.create({
      name: "Lays Bolognaise",
      imageURL:
        "https://candybar.snackcrate.com/wp-content/uploads/2022/01/France_Saveur_Bolognaise_482x482_.png",
      bundleId: french.id,
    }),
    Product.create({
      name: "Lays Chips Poulet",
      imageURL:
        "https://candybar.snackcrate.com/wp-content/uploads/2021/11/France_Saveur_Poulet_482x482_.png",
      bundleId: french.id,
    }),
    Product.create({
      name: "Sucettes Fer De Lance Caremel Recharge",
      imageURL:
        "https://candybar.snackcrate.com/wp-content/uploads/2021/11/France_Caramel_Sucka_482x482_.png",
      bundleId: french.id,
    }),
    Product.create({
      name: "Orangina Drink",
      imageURL:
        "https://candybar.snackcrate.com/wp-content/uploads/2021/11/France_Orangina_482x482_.png",
      bundleId: french.id,
    }),
    Product.create({
      name: "Lu Petit Ecolier Poche",
      imageURL:
        "https://candybar.snackcrate.com/wp-content/uploads/2021/11/France_PetiteColier_Box_482x482_.png",
      bundleId: french.id,
    }),
    Product.create({
      name: "St. Michel Madelines",
      imageURL:
        "https://candybar.snackcrate.com/wp-content/uploads/2021/11/France_Madeleines_482x482_.png",
      bundleId: french.id,
    }),
    Product.create({
      name: "Sundy Bar",
      imageURL:
        "https://candybar.snackcrate.com/wp-content/uploads/2021/11/France_Sunday_482x482_.png",
      bundleId: french.id,
    }),
    Product.create({
      name: "Carambar Krema",
      imageURL:
        "https://candybar.snackcrate.com/wp-content/uploads/2021/11/France_Krema_Regalad_482x482_.png",
      bundleId: french.id,
    }),
    Product.create({
      name: "Thrills Chewing Gum",
      imageURL:
        "https://candybar.snackcrate.com/wp-content/uploads/2021/09/Canada_Thrills_Gum_482x482_.png",
      bundleId: canadian.id,
    }),
    Product.create({
      name: "Aero Peppermint",
      imageURL:
        "https://candybar.snackcrate.com/wp-content/uploads/2021/08/Canada_Aero_Peppermint_482x482_.png",
      bundleId: canadian.id,
    }),
    Product.create({
      name: "Humpty Dumpty Bacon Hickory Sticks",
      imageURL:
        "https://candybar.snackcrate.com/wp-content/uploads/2021/09/Canada_Humpty_Dumpty_482x482_.png",
      bundleId: canadian.id,
    }),
    Product.create({
      name: "Bear Paws",
      imageURL:
        "https://candybar.snackcrate.com/wp-content/uploads/2021/08/Canada_Banana_Bread_482x482_.png",
      bundleId: canadian.id,
    }),
    Product.create({
      name: "Bec Cola",
      imageURL:
        "https://candybar.snackcrate.com/wp-content/uploads/2021/09/Canada_Bec_Cola_233x189_-1.png",
      bundleId: canadian.id,
    }),
    Product.create({
      name: "Cadbury Caramilk",
      imageURL:
        "https://candybar.snackcrate.com/wp-content/uploads/2021/09/Canada_Caramilk_482x482_.png",
      bundleId: canadian.id,
    }),
    Product.create({
      name: "Nestle Coffee Crisp",
      imageURL:
        "https://candybar.snackcrate.com/wp-content/uploads/2021/09/Canada_Coffee_Crisp_482x482_.png",
      bundleId: canadian.id,
    }),
    Product.create({
      name: "Covered Bridge Creamy Dill Pickle",
      imageURL:
        "https://candybar.snackcrate.com/wp-content/uploads/2021/09/Canada_Cover_Bridge_Chips_482x482_-1.png",
      bundleId: canadian.id,
    }),
    Product.create({
      name: "Cadbury Crispy Crunch",
      imageURL:
        "https://candybar.snackcrate.com/wp-content/uploads/2021/09/Canada_Crispy_Crunch_482x482_.png",
      bundleId: canadian.id,
    }),
    Product.create({
      name: "Crush Cream Soda",
      imageURL:
        "https://candybar.snackcrate.com/wp-content/uploads/2021/09/Canada_Crush_482x482_.png",
      bundleId: canadian.id,
    }),
    Product.create({
      name: "Kit Kat Big Little Pouch Original",
      imageURL:
        "https://candybar.snackcrate.com/wp-content/uploads/2021/09/KitKat_Big_482x482_082321.png",
      bundleId: kitkat.id,
    }),
    Product.create({
      name: "Kit Kat Big Little Pouch Strawberry",
      imageURL:
        "https://candybar.snackcrate.com/wp-content/uploads/2021/09/KitKat_Strawberry_Balls_482x482_082321.png",
      bundleId: kitkat.id,
    }),
    Product.create({
      name: "Kit Kat Chunky Aero Mint",
      imageURL:
        "https://candybar.snackcrate.com/wp-content/uploads/2021/09/KitKat_Chunky_Aero_482x482_082321.png",
      bundleId: kitkat.id,
    }),
    Product.create({
      name: "Nestle Kit Kat Chunky Duo",
      imageURL:
        "https://candybar.snackcrate.com/wp-content/uploads/2021/09/KitKat_Chunky_Duo_482x482_082321.png",
      bundleId: kitkat.id,
    }),
    Product.create({
      name: "Nestle Kit Kat Chunky Peanut Butter",
      imageURL:
        "https://candybar.snackcrate.com/wp-content/uploads/2021/09/KitKat_Chunky_PeanutButter_482x482_082321.png",
      bundleId: kitkat.id,
    }),
    Product.create({
      name: "Nestle – Kit Kat Chunky Popcorn",
      imageURL:
        "https://candybar.snackcrate.com/wp-content/uploads/2021/08/KitKat_Chunky_Popcorn_482x482_082321.png",
      bundleId: kitkat.id,
    }),
    Product.create({
      name: "Nestle Kit Kat Dark Mint",
      imageURL:
        "https://candybar.snackcrate.com/wp-content/uploads/2021/09/KitKat_Dark_Mint_482x482_082321.png",
      bundleId: kitkat.id,
    }),
    Product.create({
      name: "Nestle Kit Kat Gold",
      imageURL:
        "https://candybar.snackcrate.com/wp-content/uploads/2022/02/KitKatGold_482x482_.png",
      bundleId: kitkat.id,
    }),
    Product.create({
      name: "Nestle Kit Kat Hazelnut Spread",
      imageURL:
        "https://candybar.snackcrate.com/wp-content/uploads/2021/09/KitKat_Hazelnut_482x482_082321.png",
      bundleId: kitkat.id,
    }),
    Product.create({
      name: "Nestle Kit Kat Honeycomb",
      imageURL:
        "https://candybar.snackcrate.com/wp-content/uploads/2021/09/KitKat_Honeycomb_482x482_082321.png",
      bundleId: kitkat.id,
    }),

    Product.create({
      name: "Goetze Oreo Cow Tale",
      imageURL:
        "https://candybar.snackcrate.com/wp-content/uploads/2021/09/Oreo_Cow_Tales_482x482_.png",
      bundleId: oreo.id,
    }),
    Product.create({
      name: "Nabisco Oreo – Red Velvet",
      imageURL:
        "https://candybar.snackcrate.com/wp-content/uploads/2022/08/Korea_OreoRedVelvet_482x482_.png",
      bundleId: oreo.id,
    }),
    Product.create({
      name: "Cadbury Dairy Milk Oreo Eggs",
      imageURL:
        "https://candybar.snackcrate.com/wp-content/uploads/2021/09/Halloween_Oreo_Eggs_482x482_.png",
      bundleId: oreo.id,
    }),
    Product.create({
      name: "Excelo Eyoo Double Cream",
      imageURL:
        "https://candybar.snackcrate.com/wp-content/uploads/2021/09/Morocco_Eyoo_482x482_082321.png",
      bundleId: oreo.id,
    }),
    Product.create({
      name: "Bis Lacta Bis Oreo",
      imageURL:
        "https://candybar.snackcrate.com/wp-content/uploads/2021/09/Oreo_Bis_482x482_.png",
      bundleId: oreo.id,
    }),
    Product.create({
      name: "Cadbury Oreo Birthday Party",
      imageURL:
        "https://candybar.snackcrate.com/wp-content/uploads/2021/09/Oreo_Birthday_482x482_.png",
      bundleId: oreo.id,
    }),
    Product.create({
      name: "Cadbury Oreo Bites",
      imageURL:
        "https://candybar.snackcrate.com/wp-content/uploads/2021/09/Oreo_Bites_482x482_.png",
      bundleId: oreo.id,
    }),
    Product.create({
      name: "Oreo Green Tea Ice Cream",
      imageURL:
        "https://candybar.snackcrate.com/wp-content/uploads/2021/09/Oreo_Green_Tea_482x482_.png",
      bundleId: oreo.id,
    }),
    Product.create({
      name: "Oreo Ice Cream",
      imageURL:
        "https://candybar.snackcrate.com/wp-content/uploads/2021/09/Oreo_Ice_Cream_482x482_.png",
      bundleId: oreo.id,
    }),
    Product.create({
      name: "Oreo Thin Tiramisu",
      imageURL:
        "https://candybar.snackcrate.com/wp-content/uploads/2021/09/Oreo_Tiramisu_482x482_.png",
      bundleId: oreo.id,
    }),

    Product.create({
      name: "Vidal Christmas Trees",
      imageURL:
        "https://candybar.snackcrate.com/wp-content/uploads/2021/11/Holiday_Christmas_Trees_482x482_.png",
      bundleId: christmas.id,
    }),
    Product.create({
      name: "Nestle Sno-Caps Chocolate",
      imageURL:
        "https://www.candywarehouse.com/item-images/128546-01_sno-caps-chocolate-nonpareils-candy-theater-packs-15-piece-box.jpg?resizeid=104&resizeh=1000&resizew=1000",
      bundleId: christmas.id,
    }),
    Product.create({
      name: "Haribo Perl-Kugeln",
      imageURL:
        "https://candybar.snackcrate.com/wp-content/uploads/2021/11/Holiday_Perl_Kuglen_482x482_.png",
      bundleId: christmas.id,
    }),
    Product.create({
      name: "Vidal Santa",
      imageURL:
        "https://candybar.snackcrate.com/wp-content/uploads/2021/11/Holiday_Santa_482x482_.png",
      bundleId: christmas.id,
    }),
    Product.create({
      name: "Ferrero Raffaello Candy Balls",
      imageURL:
        "https://www.candywarehouse.com/item-images/127149-01_ferrero-raffaello-candy-balls-9-piece-box.jpg?resizeid=104&resizeh=1000&resizew=1000",
      bundleId: christmas.id,
    }),
    Product.create({
      name: "Kit Kat Duos Holiday",
      imageURL:
        "https://www.candywarehouse.com/item-images/161226-01_kit-kat-duos-holiday-mint-dark-chocolate-snack-size-candy-bars-8-8-ounce-bag.jpg?resizeid=104&resizeh=1000&resizew=1000",
      bundleId: christmas.id,
    }),
    Product.create({
      name: "Christmas Snickers Minis",
      imageURL:
        "https://www.candywarehouse.com/item-images/127461-01_christmas-snickers-minis-assortment-50-piece-bag.jpg?resizeid=104&resizeh=1000&resizew=1000",
      bundleId: christmas.id,
    }),
    Product.create({
      name: "Milky Way Simply Snowman",
      imageURL:
        "https://www.candywarehouse.com/item-images/133770-01_milky-way-simply-caramel-snowman-christmas-candy-bars-24-piece-box.jpg?resizeid=104&resizeh=1000&resizew=1000",
      bundleId: christmas.id,
    }),
    Product.create({
      name: "Hershey's Kisses Sugar Cookie",
      imageURL:
        "https://www.candywarehouse.com/item-images/161220-01_hersheys-kisses-sugar-cookie-candy-9-ounce-bag.jpg?resizeid=104&resizeh=1000&resizew=1000",
      bundleId: christmas.id,
    }),
    Product.create({
      name: "Jolly Rancher Candy Cane",
      imageURL:
        "https://www.candywarehouse.com/item-images/131537-01_jolly-rancher-christmas-assortment-candy-cane.jpg?resizeid=104&resizeh=1000&resizew=1000",
      bundleId: christmas.id,
    }),

    Product.create({
      name: "Indy Mini Dedos Spicy and Sour Candy",
      imageURL:
        "https://www.candywarehouse.com/item-images/160968-01_indy-mini-dedos-spicy-and-sour-mexican-candy-50-0.28oz-bags.jpg?resizeid=104&resizeh=1000&resizew=1000",
      bundleId: spicy.id,
    }),
    Product.create({
      name: "Ulker Krispi Taco",
      imageURL:
        "https://candybar.snackcrate.com/wp-content/uploads/2022/06/Turkey_KrispiTaco_482x482_.png",
      bundleId: spicy.id,
    }),
    Product.create({
      name: "Vidal Spicy Mangoes",
      imageURL:
        "https://candybar.snackcrate.com/wp-content/uploads/2021/08/Spain_Spicy_Mangos_482x482_.png",
      bundleId: spicy.id,
    }),
    Product.create({
      name: "Lucas Skwinkles Rellenos Chili Candy Pack",
      imageURL:
        "https://www.candywarehouse.com/item-images/134433-01_lucas-skwinkles-chili-candy-packs-12-piece-box.jpg?resizeid=104&resizeh=1000&resizew=1000",
      bundleId: spicy.id,
    }),
    Product.create({
      name: "Vero Sandi Brochas Rellenas Lollipops",
      imageURL:
        "https://www.candywarehouse.com/item-images/161173-01_vero-sandi-brochas-rellenas-lollipops-40-piece-bag.jpg?resizeid=104&resizeh=1000&resizew=1000",
      bundleId: spicy.id,
    }),
    Product.create({
      name: "Tao Kae Noi Big Roll Spicy",
      imageURL:
        "https://candybar.snackcrate.com/wp-content/uploads/2021/08/Thailand_Seaweed_Red_Spicy_482x482_082421.png",
      bundleId: spicy.id,
    }),
    Product.create({
      name: "Walker’s Monster Munch Flaming Hot",
      imageURL:
        "https://candybar.snackcrate.com/wp-content/uploads/2021/09/Halloween_MM_Flaming_482x482_.png",
      bundleId: spicy.id,
    }),
    Product.create({
      name: "De La Rosa Mango Pulparindo Candy",
      imageURL:
        "https://www.candywarehouse.com/item-images/160970-01_de-la-rosa-mango-pulparindo-candy-20-piece-box.jpeg?resizeid=104&resizeh=1000&resizew=1000",
      bundleId: spicy.id,
    }),
    Product.create({
      name: "Oishi Spicy Seafood Curls",
      imageURL:
        "https://candybar.snackcrate.com/wp-content/uploads/2022/06/Phil_SeafoodCurls_482x482_.png",
      bundleId: spicy.id,
    }),
    Product.create({
      name: "Jolly Rancher Hotties Hard Candy",
      imageURL:
        "https://www.candywarehouse.com/item-images/129115-01_jolly-rancher-hotties-hard-candy-13-ounce-bag.jpg?resizeid=104&resizeh=1000&resizew=1000",
      bundleId: spicy.id,
    }),

    Product.create({
      name: "Brets Chips Chevre Piment d’Espelette",
      imageURL:
        "https://candybar.snackcrate.com/wp-content/uploads/2021/11/France_Brets_482x482_.png",
      bundleId: chips.id,
    }),
    Product.create({
      name: "Egypt Foods Waves Chili and Lemon",
      imageURL:
        "https://candybar.snackcrate.com/wp-content/uploads/2021/10/Egypt_Waves_Chili_Lemon_482x482_.png",
      bundleId: chips.id,
    }),
    Product.create({
      name: "Frito-Lay Doritos Bits BBQ",
      imageURL:
        "https://candybar.snackcrate.com/wp-content/uploads/2022/03/Portugal_DoritosBBQ_482x482_.png",
      bundleId: chips.id,
    }),
    Product.create({
      name: "Ruffles All Dressed Chips",
      imageURL:
        "https://candybar.snackcrate.com/wp-content/uploads/2021/09/Canada_Ruffles_All_Dressed_482x482_.png",
      bundleId: chips.id,
    }),
    Product.create({
      name: "Walker’s Frazzles",
      imageURL:
        "https://candybar.snackcrate.com/wp-content/uploads/2021/11/UK_Frazzles_482x482_.png",
      bundleId: chips.id,
    }),
    Product.create({
      name: "Haitai Honey Butter Chips",
      imageURL:
        "https://candybar.snackcrate.com/wp-content/uploads/2022/08/Korea_HoneyButterChips_482x482_.png",
      bundleId: chips.id,
    }),
    Product.create({
      name: "Lays Bolognaise",
      imageURL:
        "https://candybar.snackcrate.com/wp-content/uploads/2022/01/France_Saveur_Bolognaise_482x482_.png",
      bundleId: chips.id,
    }),
    Product.create({
      name: "Lays Ketchup Chips",
      imageURL:
        "https://candybar.snackcrate.com/wp-content/uploads/2021/09/Canada_Ketchup_Chips_482x482_.png",
      bundleId: chips.id,
    }),
    Product.create({
      name: "Cirque Lionel Shots Pizza",
      imageURL:
        "https://candybar.snackcrate.com/wp-content/uploads/2021/09/Morocco_Lionel_Shot_482x482_082321.png",
      bundleId: chips.id,
    }),
    Product.create({
      name: "Frito-Lay Ruffles Presunto",
      imageURL:
        "https://candybar.snackcrate.com/wp-content/uploads/2022/03/Portugal_RufflesPresunto_482x482_.png",
      bundleId: chips.id,
    }),

    Product.create({
      name: "Thrills Chewing Gum",
      imageURL:
        "https://candybar.snackcrate.com/wp-content/uploads/2021/09/Canada_Thrills_Gum_482x482_.png",
      bundleId: gum.id,
    }),
    Product.create({
      name: "Puchao Bubbly Soda Gummy Candy",
      imageURL:
        "https://www.candywarehouse.com/item-images/134663-01_Puchao_Soda.jpg?resizeid=104&resizeh=1000&resizew=1000",
      bundleId: gum.id,
    }),
    Product.create({
      name: "Canel's Miniature Chewing Gum",
      imageURL:
        "https://www.candywarehouse.com/item-images/129344-01_canels-miniature-chewing-gum-220-piece-bag.jpg?resizeid=104&resizeh=1000&resizew=1000",
      bundleId: gum.id,
    }),
    Product.create({
      name: "Flash Gum Watermelon",
      imageURL:
        "https://candybar.snackcrate.com/wp-content/uploads/2021/09/Morocco_Flash_Watermelon_482x482_082321.png",
      bundleId: gum.id,
    }),
    Product.create({
      name: "Jila Sugar Free Peppermint Gum Packs",
      imageURL:
        "https://www.candywarehouse.com/item-images/127084-01_jila-sugar-free-peppermint-gum-packs-12-piece-box.jpg?resizeid=104&resizeh=1000&resizew=1000",
      bundleId: gum.id,
    }),
    Product.create({
      name: "Dubble Bubble Big Bar Bubblegum",
      imageURL:
        "https://www.candywarehouse.com/item-images/126439-01_dubble-bubble-3-ounce-bubblegum-big-bars-24-piece-box.jpg?resizeid=104&resizeh=1000&resizew=1000",
      bundleId: gum.id,
    }),
    Product.create({
      name: "Chiclets Chewing Gum Snack Packs",
      imageURL:
        "https://www.candywarehouse.com/item-images/132780-01_chiclets-chewing-gum-snack-packs-200-piece-box.jpg?resizeid=104&resizeh=1000&resizew=1000",
      bundleId: gum.id,
    }),
    Product.create({
      name: "Bazooka Original Bubblegum 10-Piece Packs",
      imageURL:
        "https://www.candywarehouse.com/item-images/128761-01_bazooka-original-bubblegum-10-piece-packs-12-piece-box.jpg?resizeid=104&resizeh=1000&resizew=1000",
      bundleId: gum.id,
    }),
    Product.create({
      name: "Gorilo Mixed Flavors",
      imageURL:
        "https://candybar.snackcrate.com/wp-content/uploads/2022/03/Portugal_GoriloBag_482x482_.png",
      bundleId: gum.id,
    }),
    Product.create({
      name: "Big League Chew Bubble Gum Packs - Original",
      imageURL:
        "https://www.candywarehouse.com/item-images/125125-01_original-big-league-chew-bubble-gum-packs-12-piece-box.jpg?resizeid=104&resizeh=1000&resizew=1000",
      bundleId: gum.id,
    }),

    Product.create({
      name: "Canel's Miniature Chewing Gum",
      imageURL:
        "https://www.candywarehouse.com/item-images/129344-01_canels-miniature-chewing-gum-220-piece-bag.jpg?resizeid=104&resizeh=1000&resizew=1000",
      bundleId: glutenfree.id,
    }),
    Product.create({
      name: "Big League Chew Bubble Gum Packs - Original",
      imageURL:
        "https://www.candywarehouse.com/item-images/125125-01_original-big-league-chew-bubble-gum-packs-12-piece-box.jpg?resizeid=104&resizeh=1000&resizew=1000",
      bundleId: glutenfree.id,
    }),
    Product.create({
      name: "Lucas Skwinkles Rellenos Chili Candy Packs",
      imageURL:
        "https://www.candywarehouse.com/item-images/134433-01_lucas-skwinkles-chili-candy-packs-12-piece-box.jpg?resizeid=104&resizeh=1000&resizew=1000",
      bundleId: glutenfree.id,
    }),
    Product.create({
      name: "Jellico Dinosaur Gummies",
      imageURL:
        "https://candybar.snackcrate.com/wp-content/uploads/2022/08/Korea_DinoGummies_482x482_.png",
      bundleId: glutenfree.id,
    }),
    Product.create({
      name: "De La Rosa Mango Pulparindo Candy",
      imageURL:
        "https://www.candywarehouse.com/item-images/160970-01_de-la-rosa-mango-pulparindo-candy-20-piece-box.jpeg?resizeid=104&resizeh=1000&resizew=1000",
      bundleId: glutenfree.id,
    }),
    Product.create({
      name: "Haitai Grape Candy",
      imageURL:
        "https://candybar.snackcrate.com/wp-content/uploads/2022/08/Korea_GrapeCandy_482x482_.png",
      bundleId: glutenfree.id,
    }),
    Product.create({
      name: "Ahoj-Brause Ahoj-Bonbons",
      imageURL:
        "https://candybar.snackcrate.com/wp-content/uploads/2022/04/Germany_BonBons_482x482_.png",
      bundleId: glutenfree.id,
    }),
    Product.create({
      name: "Aiguebelle Chocolate Au Lait",
      imageURL:
        "https://candybar.snackcrate.com/wp-content/uploads/2021/09/Morocco_Delice_482x482_082321.png",
      bundleId: glutenfree.id,
    }),
    Product.create({
      name: "Kit Kat Big Little Pouch Original",
      imageURL:
        "https://candybar.snackcrate.com/wp-content/uploads/2021/09/KitKat_Big_482x482_082321.png",
      bundleId: glutenfree.id,
    }),
    Product.create({
      name: "Fini Bananas",
      imageURL:
        "https://candybar.snackcrate.com/wp-content/uploads/2022/03/Portugal_JellyBananas_482x482_.png",
      bundleId: glutenfree.id,
    }),

    Product.create({
      name: "Fini Bananas",
      imageURL:
        "https://candybar.snackcrate.com/wp-content/uploads/2022/03/Portugal_JellyBananas_482x482_.png",
      bundleId: vegan.id,
    }),
    Product.create({
      name: "Lays Bolognaise",
      imageURL:
        "https://candybar.snackcrate.com/wp-content/uploads/2022/01/France_Saveur_Bolognaise_482x482_.png",
      bundleId: vegan.id,
    }),
    Product.create({
      name: "Lucas Skwinkles Rellenos Chili Candy Packs",
      imageURL:
        "https://www.candywarehouse.com/item-images/134433-01_lucas-skwinkles-chili-candy-packs-12-piece-box.jpg?resizeid=104&resizeh=1000&resizew=1000",
      bundleId: vegan.id,
    }),
    Product.create({
      name: "Jila Sugar Free Peppermint Gum Packs",
      imageURL:
        "https://www.candywarehouse.com/item-images/127084-01_jila-sugar-free-peppermint-gum-packs-12-piece-box.jpg?resizeid=104&resizeh=1000&resizew=1000",
      bundleId: vegan.id,
    }),
    Product.create({
      name: "De La Rosa Mango Pulparindo Candy",
      imageURL:
        "https://www.candywarehouse.com/item-images/160970-01_de-la-rosa-mango-pulparindo-candy-20-piece-box.jpeg?resizeid=104&resizeh=1000&resizew=1000",
      bundleId: vegan.id,
    }),
    Product.create({
      name: "Haitai Grape Candy",
      imageURL:
        "https://candybar.snackcrate.com/wp-content/uploads/2022/08/Korea_GrapeCandy_482x482_.png",
      bundleId: vegan.id,
    }),
    Product.create({
      name: "Bear Paws",
      imageURL:
        "https://candybar.snackcrate.com/wp-content/uploads/2021/08/Canada_Banana_Bread_482x482_.png",
      bundleId: vegan.id,
    }),
    Product.create({
      name: "De La Rosa Mango Pulparindo Candy",
      imageURL:
        "https://www.candywarehouse.com/item-images/160970-01_de-la-rosa-mango-pulparindo-candy-20-piece-box.jpeg?resizeid=104&resizeh=1000&resizew=1000",
      bundleId: vegan.id,
    }),
    Product.create({
      name: "Lays Ketchup Chips",
      imageURL:
        "https://candybar.snackcrate.com/wp-content/uploads/2021/09/Canada_Ketchup_Chips_482x482_.png",
      bundleId: vegan.id,
    }),
    Product.create({
      name: "Big League Chew Bubble Gum Packs - Original",
      imageURL:
        "https://www.candywarehouse.com/item-images/125125-01_original-big-league-chew-bubble-gum-packs-12-piece-box.jpg?resizeid=104&resizeh=1000&resizew=1000",
      bundleId: vegan.id,
    }),
    //
    Product.create({
      name: "Gummy Chicken Feet: 2KG Bag",
      imageURL:
        "https://www.candywarehouse.com/item-images/132409-01_pumpkin-pie-almonds-candy-5lb-bag.jpg?resizeid=104&resizeh=1000&resizew=1000",
      bundleId: thanksgiving.id,
    }),
    ,
    Product.create({
      name: "Thompson Foiled Turkey 3.5-Ounce Milk Chocolates",
      imageURL:
        "https://www.candywarehouse.com/item-images/132419-01_foiled-milk-chocolate-thanksgiving-turkeys-15-piece-display.jpg?resizeid=104&resizeh=1000&resizew=1000",
      bundleId: thanksgiving.id,
    }),
    ,
    Product.create({
      name: "Zachary Autumn Mix: 16-Ounce Tub",
      imageURL:
        "https://www.candywarehouse.com/item-images/134131-01_zachary-autumn-mix-16-ounce-tub.jpg?resizeid=104&resizeh=1000&resizew=1000",
      bundleId: thanksgiving.id,
    }),
    ,
    Product.create({
      name: "Brach's Autumn Mix Candy Corn",
      imageURL:
        "https://www.candywarehouse.com/item-images/130053-01_brachs-autumn-mix-candy-corn-40-ounce-bag.jpg?resizeid=104&resizeh=1000&resizew=1000",
      bundleId: thanksgiving.id,
    }),
    ,
    Product.create({
      name: "Turkey Lollipops",
      imageURL:
        "https://www.candywarehouse.com/item-images/129500-01_turkey-lollipops-24-piece-box.jpg?resizeid=104&resizeh=1000&resizew=1000",
      bundleId: thanksgiving.id,
    }),
    ,
    Product.create({
      name: "Creepy Cocoa Crisp M&M's Halloween Candy",
      imageURL:
        "https://www.candywarehouse.com/item-images/129259-01_creepy-cocoa-crisp-mms-halloween-candy-8-ounce-bag.jpg?resizeid=104&resizeh=1000&resizew=1000",
      bundleId: thanksgiving.id,
    }),
    ,
    Product.create({
      name: "Squire Boone Giant Turkey with 96 Lollipop Feathers",
      imageURL:
        "https://www.candywarehouse.com/item-images/125695-01_squire-boone-giant-turkey-with-96-lollipop-feathers.jpg?resizeid=104&resizeh=1000&resizew=1000",
      bundleId: thanksgiving.id,
    }),
    ,
    Product.create({
      name: "Pumpkin Spice Hard Candy Sticks",
      imageURL:
        "https://www.candywarehouse.com/item-images/127570-01_pumpkin-spice-hard-candy-sticks-100-piece-box.jpg?resizeid=104&resizeh=1000&resizew=1000",
      bundleId: thanksgiving.id,
    }),
    ,
    Product.create({
      name: "Thanksgiving Turkey Pinata",
      imageURL:
        "https://www.candywarehouse.com/item-images/128664-01_thanksgiving-turkey-pinata.jpg?resizeid=104&resizeh=1000&resizew=1000",
      bundleId: thanksgiving.id,
    }),
    //
    Product.create({
      name: "Petite Pufflettes Gummy Bites - Orange: 5LB Bag",
      imageURL:
        "https://www.candywarehouse.com/item-images/130811-01_banana-laffy-taffy-candy-145-piece-tub.jpg?resizeid=104&resizeh=1000&resizew=1000",
      bundleId: halloween.id,
    }),
    Product.create({
      name: "Halloween Dove Pumpkins Foiled Dark Chocolates",
      imageURL:
        "https://www.candywarehouse.com/item-images/161068-01_halloween-dove-pumpkins-foiled-dark-chocolates-30-piece-bag.jpg?resizeid=104&resizeh=1000&resizew=1000",
      bundleId: halloween.id,
    }),
    Product.create({
      name: "Bee International Bloody Bites Candy Fangs",
      imageURL:
        "https://www.candywarehouse.com/item-images/131354-01_bloody-bites-candy-fangs-24-piece-box.jpg?resizeid=104&resizeh=1000&resizew=1000",
      bundleId: halloween.id,
    }),
    Product.create({
      name: "Efrutti Gummy Pizza Candy Packs",
      imageURL:
        "https://www.candywarehouse.com/item-images/125822-01_efrutti-gummy-pizza-candy-packs-48-piece-box.jpg?resizeid=104&resizeh=1000&resizew=1000",
      bundleId: halloween.id,
    }),
    Product.create({
      name: "WarHeads Sour Chewy Cubes Candy Snack Pack",
      imageURL:
        "https://www.candywarehouse.com/item-images/133352-01_warheads-sour-chewy-cubes-candy-snack-packs-2lb-bag.jpg?resizeid=104&resizeh=1000&resizew=1000",
      bundleId: halloween.id,
    }),
    Product.create({
      name: "Jelly Belly Candy Corn: 7.5-Ounce Bag",
      imageURL:
        "https://www.candywarehouse.com/item-images/128632-01_jelly-belly-candy-corn-7-5-ounce-bag.jpg?resizeid=104&resizeh=1000&resizew=1000",
      bundleId: halloween.id,
    }),
    Product.create({
      name: "Jelly Belly Harry Potter Chocolate Magic Wand",
      imageURL:
        "https://www.candywarehouse.com/item-images/134365-01_jelly-belly-harry-potter-chocolate-magic-wand.jpg?resizeid=104&resizeh=1000&resizew=1000",
      bundleId: halloween.id,
    }),
    Product.create({
      name: "Gummy Centipedes Candy",
      imageURL:
        "https://www.candywarehouse.com/item-images/125857-01_haribo-gummi-centipedes-candy-5lb-bag.jpg?resizeid=104&resizeh=1000&resizew=1000",
      bundleId: halloween.id,
    }),
    Product.create({
      name: "Bee International Skull Tins with Smarties",
      imageURL:
        "https://www.candywarehouse.com/item-images/129473-01_bee-international-skull-tins-smarties-12-piece-box.jpg?resizeid=104&resizeh=1000&resizew=1000",
      bundleId: halloween.id,
    }),
  ]);

	const [moehome, moework] = await Promise.all([
		Address.create({
			label: 'Home',
			street1: '123 Fake Street',
			street2: '4E',
			city: 'New York',
			state: 'NY',
			zipcode: '10001',
			userId: moe.id,
			country: 'United States',
		}),
		Address.create({
			label: 'Work',
			street1: '555 West Street',
			street2: '',
			city: 'Hudson',
			state: 'NY',
			zipcode: '10001',
			userId: moe.id,
			country: 'United States',
		}),
	]);

	await Promise.all([
		Address.create({
			label: 'Home',
			street1: '179 205th Street',
			street2: '',
			city: 'New York',
			state: 'NY',
			zipcode: '10001',
			userId: ethyl.id,
			country: 'United States',
		}),
		Address.create({
			label: 'Country House',
			street1: '4 Sunny Lane',
			street2: '',
			city: 'Beacon',
			state: 'NY',
			zipcode: '10001',
			userId: larry.id,
			country: 'United States',
		}),
		Address.create({
			label: 'Home',
			street1: '100 South Street',
			street2: '',
			city: 'Great Barrington',
			state: 'MA',
			zipcode: '55555',
			userId: lucy.id,
			country: 'United States',
		}),
	]);

	return {
		users: {
			moe,
			lucy,
			larry,
			ethyl,
		},
		bundle: {
			korean,
			french,
			canadian,
			kitkat,
			oreo,
			christmas,
			spicy,
			chips,
			gum,
			glutenfree,
			vegan,
		},
	};
};

module.exports = {
  syncAndSeed,
  User,
  Bundle,
  Product,
  Address,
};
