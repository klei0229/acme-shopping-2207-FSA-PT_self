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
      username: "moe",
      password: "123",
      avatar,
      firstName: "Moe",
      lastName: "Stooge",
      email: "moe@gmail.com",
    }),
    User.create({
      username: "lucy",
      password: "123",
      firstName: "Lucy",
      lastName: "Lawless",
      email: "xena@gmail.com",
    }),
    User.create({
      username: "larry",
      password: "123",
      firstName: "Larry",
      lastName: "Stooge",
      email: "larry@gmail.com",
    }),
    User.create({
      username: "ethyl",
      password: "123",
      firstName: "Ethyl",
      lastName: "Stooge",
      email: "ethyl@gmail.com",
    }),
    Bundle.create({
      name: "Korean Snack Bundle",
      imageUrl:
        "https://images.unsplash.com/photo-1588756264692-d396bca41fb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      price: 35.0,
      type: "featured",
      description:
        "Transport your taste buds to the vibrant streets of Seoul with our irresistible Korean Snack Bundle. Bursting with authentic flavors and delightful textures, this bundle is a tantalizing journey through the rich culinary heritage of Korea.",
      descriptionShort: "Our all time favourite!",
      tag: "international",
    }),
    Bundle.create({
      name: "French Snack Bundle",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1675033559019-ca61c6e909df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=663&q=80",
      price: 50.0,
      type: "best",
      description:
        "Experience the art of snacking with our delectable French Snack Bundle. Inspired by the sophisticated charm of French cuisine, this collection combines gourmet flavors and refined craftsmanship.",
      descriptionShort: "More than crepes and croissants",
      tag: "international,sweet tooth",
    }),
    Bundle.create({
      name: "Canadian Snack Bundle",
      imageUrl:
        "https://images.unsplash.com/photo-1633158832466-be592c721217?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      price: 40.0,
      type: "featured",
      description:
        "Embark on a culinary journey across the vast landscapes of Canada with our irresistible Canadian Snack Bundle. Packed with iconic flavors and regional specialties, this bundle captures the essence of Canadian snacking.",
      descriptionShort: "This bundle is a moost!",
      tag: "healthy,international",
    }),
    Bundle.create({
      name: "Kitkat Snack Bundle",
      imageUrl:
        "https://images.unsplash.com/photo-1524753876525-377f0b16b2a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1052&q=80",
      price: 30.0,
      type: "new",
      description:
        "There's a reason KitKat is enjoyed in more than 80 countries. The iconic brand is an international symbol for hitting the pause button on life - to enjoy a well-earned break.",
      descriptionShort: "A balance of chocolate and wafer",
      tag: "international,kids",
    }),
    Bundle.create({
      name: "Oreo Variety Bundle",
      imageUrl:
        "https://images.unsplash.com/photo-1612343266975-3cc3e3927ef9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
      price: 30.0,
      type: "best",
      description: `'Super-sized and oh-so-soft to the touch'. We\'ve brought your OREO dreams to life with our exclusive OREO Pillow! Just open the "sleeve" and you'll find five removable cookie plushes.`,
      descriptionShort: "A must-have for the OREO obsessed",
      tag: "sweet tooth",
    }),
    Bundle.create({
      name: "Christmas Bundle",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1669386061620-1bc0eed91929?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      price: 50.0,
      type: "new",
      description:
        "This 45 count Christmas Care Package is filled with Candy, Snacks, and Toys - it is perfect to use for Stocking Stuffers! It's also the Perfect Gift for Anyone this Christmas!",
      descriptionShort: "Santa's favourite bundle",
      tag: "sweet tooth,seasonal",
    }),
    Bundle.create({
      name: "Spicy Snacks Package",
      imageUrl:
        "https://images.unsplash.com/photo-1554478299-725a76d9badc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80",
      price: 35.0,
      type: "new",
      description:
        "International Spicy Mystery Snack Box Perfect for gifting College Care Package and Birthday gifts. For Spicy lovers of all ages and people looking to try new things. Spicy snacks from all over the world.",
      descriptionShort: "For picante lovers",
      tag: "movie night",
    }),
    Bundle.create({
      name: "Chips Variety Package",
      imageUrl:
        "https://images.unsplash.com/photo-1566478989037-eec170784d0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      price: 30.0,
      type: "best",
      description:
        "Delight the taste buds of friends, family and co-workers with an assortment of chip flavors from around the world.",
      descriptionShort: "Not just any chips",
      tag: "movie night",
    }),
    Bundle.create({
      name: "Gum Variety Package",
      imageUrl:
        "https://images.unsplash.com/photo-1626283651073-e86d3fe24172?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      price: 20.0,
      type: "new",
      description:
        "Skip buying boxes of different gum when you can enjoy a variety of different gum from your favorite brands in just one box! With 160 packs, this purchase gives you plenty of treats to last a while.",
      descriptionShort: "A sweet refreshment for everyday",
      tag: "office snacks",
    }),
    Bundle.create({
      name: "Gluten Free Bundle",
      imageUrl:
        "https://images.unsplash.com/photo-1513790385082-670db4615c12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      price: 45.0,
      type: "new",
      description: `Every snack in this Premium Gift bag is curated for its quality, freshness and most importantly NO GLUTEN CONTAINING FOODS`,
      descriptionShort: "Truly gluten free",
      tag: "healthy,vegan and gluten-free",
    }),
    Bundle.create({
      name: "Vegan Bundle",
      imageUrl:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      price: 45.0,
      type: "best",
      description:
        "From vegan mac and cheese and delicious vegan chocolate, to avocado chips, hummus crackers and superfood smoothies, the Vegancuts Snack Box is your monthly delivery of the best vegan snacks and meal items, and drinks on the market.",
      descriptionShort: "Bundle powered by plants",
      tag: "vegan and gluten-free",
    }),
    Bundle.create({
      name: "Halloween Holiday Package",
      imageUrl:
        "https://images.unsplash.com/photo-1572860177022-8fda92a90c95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      price: 50.0,
      type: "featured",
      description: `If you want your house to be the favorite stop on your neighborhood’s trick-or-treating route, look no further than our Halloween-themed candy.`,
      descriptionShort: "Snack or treat, we got you on both",
      tag: "seasonal,sweet tooth",
    }),
    Bundle.create({
      name: "Thanksgiving Holiday Package",
      imageUrl:
        "https://images.unsplash.com/photo-1538883689728-2c32af36a313?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      price: 50.0,
      type: "new",
      description: `There’s plenty of dessert to go around with this tasty bundle. Wrapped in an orange bow, these holiday delights make a thoughtful gift for your Thanksgiving dinner host or for any occasion this autumn`,
      descriptionShort: "Curated with thankful vibes",
      tag: "season, sweet tooth",
    }),
    Bundle.create({
      name: "Movie Night Bundle",
      imageUrl:
        "https://images.unsplash.com/photo-1585647347483-22b66260dfff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      price: 50.0,
      type: "new",
      description: `Enjoy a perfect movie night at home with our Movie Night Bundle. Indulge in classic movie snacks like buttery popcorn, sweet candies, and refreshing beverages. Sit back, relax, and let the movie magic begin!`,
      descriptionShort: "a",
      tag: "movie night",
    }),
    Bundle.create({
      name: "Healthy Snack Bundle",
      imageUrl:
        "https://images.unsplash.com/photo-1477506350614-fcdc29a3b157?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhbHRoeSUyMHNuYWNrc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      price: 50.0,
      type: "new",
      description: `Nourish your body with our Healthy Snack Bundle. Packed with wholesome goodness, this bundle offers a variety of nutritious snacks such as granola bars, dried fruits, nuts, and organic chips. Discover tasty options that make healthy snacking a delight.`,
      descriptionShort: "a",
      tag: "healthy",
    }),
    Bundle.create({
      name: "International Snack Bundle",
      imageUrl:
        "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      price: 50.0,
      type: "new",
      description: `Embark on a global snacking adventure with our International Snack Bundle. Experience flavors from around the world as you indulge in popular treats and snacks from different countries.`,
      descriptionShort: "a",
      tag: "international",
    }),
    Bundle.create({
      name: "Sweet Tooth Bundle",
      imageUrl:
        "https://images.unsplash.com/photo-1504855101244-34edfbd4b861?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=709&q=80",
      price: 50.0,
      type: "new",
      description: `Satisfy your sweet cravings with our Sweet Tooth Bundle. Delight in an assortment of delectable treats like chocolates, cookies, and gourmet desserts.`,
      descriptionShort: "a",
      tag: "sweet tooth",
    }),
    Bundle.create({
      name: "Fitness Fuel Bundle",
      imageUrl:
        "https://images.unsplash.com/photo-1622484212850-eb596d769edc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      price: 50.0,
      type: "new",
      description: `Energize your workouts with our Fitness Fuel Bundle. Packed with protein bars, energy bites, and low-calorie snacks, this bundle provides the perfect balance of nutrition and flavor.`,
      descriptionShort: "a",
      tag: "healthy",
    }),
    Bundle.create({
      name: "Coffee Break Bundle",
      imageUrl:
        "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
      price: 50.0,
      type: "new",
      description: `Take a well-deserved break with our Coffee Break Bundle. Enjoy a moment of indulgence with a selection of premium coffee or tea along with perfectly paired snack items.`,
      descriptionShort: "a",
      tag: "office snacks",
    }),
    Bundle.create({
      name: "Office Snack Bundle",
      imageUrl:
        "https://images.unsplash.com/photo-1586436007886-7c708d868637?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      price: 50.0,
      type: "new",
      description: `Boost productivity and keep hunger at bay with our Office Snack Bundle. Designed for busy professionals, this bundle includes individually wrapped treats, trail mixes, and healthy office-friendly snacks. Stay fueled and focused throughout the workday.`,
      descriptionShort: "a",
      tag: "office snacks",
    }),
    Bundle.create({
      name: "Kids' Snack Bundle",
      imageUrl:
        "https://images.unsplash.com/photo-1590080875897-b7b65b2f73d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=861&q=80",
      price: 50.0,
      type: "new",
      description: `Treat the little ones to our Kids' Snack Bundle, specially curated with fun and tasty snacks. From fruity snacks to popcorn, mini cookies, and juice boxes, this bundle brings joy to snack time. Make every moment a delicious adventure for the kids.`,
      descriptionShort: "a",
      tag: "kids",
    }),
    Bundle.create({
      name: "Breakfast On-the-Go Bundle",
      imageUrl:
        "https://images.unsplash.com/photo-1494390248081-4e521a5940db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1106&q=80",
      price: 27.0,
      type: "new",
      description:
        "Start your day right with our Breakfast On-the-Go Bundle...",
      descriptionShort:
        "Start your day right with our bundle of quick and nutritious breakfast options...",
      tag: "office snacks",
    }),
    Bundle.create({
      name: "Cheese Lover's Bundle",
      imageUrl:
        "https://images.unsplash.com/photo-1625084561216-07dcebc2b233?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      price: 39.0,
      type: "new",
      description:
        "For cheese aficionados, our Cheese Lover's Bundle is a dream come true...",
      descriptionShort:
        "Indulge in a delightful selection of cheeses with our bundle for cheese lovers...",
      tag: "miscellaneous",
    }),
    Bundle.create({
      name: "Tropical Paradise Bundle",
      imageUrl:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80",
      price: 32.0,
      type: "new",
      description:
        "Transport yourself to a tropical paradise with our Tropical Paradise Bundle...",
      descriptionShort:
        "Transport yourself to a tropical paradise with our bundle of exotic snacks...",
      tag: "miscellaneous",
    }),

    Bundle.create({
      name: "Nut-Free Snack Bundle",
      imageUrl:
        "https://images.unsplash.com/photo-1640686161461-985d1fa39df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      price: 28.0,
      type: "new",
      description:
        "Catering to those with nut allergies or preferences, our Nut-Free Snack Bundle...",
      descriptionShort:
        "Enjoy a selection of nut-free snacks with our bundle catering to dietary needs...",
      tag: "miscellaneous",
    }),
    Bundle.create({
      name: "Student Survival Bundle",
      imageUrl:
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      price: 45.0,
      type: "new",
      description:
        "Designed to fuel students' studying sessions, our Student Survival Bundle...",
      descriptionShort:
        "Fuel your study sessions with our bundle designed for students...",
      tag: "miscellaneous",
    }),
    Bundle.create({
      name: "Gourmet Chocolate Bundle",
      imageUrl:
        "https://images.unsplash.com/photo-1658413382919-3457db79f9e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1483&q=80",
      price: 37.0,
      type: "new",
      description:
        "Indulge in the finest chocolate creations with our Gourmet Chocolate Bundle...",
      descriptionShort:
        "Indulge in a variety of gourmet chocolates with our bundle...",
      tag: "sweet tooth",
    }),
    Bundle.create({
      name: "Game Night Snack Bundle",
      imageUrl:
        "https://images.unsplash.com/photo-1609818698346-8cb3be6e0bc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      price: 23.0,
      type: "new",
      description:
        "Enhance your game night experience with our Game Night Snack Bundle...",
      descriptionShort:
        "Enhance your game night with our bundle of fun and shareable snacks...",
      tag: "movie night",
    }),
    Bundle.create({
      name: "Seasonal Surprise Bundle",
      imageUrl:
        "https://images.unsplash.com/photo-1602485180335-0b1e9df641a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      price: 31.0,
      type: "new",
      description:
        "Embrace the flavors of each season with our Seasonal Surprise Bundle...",
      descriptionShort:
        "Experience a rotation of seasonal snacks with our bundle...",
      tag: "seasonal",
    }),
    Bundle.create({
      name: "DIY Snack Mix Bundle",
      imageUrl:
        "https://images.unsplash.com/photo-1519087318609-bfb5c04c27f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      price: 25.0,
      type: "new",
      description: "Unleash your creativity with our DIY Snack Mix Bundle...",
      descriptionShort:
        "Create your own personalized snack mixes with our bundle of mix-and-match ingredients...",
        tag: "miscellaneous",

    
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
    bundle: vegan,
    quantity: 1,
    size: "Small",
    frequency: "Monthly",
  });
  await moe.addToCart({
    bundle: kitkat,
    quantity: 2,
    size: "Large",
    frequency: "Annually",
  });
  await moe.createOrder({ total: 720.9, tax: 53.4 });
  const cart3 = await moe.getCart();
  await moe.addToCart({
    bundle: korean,
    quantity: 1,
    size: "Small",
    frequency: "Monthly",
  });
  await moe.addToCart({
    bundle: oreo,
    quantity: 1,
    size: "Small",
    frequency: "Monthly",
  });
  await moe.createOrder({ total: 64.2, tax: 4.2 });
  const cart4 = await moe.getCart();
  await moe.addToCart({
    bundle: vegan,
    quantity: 2,
    size: "Large",
    frequency: "Monthly",
  });
  await moe.addToCart({
    bundle: glutenfree,
    quantity: 2,
    size: "Small",
    frequency: "Monthly",
  });
  await moe.createOrder({ total: 121.54, tax: 8.32 });
  const cart5 = await moe.getCart();
  await moe.addToCart({
    bundle: vegan,
    quantity: 1,
    size: "Large",
    frequency: "Monthly",
  });
  await moe.addToCart({
    bundle: glutenfree,
    quantity: 1,
    size: "Small",
    frequency: "Monthly",
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
      label: "Home",
      street1: "123 Fake Street",
      street2: "4E",
      city: "New York",
      state: "NY",
      zipcode: "10001",
      userId: moe.id,
      country: "United States",
    }),
    Address.create({
      label: "Work",
      street1: "555 West Street",
      street2: "",
      city: "Hudson",
      state: "NY",
      zipcode: "10001",
      userId: moe.id,
      country: "United States",
    }),
  ]);

  await Promise.all([
    Address.create({
      label: "Home",
      street1: "179 205th Street",
      street2: "",
      city: "New York",
      state: "NY",
      zipcode: "10001",
      userId: ethyl.id,
      country: "United States",
    }),
    Address.create({
      label: "Country House",
      street1: "4 Sunny Lane",
      street2: "",
      city: "Beacon",
      state: "NY",
      zipcode: "10001",
      userId: larry.id,
      country: "United States",
    }),
    Address.create({
      label: "Home",
      street1: "100 South Street",
      street2: "",
      city: "Great Barrington",
      state: "MA",
      zipcode: "55555",
      userId: lucy.id,
      country: "United States",
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
