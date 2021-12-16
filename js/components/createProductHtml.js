const container = document.querySelector(".product-container");

export function createProductHtml(product) {
  return `<div class="col-sm mb-4">
          <div class="card m-auto" style="width: 21.87rem">
            <img src="${product.image.url}" class="card-img-top" alt="${product.image.alternativeText}" />
            <div class="card-body">
              <h5 class="card-title">${product.title}</h5>
              <p class="card-text">
               $${product.price} 
              </p>
              <a href="details.html?id=${product.id}" class="btn btn-primary">View product</a>
            </div>
          </div>
        </div>
    `;
}

export function createProductListFeaturedHtml(productList) {
  let html = "";
  productList.forEach((productList) => {
    let product = productList;
    if (product.featured === true) {
      html += createProductHtml(product);
    }
  });
  container.innerHTML = html;
}

export function createProductListHtml(productList) {
  let html = "";
  productList.forEach((productList) => {
    let product = productList;
    html += createProductHtml(product);
  });
  container.innerHTML = html;
}
