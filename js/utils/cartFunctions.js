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
