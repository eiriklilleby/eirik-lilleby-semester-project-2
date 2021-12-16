import { getExistingProd } from "../utils/cartFunctions.js";
import { saveProds } from "../utils/cartFunctions.js";

export function handleClick() {
  const id = this.dataset.id;
  const title = this.dataset.title;
  const image = this.dataset.image;
  const price = this.dataset.price;

  const currentProds = getExistingProd();

  const productExist = currentProds.find((prod) => prod.id === id);

  if (!productExist) {
    const product = { id: id, title: title, image: image, price: price };
    currentProds.push(product);
    saveProds(currentProds);
  } else {
    const newProds = currentProds.filter((prod) => prod.id !== id);
    saveProds(newProds);
  }
}
