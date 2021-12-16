import { baseUrl } from "../settings/api.js";

const productsUrl = baseUrl + "products";

export async function getProducts() {
  try {
    const response = await fetch(productsUrl);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}
