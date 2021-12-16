import { getDetails } from "./components/getDetails.js";
import { createDetailsListHtml } from "./components/createDetailsHtml.js";
import { handleClick } from "./components/toggleProduct.js";
import createMenu from "./common/createMenu.js";

createMenu();

let details = [];

async function setup() {
  details = await getDetails();
  createDetailsListHtml(details);
  const cartBtn = document.querySelector(".cart-btn");
  cartBtn.addEventListener("click", handleClick);
}

setup();
