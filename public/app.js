let cart = [];

document.addEventListener('DOMContentLoaded', () => {
  loadProducts();
  setupCartModal();
});

async function loadProducts() {
  try {
    const response = await fetch('/api/products');
    const products = await response.json();
    displayProducts(products);
  } catch (error) {
    console.error('Error loading products:', error);
  }
}

function displayProducts(products) {
  const container = document.getElementById('products');
  container.innerHTML = products.map(product => `
    <div class="product-card">
      <h3>${product.name}</h3>
      <p class="price">$${product.price.toFixed(2)}</p>
      <p class="description">${product.description}</p>
      <button class="btn-primary" onclick="addToCart(${product.id}, '${product.name}', ${product.price})">
        Add to Cart
      </button>
    </div>
  `).join('');
}

function addToCart(id, name, price) {
  const existingItem = cart.find(item => item.id === id);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ id, name, price, quantity: 1 });
  }
  updateCartCount();
}

function updateCartCount() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById('cart-count').textContent = count;
}

function setupCartModal() {
  const modal = document.getElementById('cart-modal');
  const cartLink = document.getElementById('cart-link');
  const closeBtn = document.querySelector('.close');
  const checkoutBtn = document.getElementById('checkout-btn');

  cartLink.addEventListener('click', (e) => {
    e.preventDefault();
    displayCart();
    modal.classList.remove('hidden');
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.add('hidden');
    }
  });

  checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    alert('Thank you for your order!');
    cart = [];
    updateCartCount();
    modal.classList.add('hidden');
  });
}

function displayCart() {
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');

  if (cart.length === 0) {
    cartItems.innerHTML = '<p>Your cart is empty.</p>';
    cartTotal.textContent = '';
    return;
  }

  cartItems.innerHTML = cart.map(item => `
    <div class="cart-item">
      <span class="item-name">${item.name} x${item.quantity}</span>
      <span class="item-price">$${(item.price * item.quantity).toFixed(2)}</span>
      <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
    </div>
  `).join('');

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  cartTotal.textContent = `Total: $${total.toFixed(2)}`;
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  updateCartCount();
  displayCart();
}
