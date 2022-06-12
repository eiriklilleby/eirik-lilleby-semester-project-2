import { getExistingProd } from "../utils/cartFunctions.js";
import { getUsername } from "../utils/storage.js";

const detailContainer = document.querySelector(".details-container");

const title = document.querySelector("title");

const products = getExistingProd();

const username = getUsername();

export function createDetailsHtml(product) {
  let btnText = "Add to cart";

  const doesObjectExist = products.find((prods) => prods.id === product.id);

  title.innerHTML = `Wintly | ${product.title}`;

  if (doesObjectExist) {
    btnText = "Remove from cart";
  }

  let authLink = "";

  if (username) {
    authLink = ` <a href="edit.html?id=${product.id}" class="btn btn-primary mb-4">Edit product</a>`;
  }

  return `
   <div class="container breadcrumb-container">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
            <li class="breadcrumb-item"><a href="shop.html">Shop</a></li>
            <li class="breadcrumb-item active" aria-current="page">${product.title}</li>
          </ol>
        </nav>
      ${authLink}
      </div>
     <div class="img-container">
        <img
          src="${product.image.url}"
          alt="${product.image.alternativeText}"
        />
      </div>
      <div class="info-container">
        <h1 class="h1-details">${product.title}</h1>
        <p class="product-price">$${product.price}</p>
        <hr />
        <p class="product-info">${product.description}</p>
        <div class="button-container">
           <button class="btn btn-primary cart-btn" data-id="${product.id}" data-title="${product.title}" data-image="${product.image.url}" data-price="${product.price}">${btnText}</button>
          <a href="cart.html" class="btn btn-secondary">View cart</a>
        </div>
      </div>
      
    `;
}

export function createDetailsListHtml(detailsList) {
  let html = "";
  let product = detailsList;
  html += createDetailsHtml(product);
  detailContainer.innerHTML = html;
}
