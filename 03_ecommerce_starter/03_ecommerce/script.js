document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { id: 1, name: "Product 1", price: 29.99 },
    { id: 2, name: "Product 2", price: 9.99 },
    { id: 3, name: "Product 3", price: 89.99 },
  ];

  // load from localStorage on start, fallback to empty array
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const productList = document.getElementById("product-list");
  const cartItems = document.getElementById("cart-items");
  const emptyCartMsg = document.getElementById("empty-cart");
  const cartTotalMsg = document.getElementById("cart-total");
  const priceTotal = document.getElementById("total-price");
  const checkoutbtn = document.getElementById("checkout-btn");

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `<span>${product.name} - $${product.price.toFixed(2)}</span>
      <button data-id="${product.id}">Add To Cart</button>`;
    productList.appendChild(productDiv);
  });

  // render on load so saved cart shows immediately
  renderCart();

  productList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const productId = parseInt(e.target.getAttribute("data-id"));
      const product = products.find((p) => p.id === productId);
      addToCart(product);
    }
  });

  // event delegation for remove buttons
  cartItems.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-btn")) {
      const productId = parseInt(e.target.getAttribute("data-id"));
      const index = cart.findIndex((p) => p.id === productId);
      if (index !== -1) {
        cart.splice(index, 1); // remove one item at that index
        saveCart();
        renderCart();
      }
    }
  });

  function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  function addToCart(product) {
    cart.push(product);
    saveCart();
    renderCart();
  }

  function renderCart() {
    cartItems.innerHTML = "";
    let totalP = 0;

    if (cart.length > 0) {
      emptyCartMsg.classList.add("hidden");
      cartTotalMsg.classList.remove("hidden");
      cart.forEach((item) => {
        totalP += item.price;
        const cartItem = document.createElement("div");
        cartItem.innerHTML = `${item.name} - $${item.price.toFixed(2)}
          <button class="remove-btn" data-id="${item.id}">Remove</button>`;
        cartItems.appendChild(cartItem);
      });
      priceTotal.textContent = `$${totalP.toFixed(2)}`;
    } else {
      emptyCartMsg.classList.remove("hidden");
      cartTotalMsg.classList.add("hidden");
      priceTotal.textContent = `0.00`;
    }
  }

  checkoutbtn.addEventListener("click", () => {
    cart.length = 0;
    localStorage.removeItem("cart");
    alert("Checkout done");
    renderCart();
  });
});
