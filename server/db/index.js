const conn = require('./conn');
const User = require('./User');
const Bundle = require('./Bundle');
const Order = require('./Order');
const Product = require('./Product');
const LineItem = require('./LineItem');
const Address = require('./Address');
const fs = require('fs');
const path = require('path');

//associations
Order.belongsTo(User);
Order.hasMany(LineItem);
LineItem.belongsTo(Order);
LineItem.belongsTo(Bundle);
Product.belongsTo(Bundle);
Bundle.hasMany(Product);
Address.belongsTo(User);
User.hasMany(Address);

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
		gum,
		glutenfree,
		vegan,
	] = await Promise.all([
		User.create({ username: 'moe', password: '123', avatar }),
		User.create({ username: 'lucy', password: '123' }),
		User.create({ username: 'larry', password: '123' }),
		User.create({ username: 'ethyl', password: '123' }),
		Bundle.create({
			name: 'Korean Package',
			imageUrl:
				'https://i.etsystatic.com/27761931/r/il/1eec00/3451205856/il_fullxfull.3451205856_l9l0.jpg',
			price: 35.0,
			type: 'featured',
		}),
		Bundle.create({
			name: 'French Package',
			imageUrl: 'https://m.media-amazon.com/images/I/61GaJPDd5RL._SS400_.jpg',
			price: 50.0,
			type: 'best',
		}),
		Bundle.create({
			name: 'Canadian Package',
			imageUrl:
				'https://i.etsystatic.com/26971947/r/il/7b856a/3431395249/il_fullxfull.3431395249_43v9.jpg',
			price: 40.0,
			type: 'featured',
		}),
		Bundle.create({
			name: 'Kitkat Package',
			imageUrl:
				'https://theawesomer.com/photos/2020/02/kit_kat_variety_pack_1.jpg',
			price: 30.0,
			type: 'new',
		}),
		Bundle.create({
			name: 'Oreo Package',
			imageUrl: 'https://miro.medium.com/max/1200/1*-Q2u9C1n2hYnZsFlvbA6QQ.png',
			price: 30.0,
			type: 'best',
		}),
		Bundle.create({
			name: 'Christmas Package',
			imageUrl:
				'https://images.snackmagic.com/spree/product_set_price_mappings/2834656/medium/pnh5i5r7hnxgoqyeyy6dpf2llpde.jpeg?1667217051',
			price: 50.0,
			type: 'featured',
		}),
		Bundle.create({
			name: 'Spicy Package',
			imageUrl:
				'http://cdn.shopify.com/s/files/1/0017/4148/8194/products/Loteria-Candy-Co-Mexican-Candy-Box-1_9230bc14-bdd0-4a60-ba4e-cafcc4eb5769_1200x1200.jpg?v=1619551785',
			price: 35.0,
			type: 'new',
		}),
		Bundle.create({
			name: 'Chips Package',
			imageUrl:
				'https://i0.wp.com/www.courtneyinthemiddleseat.com/wp-content/uploads/2021/10/International-Snacks-2021-Blog-Post-Cover-.png?fit=1024%2C731&ssl=1',
			price: 30.0,
			type: 'best',
		}),
		Bundle.create({
			name: ' Chewing Gum Package',
			imageUrl:
				'https://www.history.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTU3ODc4NjgwODIyMDk3MjI1/istock_000040358208large-2.jpg',
			price: 20.0,
			type: 'new',
		}),
		Bundle.create({
			name: 'Gluten Free Package',
			imageUrl: 'https://m.media-amazon.com/images/I/81SWnlqtLvL.jpg',
			price: 45.0,
			type: 'new',
		}),
		Bundle.create({
			name: 'Vegan Package',
			imageUrl:
				'https://m.media-amazon.com/images/I/51BEso1LFPL._AC_SY580_.jpg',
			price: 45.0,
			type: 'featured',
		}),
	]);

	const cart = await ethyl.getCart();
	await ethyl.addToCart({
		bundle: korean,
		quantity: 3,
		size: 'Small',
		frequency: 'Monthly',
	});
	await ethyl.addToCart({
		bundle: kitkat,
		quantity: 2,
		size: 'Large',
		frequency: 'Annually',
	});
	const cart2 = await moe.getCart();
	await moe.addToCart({
		bundle: korean,
		quantity: 3,
		size: 'Small',
		frequency: 'Monthly',
	});
	await moe.addToCart({
		bundle: kitkat,
		quantity: 2,
		size: 'Large',
		frequency: 'Annually',
	});

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

		Product.create({
			name: 'Goetze Oreo Cow Tale (54g)',
			imageURL:
				'https://candybar.snackcrate.com/wp-content/uploads/2021/09/Oreo_Cow_Tales_482x482_.png',
			bundleId: oreo.id,
		}),
		Product.create({
			name: 'Nabisco Oreo – Red Velvet (100g)',
			imageURL:
				'https://candybar.snackcrate.com/wp-content/uploads/2022/08/Korea_OreoRedVelvet_482x482_.png',
			bundleId: oreo.id,
		}),
		Product.create({
			name: 'Cadbury Dairy Milk Oreo Eggs (72g)',
			imageURL:
				'https://candybar.snackcrate.com/wp-content/uploads/2021/09/Halloween_Oreo_Eggs_482x482_.png',
			bundleId: oreo.id,
		}),
		Product.create({
			name: 'Excelo Eyoo Double Cream (52g)',
			imageURL:
				'https://candybar.snackcrate.com/wp-content/uploads/2021/09/Morocco_Eyoo_482x482_082321.png',
			bundleId: oreo.id,
		}),
		Product.create({
			name: 'Bis Lacta Bis Oreo (100.8g)',
			imageURL:
				'https://candybar.snackcrate.com/wp-content/uploads/2021/09/Oreo_Bis_482x482_.png',
			bundleId: oreo.id,
		}),
		Product.create({
			name: 'Cadbury Oreo Birthday Party (154g)',
			imageURL:
				'https://candybar.snackcrate.com/wp-content/uploads/2021/09/Oreo_Birthday_482x482_.png',
			bundleId: oreo.id,
		}),
		Product.create({
			name: 'Cadbury Oreo Bites (95g)',
			imageURL:
				'https://candybar.snackcrate.com/wp-content/uploads/2021/09/Oreo_Bites_482x482_.png',
			bundleId: oreo.id,
		}),
		Product.create({
			name: 'Oreo Green Tea Ice Cream (97g)',
			imageURL:
				'https://candybar.snackcrate.com/wp-content/uploads/2021/09/Oreo_Green_Tea_482x482_.png',
			bundleId: oreo.id,
		}),
		Product.create({
			name: 'Oreo Ice Cream (137g)',
			imageURL:
				'https://candybar.snackcrate.com/wp-content/uploads/2021/09/Oreo_Ice_Cream_482x482_.png',
			bundleId: oreo.id,
		}),
		Product.create({
			name: 'Oreo Thin Tiramisu (95g)',
			imageURL:
				'https://candybar.snackcrate.com/wp-content/uploads/2021/09/Oreo_Tiramisu_482x482_.png',
			bundleId: oreo.id,
		}),

		Product.create({
			name: 'Vidal Christmas Trees (127g)',
			imageURL:
				'https://candybar.snackcrate.com/wp-content/uploads/2021/11/Holiday_Christmas_Trees_482x482_.png',
			bundleId: christmas.id,
		}),
		Product.create({
			name: 'Nestle Sno-Caps Chocolate',
			imageURL:
				'https://www.candywarehouse.com/item-images/128546-01_sno-caps-chocolate-nonpareils-candy-theater-packs-15-piece-box.jpg?resizeid=104&resizeh=1000&resizew=1000',
			bundleId: christmas.id,
		}),
		Product.create({
			name: 'Haribo Perl-Kugeln (200g)',
			imageURL:
				'https://candybar.snackcrate.com/wp-content/uploads/2021/11/Holiday_Perl_Kuglen_482x482_.png',
			bundleId: christmas.id,
		}),
		Product.create({
			name: 'Vidal Santa (127g)',
			imageURL:
				'https://candybar.snackcrate.com/wp-content/uploads/2021/11/Holiday_Santa_482x482_.png',
			bundleId: christmas.id,
		}),
		Product.create({
			name: 'Ferrero Raffaello Candy Balls (100g)',
			imageURL:
				'https://www.candywarehouse.com/item-images/127149-01_ferrero-raffaello-candy-balls-9-piece-box.jpg?resizeid=104&resizeh=1000&resizew=1000',
			bundleId: christmas.id,
		}),
		Product.create({
			name: 'Kit Kat Duos Holiday (100g)',
			imageURL:
				'https://www.candywarehouse.com/item-images/161226-01_kit-kat-duos-holiday-mint-dark-chocolate-snack-size-candy-bars-8-8-ounce-bag.jpg?resizeid=104&resizeh=1000&resizew=1000',
			bundleId: christmas.id,
		}),
		Product.create({
			name: 'Christmas Snickers Minis (150g)',
			imageURL:
				'https://www.candywarehouse.com/item-images/127461-01_christmas-snickers-minis-assortment-50-piece-bag.jpg?resizeid=104&resizeh=1000&resizew=1000',
			bundleId: christmas.id,
		}),
		Product.create({
			name: 'Milky Way Simply Snowman (100g)',
			imageURL:
				'https://www.candywarehouse.com/item-images/133770-01_milky-way-simply-caramel-snowman-christmas-candy-bars-24-piece-box.jpg?resizeid=104&resizeh=1000&resizew=1000',
			bundleId: christmas.id,
		}),
		Product.create({
			name: "Hershey's Kisses Sugar Cookie (200g)",
			imageURL:
				'https://www.candywarehouse.com/item-images/161220-01_hersheys-kisses-sugar-cookie-candy-9-ounce-bag.jpg?resizeid=104&resizeh=1000&resizew=1000',
			bundleId: christmas.id,
		}),
		Product.create({
			name: 'Jolly Rancher Candy Cane (200g) ',
			imageURL:
				'https://www.candywarehouse.com/item-images/131537-01_jolly-rancher-christmas-assortment-candy-cane.jpg?resizeid=104&resizeh=1000&resizew=1000',
			bundleId: christmas.id,
		}),

		Product.create({
			name: 'Indy Mini Dedos Spicy and Sour Candy: 50-Piece Bag',
			imageURL:
				'https://www.candywarehouse.com/item-images/160968-01_indy-mini-dedos-spicy-and-sour-mexican-candy-50-0.28oz-bags.jpg?resizeid=104&resizeh=1000&resizew=1000',
			bundleId: spicy.id,
		}),
		Product.create({
			name: 'Ulker Krispi Taco (48g)',
			imageURL:
				'https://candybar.snackcrate.com/wp-content/uploads/2022/06/Turkey_KrispiTaco_482x482_.png',
			bundleId: spicy.id,
		}),
		Product.create({
			name: 'Vidal Spicy Mangoes (100g)',
			imageURL:
				'https://candybar.snackcrate.com/wp-content/uploads/2021/08/Spain_Spicy_Mangos_482x482_.png',
			bundleId: spicy.id,
		}),
		Product.create({
			name: 'Lucas Skwinkles Rellenos Chili Candy Packs: 12-Piece Box',
			imageURL:
				'https://www.candywarehouse.com/item-images/134433-01_lucas-skwinkles-chili-candy-packs-12-piece-box.jpg?resizeid=104&resizeh=1000&resizew=1000',
			bundleId: spicy.id,
		}),
		Product.create({
			name: 'Vero Sandi Brochas Rellenas Lollipops: 40-Piece Bag',
			imageURL:
				'https://www.candywarehouse.com/item-images/161173-01_vero-sandi-brochas-rellenas-lollipops-40-piece-bag.jpg?resizeid=104&resizeh=1000&resizew=1000',
			bundleId: spicy.id,
		}),
		Product.create({
			name: 'Tao Kae Noi Big Roll Spicy (3g)',
			imageURL:
				'https://candybar.snackcrate.com/wp-content/uploads/2021/08/Thailand_Seaweed_Red_Spicy_482x482_082421.png',
			bundleId: spicy.id,
		}),
		Product.create({
			name: 'Walker’s Monster Munch Flaming Hot (22g)',
			imageURL:
				'https://candybar.snackcrate.com/wp-content/uploads/2021/09/Halloween_MM_Flaming_482x482_.png',
			bundleId: spicy.id,
		}),
		Product.create({
			name: 'De La Rosa Mango Pulparindo Candy: 20-Piece Box',
			imageURL:
				'https://www.candywarehouse.com/item-images/160970-01_de-la-rosa-mango-pulparindo-candy-20-piece-box.jpeg?resizeid=104&resizeh=1000&resizew=1000',
			bundleId: spicy.id,
		}),
		Product.create({
			name: 'Oishi Spicy Seafood Curls (24g)',
			imageURL:
				'https://candybar.snackcrate.com/wp-content/uploads/2022/06/Phil_SeafoodCurls_482x482_.png',
			bundleId: spicy.id,
		}),
		Product.create({
			name: 'Jolly Rancher Hotties Hard Candy: 13-Ounce Bag',
			imageURL:
				'https://www.candywarehouse.com/item-images/129115-01_jolly-rancher-hotties-hard-candy-13-ounce-bag.jpg?resizeid=104&resizeh=1000&resizew=1000',
			bundleId: spicy.id,
		}),

		Product.create({
			name: 'Brets Chips Chevre Piment d’Espelette (25g)',
			imageURL:
				'https://candybar.snackcrate.com/wp-content/uploads/2021/11/France_Brets_482x482_.png',
			bundleId: chips.id,
		}),
		Product.create({
			name: 'Egypt Foods Waves Chili and Lemon (28g)',
			imageURL:
				'https://candybar.snackcrate.com/wp-content/uploads/2021/10/Egypt_Waves_Chili_Lemon_482x482_.png',
			bundleId: chips.id,
		}),
		Product.create({
			name: 'Frito-Lay Doritos Bits BBQ (100g)',
			imageURL:
				'https://candybar.snackcrate.com/wp-content/uploads/2022/03/Portugal_DoritosBBQ_482x482_.png',
			bundleId: chips.id,
		}),
		Product.create({
			name: 'Ruffles All Dressed Chips (40g)',
			imageURL:
				'https://candybar.snackcrate.com/wp-content/uploads/2021/09/Canada_Ruffles_All_Dressed_482x482_.png',
			bundleId: chips.id,
		}),
		Product.create({
			name: 'Walker’s Frazzles (34g)',
			imageURL:
				'https://candybar.snackcrate.com/wp-content/uploads/2021/11/UK_Frazzles_482x482_.png',
			bundleId: chips.id,
		}),
		Product.create({
			name: 'Haitai Honey Butter Chips (30g)',
			imageURL:
				'https://candybar.snackcrate.com/wp-content/uploads/2022/08/Korea_HoneyButterChips_482x482_.png',
			bundleId: chips.id,
		}),
		Product.create({
			name: 'Lays Bolognaise (45g)',
			imageURL:
				'https://candybar.snackcrate.com/wp-content/uploads/2022/01/France_Saveur_Bolognaise_482x482_.png',
			bundleId: chips.id,
		}),
		Product.create({
			name: 'Lays Ketchup Chips (40g)',
			imageURL:
				'https://candybar.snackcrate.com/wp-content/uploads/2021/09/Canada_Ketchup_Chips_482x482_.png',
			bundleId: chips.id,
		}),
		Product.create({
			name: 'Cirque Lionel Shots Pizza (20g)',
			imageURL:
				'https://candybar.snackcrate.com/wp-content/uploads/2021/09/Morocco_Lionel_Shot_482x482_082321.png',
			bundleId: chips.id,
		}),
		Product.create({
			name: 'Frito-Lay Ruffles Presunto (45g)',
			imageURL:
				'https://candybar.snackcrate.com/wp-content/uploads/2022/03/Portugal_RufflesPresunto_482x482_.png',
			bundleId: chips.id,
		}),

		Product.create({
			name: 'Thrills Chewing Gum (14g)',
			imageURL:
				'https://candybar.snackcrate.com/wp-content/uploads/2021/09/Canada_Thrills_Gum_482x482_.png',
			bundleId: gum.id,
		}),
		Product.create({
			name: 'Puchao Bubbly Soda Gummy Candy:3.53-Ounce Bag',
			imageURL:
				'https://www.candywarehouse.com/item-images/134663-01_Puchao_Soda.jpg?resizeid=104&resizeh=1000&resizew=1000',
			bundleId: gum.id,
		}),
		Product.create({
			name: "Canel's Miniature Chewing Gum: 220-Piece Bag",
			imageURL:
				'https://www.candywarehouse.com/item-images/129344-01_canels-miniature-chewing-gum-220-piece-bag.jpg?resizeid=104&resizeh=1000&resizew=1000',
			bundleId: gum.id,
		}),
		Product.create({
			name: 'Flash Gum Watermelon (30g)',
			imageURL:
				'https://candybar.snackcrate.com/wp-content/uploads/2021/09/Morocco_Flash_Watermelon_482x482_082321.png',
			bundleId: gum.id,
		}),
		Product.create({
			name: 'Jila Sugar Free Peppermint Gum Packs: 12-Piece Box',
			imageURL:
				'https://www.candywarehouse.com/item-images/127084-01_jila-sugar-free-peppermint-gum-packs-12-piece-box.jpg?resizeid=104&resizeh=1000&resizew=1000',
			bundleId: gum.id,
		}),
		Product.create({
			name: 'Dubble Bubble 3-Ounce Big Bar Bubblegum: 24-Piece Box',
			imageURL:
				'https://www.candywarehouse.com/item-images/126439-01_dubble-bubble-3-ounce-bubblegum-big-bars-24-piece-box.jpg?resizeid=104&resizeh=1000&resizew=1000',
			bundleId: gum.id,
		}),
		Product.create({
			name: 'Chiclets Chewing Gum Snack Packs: 200-Piece Box',
			imageURL:
				'https://www.candywarehouse.com/item-images/132780-01_chiclets-chewing-gum-snack-packs-200-piece-box.jpg?resizeid=104&resizeh=1000&resizew=1000',
			bundleId: gum.id,
		}),
		Product.create({
			name: 'Bazooka Original Bubblegum 10-Piece Packs: 12-Piece Box',
			imageURL:
				'https://www.candywarehouse.com/item-images/128761-01_bazooka-original-bubblegum-10-piece-packs-12-piece-box.jpg?resizeid=104&resizeh=1000&resizew=1000',
			bundleId: gum.id,
		}),
		Product.create({
			name: 'Gorilo Mixed Flavors (60g)',
			imageURL:
				'https://candybar.snackcrate.com/wp-content/uploads/2022/03/Portugal_GoriloBag_482x482_.png',
			bundleId: gum.id,
		}),
		Product.create({
			name: 'Big League Chew Bubble Gum Packs - Original: 12-Piece Box',
			imageURL:
				'https://www.candywarehouse.com/item-images/125125-01_original-big-league-chew-bubble-gum-packs-12-piece-box.jpg?resizeid=104&resizeh=1000&resizew=1000',
			bundleId: gum.id,
		}),

		Product.create({
			name: "Canel's Miniature Chewing Gum: 220-Piece Bag",
			imageURL:
				'https://www.candywarehouse.com/item-images/129344-01_canels-miniature-chewing-gum-220-piece-bag.jpg?resizeid=104&resizeh=1000&resizew=1000',
			bundleId: glutenfree.id,
		}),
		Product.create({
			name: 'Big League Chew Bubble Gum Packs - Original: 12-Piece Box',
			imageURL:
				'https://www.candywarehouse.com/item-images/125125-01_original-big-league-chew-bubble-gum-packs-12-piece-box.jpg?resizeid=104&resizeh=1000&resizew=1000',
			bundleId: glutenfree.id,
		}),
		Product.create({
			name: 'Lucas Skwinkles Rellenos Chili Candy Packs: 12-Piece Box',
			imageURL:
				'https://www.candywarehouse.com/item-images/134433-01_lucas-skwinkles-chili-candy-packs-12-piece-box.jpg?resizeid=104&resizeh=1000&resizew=1000',
			bundleId: glutenfree.id,
		}),
		Product.create({
			name: 'Jellico Dinosaur Gummies (90g)',
			imageURL:
				'https://candybar.snackcrate.com/wp-content/uploads/2022/08/Korea_DinoGummies_482x482_.png',
			bundleId: glutenfree.id,
		}),
		Product.create({
			name: 'De La Rosa Mango Pulparindo Candy: 20-Piece Box',
			imageURL:
				'https://www.candywarehouse.com/item-images/160970-01_de-la-rosa-mango-pulparindo-candy-20-piece-box.jpeg?resizeid=104&resizeh=1000&resizew=1000',
			bundleId: glutenfree.id,
		}),
		Product.create({
			name: 'Haitai Grape Candy (130g)',
			imageURL:
				'https://candybar.snackcrate.com/wp-content/uploads/2022/08/Korea_GrapeCandy_482x482_.png',
			bundleId: glutenfree.id,
		}),
		Product.create({
			name: 'Ahoj-Brause Ahoj-Bonbons (2kg)',
			imageURL:
				'https://candybar.snackcrate.com/wp-content/uploads/2022/04/Germany_BonBons_482x482_.png',
			bundleId: glutenfree.id,
		}),
		Product.create({
			name: 'Aiguebelle Chocolate Au Lait (65g)',
			imageURL:
				'https://candybar.snackcrate.com/wp-content/uploads/2021/09/Morocco_Delice_482x482_082321.png',
			bundleId: glutenfree.id,
		}),
		Product.create({
			name: 'Kit Kat Big Little Pouch Original (50g)',
			imageURL:
				'https://candybar.snackcrate.com/wp-content/uploads/2021/09/KitKat_Big_482x482_082321.png',
			bundleId: glutenfree.id,
		}),
		Product.create({
			name: 'Fini Bananas (100g)',
			imageURL:
				'https://candybar.snackcrate.com/wp-content/uploads/2022/03/Portugal_JellyBananas_482x482_.png',
			bundleId: glutenfree.id,
		}),

		Product.create({
			name: 'Fini Bananas (100g)',
			imageURL:
				'https://candybar.snackcrate.com/wp-content/uploads/2022/03/Portugal_JellyBananas_482x482_.png',
			bundleId: vegan.id,
		}),
		Product.create({
			name: 'Lays Bolognaise (45g)',
			imageURL:
				'https://candybar.snackcrate.com/wp-content/uploads/2022/01/France_Saveur_Bolognaise_482x482_.png',
			bundleId: vegan.id,
		}),
		Product.create({
			name: 'Lucas Skwinkles Rellenos Chili Candy Packs: 12-Piece Box',
			imageURL:
				'https://www.candywarehouse.com/item-images/134433-01_lucas-skwinkles-chili-candy-packs-12-piece-box.jpg?resizeid=104&resizeh=1000&resizew=1000',
			bundleId: vegan.id,
		}),
		Product.create({
			name: 'Jila Sugar Free Peppermint Gum Packs: 12-Piece Box',
			imageURL:
				'https://www.candywarehouse.com/item-images/127084-01_jila-sugar-free-peppermint-gum-packs-12-piece-box.jpg?resizeid=104&resizeh=1000&resizew=1000',
			bundleId: vegan.id,
		}),
		Product.create({
			name: 'De La Rosa Mango Pulparindo Candy: 20-Piece Box',
			imageURL:
				'https://www.candywarehouse.com/item-images/160970-01_de-la-rosa-mango-pulparindo-candy-20-piece-box.jpeg?resizeid=104&resizeh=1000&resizew=1000',
			bundleId: vegan.id,
		}),
		Product.create({
			name: 'Haitai Grape Candy (130g)',
			imageURL:
				'https://candybar.snackcrate.com/wp-content/uploads/2022/08/Korea_GrapeCandy_482x482_.png',
			bundleId: vegan.id,
		}),
		Product.create({
			name: 'Bear Paws (40g)',
			imageURL:
				'https://candybar.snackcrate.com/wp-content/uploads/2021/08/Canada_Banana_Bread_482x482_.png',
			bundleId: vegan.id,
		}),
		Product.create({
			name: 'De La Rosa Mango Pulparindo Candy: 20-Piece Box',
			imageURL:
				'https://www.candywarehouse.com/item-images/160970-01_de-la-rosa-mango-pulparindo-candy-20-piece-box.jpeg?resizeid=104&resizeh=1000&resizew=1000',
			bundleId: vegan.id,
		}),
		Product.create({
			name: 'Lays Ketchup Chips (40g)',
			imageURL:
				'https://candybar.snackcrate.com/wp-content/uploads/2021/09/Canada_Ketchup_Chips_482x482_.png',
			bundleId: vegan.id,
		}),
		Product.create({
			name: 'Big League Chew Bubble Gum Packs - Original: 12-Piece Box',
			imageURL:
				'https://www.candywarehouse.com/item-images/125125-01_original-big-league-chew-bubble-gum-packs-12-piece-box.jpg?resizeid=104&resizeh=1000&resizew=1000',
			bundleId: vegan.id,
		}),
	]);

	await Promise.all([
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
			street1: '555 Downtown Street',
			street2: '',
			city: 'Hudson',
			state: 'NY',
			zipcode: '12222',
			userId: moe.id,
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
