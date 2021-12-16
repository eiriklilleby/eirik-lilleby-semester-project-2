import { getProducts } from "./components/getProducts.js";
import { getBanner } from "./components/getBanner.js";
import { createProductListFeaturedHtml } from "./components/createProductHtml.js";
import createMenu from "./common/createMenu.js";

createMenu();

let banner = [];
let featuredProducts = [];

async function setup() {
  banner = await getBanner();
  featuredProducts = await getProducts();
  createProductListFeaturedHtml(featuredProducts);
}

setup();
