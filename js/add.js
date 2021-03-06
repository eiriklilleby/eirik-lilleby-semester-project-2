import { displayMessage } from "./common/displayMessage.js";
import { baseUrl } from "./settings/api.js";
import createMenu from "./common/createMenu.js";

createMenu();

const form = document.querySelector("form");
const title = document.querySelector("#title");
const price = document.querySelector("#price");
const description = document.querySelector("#description");
const featured = document.querySelector("#featured");
const message = document.querySelector(".message-container");

$(document).ready(function () {
  $(featured).change(function () {
    if ($(this).is(":checked")) {
      featured.value = true;
    } else {
      featured.value = false;
    }
  });
});

form.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();

  message.innerHTML = "";

  const titleValue = title.value.trim();
  const priceValue = parseFloat(price.value);
  const descriptionValue = description.value.trim();
  const featuredValue = featured.value;

  const request = new XMLHttpRequest();

  const formData = new FormData();

  const formElements = form.elements;

  const data = {};

  for (let i = 0; i < formElements.length; i++) {
    const currentElement = formElements[i];
    if (!["submit", "file"].includes(currentElement.type)) {
      data[currentElement.name] = currentElement.value;
    } else if (currentElement.type === "file") {
      for (let i = 0; i < currentElement.files.length; i++) {
        const file = currentElement.files[i];
        formData.append(`files.${currentElement.name}`, file, file.name);
      }
    }
  }

  request.open("POST", `${baseUrl}products`);

  request.onreadystatechange = function () {
    if (request.readyState === 4) {
      if (request.status === 200) {
        console.log(request.status);
        // displayMessage("warning", request.status, ".message-container");
      } else {
        console.log("error adding product to server");
        // displayMessage(
        //   "error",
        //   "Error adding product to server",
        //   ".message-container"
        // );
      }
    }
  };

  formData.append("data", JSON.stringify(data));

  request.send(
    formData,
    titleValue,
    priceValue,
    descriptionValue,
    featuredValue
  );

  if (isNaN(priceValue)) {
    return displayMessage(
      "warning",
      "Please supply proper values",
      ".message-container"
    );
  }

  displayMessage("success", "Product created", ".message-container");
  form.reset();
}
