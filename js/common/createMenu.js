import { getUsername } from "../utils/storage.js";
import { logout } from "../utils/storage.js";

export default function createMenu() {
  const { pathname } = document.location;

  const username = getUsername();

  let authLink = ` <a class="nav-link ${
    pathname === "/login.html" ? "active" : ""
  }" href="login.html">Login<i class="fas fa-user m-1"></i>
              </a>`;

  if (username) {
    authLink = `<a class="nav-link ${
      pathname === "/add.html" ? "active" : ""
    }" href="add.html">Add product
              </a>
    <span class="user">Logout<i class="fas fa-user ml-1"></i></span>`;
  }

  const navBar = document.querySelector(".navbar");

  navBar.innerHTML = `
   <div class="container">
        <a class="navbar-brand" href="/">
          <img src="./img/Logo.png" alt="Wintly logo with light blue text with a black mountain behind." />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link ${
                pathname === "/" || pathname === "index.html" ? "active" : ""
              }" href="/">Home </a>
            </li>
            <li class="nav-item">
              <a class="nav-link  ${
                pathname === "/shop.html" ? "active" : ""
              }" href="shop.html">Shop</a>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item nav-icon">
             ${authLink}
              <a class="nav-link  ${
                pathname === "/cart.html" ? "active" : ""
              }" href="cart.html"
                >Cart
                <i class="fas fa-shopping-cart"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
  `;
  if (username) {
    const logoutLink = document.querySelector(".user");
    logoutLink.addEventListener("click", logout);
  }
}
