import { createProductListHtml } from "./createProductHtml.js";
import { displayMessage } from "../common/displayMessage.js";

export function searchProducts(products) {
  const search = document.querySelector(".search");

  search.onkeyup = function (event) {
    console.log(event);

    const searchValue = event.target.value.trim().toLowerCase();

    const filteredProducts = products.filter(function (product) {
      if (
        product.title.toLowerCase().includes(searchValue) ||
        product.description.toLowerCase().includes(searchValue)
      ) {
        return true;
      }
    });

    createProductListHtml(filteredProducts);

    if (filteredProducts.length === 0) {
      return displayMessage(
        "error",
        "No products matched the search result",
        ".product-container"
      );
    }
  };
}
