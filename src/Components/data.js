import { CgProfile } from "react-icons/cg";
import { AiOutlineShoppingCart } from "react-icons/ai";

export const data = { companyName: "SNACKCLUB" };
export const navDataLinks = [
  { name: "home", url: "/" },
  { name: "about", url: "#/about" },
  { name: "products", url: "#/products" },
];
export const navButtons = [
  { name: "cart", url: "#/cart", icon: AiOutlineShoppingCart },
  // { name: "settings", url: "/settings", icon: CgProfile },
];

export const categories = [
  "all",
  "sweet tooth",
  "seasonal",
  "healthy",
  "international",
  "movie night",
  "office snacks",
  "vegan and gluten-free",
  "kids",
  "miscellaneous",
];

export const settings = [
  { name: "Profile", url: "#/profile" },
  { name: "Cart", url: "#/cart" },
  { name: "Orders", url: "#/orders" },
];



