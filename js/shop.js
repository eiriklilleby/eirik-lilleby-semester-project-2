import { getProducts } from "./components/getProducts.js";
import { createProductListHtml } from "./components/createProductHtml.js";
import createMenu from "./common/createMenu.js";

createMenu();

let products = [];

async function setup() {
  products = await getProducts();
  createProductListHtml(products);
}

setup();
