import { baseUrl } from "../settings/api.js";
import { getToken } from "../utils/storage.js";

export function deleteButton(id) {
  const container = document.querySelector(".delete-container");

  container.innerHTML = `<button type="button" class="btn btn-primary delete">Delete</button>`;

  const button = document.querySelector(".delete");

  button.onclick = async function () {
    const url = baseUrl + "products/" + id;

    const doDelete = confirm("Are you sure you want to delete this");

    if (doDelete) {
      const token = getToken();

      const options = {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      try {
        const response = await fetch(url, options);
        const json = await response.json();

        location.href = "/";

        console.log(json);
      } catch (error) {
        console.log(error);
      }
    }
  };
}
