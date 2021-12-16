// import { clearProduct } from "./components/clearButton.js";
import { getExistingProd } from "./utils/cartFunctions.js";
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
        <a href="details.html?id=${product.id}" class="product-link">View product</a>
        </div>
        <p class="product-price">$${product.price}</p>
        <i class="fas fa-times clear-btn"></i>
    </div>
    `;
  // function clearButton() {
  //   const clearBtn = document.querySelectorAll(".clear-btn");

  //   console.log(clearBtn);

  //   clearBtn.forEach((product) => {
  //     product.addEventListener("click", clearProduct);
  //     console.log(product);
  //   });
  // }
  // clearButton();
});

{
  /* <div class="product-info-container">
  <p class="text-description">Description</p>
  <p class="text-price">price</p>
  <div class="line-container">
    <hr />
  </div>
</div>; */
}
