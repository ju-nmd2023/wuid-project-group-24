let cart = [];
let cartQuantity = 0;

function addToCart() {
  const quantity = parseInt(document.getElementById("quantity").value);
  console.log("Quantity:", quantity);

  if (!isNaN(quantity) && quantity > 0) {
    const product = {
      name: "Product Name",
      price: 19.99,
      quantity: quantity,
    };

    cart.push(product);
    cartQuantity += quantity;
    updateCart();
    updateCounter();
  } else {
    alert("Please enter a valid quantity.");
  }
}

function updateCart() {
  const cartListElement = document.getElementById("cart-list");
  cartListElement.innerHTML = "";

  cart.forEach((product) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${product.name} - Quantity: ${
      product.quantity
    } - Price: $${(product.price * product.quantity).toFixed(2)}`;
    cartListElement.appendChild(listItem);
  });
}

function updateCounter() {
  const counterElement = document.querySelector(".js-cart-quantity");
  counterElement.textContent = cartQuantity.toString();
}

function increaseCounter() {
  cartQuantity += 1;
  updateCounter();
}
