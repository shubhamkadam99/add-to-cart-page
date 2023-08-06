let cart = [];

const addToCartBtn = document.getElementById("add-to-cart-btn");

addToCartBtn.addEventListener("click", () => {
  const product = {
    name: "Product Name",
    price: 19.99,
    quantity: 1
  };  
  const existingProductIndex = cart.findIndex(item => item.name === product.name);

  if (existingProductIndex !== -1) {
    cart[existingProductIndex].quantity++;
  } else {
   
    cart.push(product);
  }
  updateCartDisplay();
});

function updateCartDisplay() {
  const cartDisplay = document.getElementById("cart-display");
  let cartItemsHTML = "";

  cart.forEach(item => {
    cartItemsHTML += `
      <div class="cart-item">
        <span>${item.name}</span>
        <span>Price: $${item.price.toFixed(2)}</span>
        <span>Quantity: ${item.quantity}</span>
      </div>
    `;
  });
  cartDisplay.innerHTML = cartItemsHTML;
}
