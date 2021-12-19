import { getExistingProd, sumCart } from "./utils/cartFunctions.js";
import { displayMessage } from "./common/displayMessage.js";
import createMenu from "./common/createMenu.js";

createMenu();

const products = getExistingProd();

const cartContainer = document.querySelector(".cart-container");

if (products.length === 0) {
  displayMessage(
    "warning",
    "There is no product in the cart.",
    ".cart-container"
  );
} else {
  sumCart();
}

products.forEach((product) => {
  cartContainer.innerHTML += `
    <div class="product">
       <div class="img-container">
       <img
          src="${product.image}"
          alt="${product.image.alternativeText}"
        />
       </div>
       <div class="text-container">
        <h4 class="product-title">${product.title}</h4>
        <a href="details.html?id=${product.id}" class="product-link btn btn-primary">View product</a>
        </div>
      <div class="price-container">
        <p class="price-text">Price:</p>
        <p class="product-price">$${product.price}</p>
        </div>
    </div>
    `;
});
