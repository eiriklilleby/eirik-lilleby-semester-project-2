export function getExistingProd() {
  const prods = localStorage.getItem("products");

  if (!prods) {
    return [];
  } else {
    return JSON.parse(prods);
  }
}

export function saveProds(prods) {
  localStorage.setItem("products", JSON.stringify(prods));
}

export function sumCart() {
  let sum = 0;
  let cartTotal = "";
  let products = JSON.parse(localStorage.getItem("products"));
  const cartContainer = document.querySelector(".total");

  for (var i = 0; i < products.length; i++) {
    sum += parseFloat(products[i].price);
  }
  cartTotal =
    '<p class="amount">Total:<span class="total-price"> $</span> ' +
    "<span class=total-price>" +
    sum +
    "</span>" +
    "</p>";
  cartContainer.innerHTML = cartTotal;
}
