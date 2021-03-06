import { baseUrl } from "../settings/api.js";

const bannerUrl = baseUrl + "banner";

export const bannerContainer = document.querySelector(".jumbotron");

export async function getBanner() {
  try {
    const response = await fetch(bannerUrl);
    const banner = await response.json();

    bannerContainer.style.backgroundImage = `url("${banner.winterbanner.url}")`;
  } catch (error) {
    console.log(error);
  }
}
