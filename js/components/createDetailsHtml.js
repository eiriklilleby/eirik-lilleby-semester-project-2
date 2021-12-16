const detailContainer = document.querySelector(".details-container");

export function createDetailsHtml(product) {
  return `
   <div class="container breadcrumb-container">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
            <li class="breadcrumb-item"><a href="shop.html">Shop</a></li>
            <li class="breadcrumb-item active" aria-current="page">${product.title}</li>
          </ol>
        </nav>
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
          <a href="#" class="btn btn-primary cart-btn" data-id="${product.id}" data-title="${product.title}" data-image="${product.image.url}" data-price="${product.price}">Add to cart</a>
          <a href="#" class="btn btn-secondary">View cart</a>
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
