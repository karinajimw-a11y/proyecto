// Productos
const products = [
  {
    id: 1,
    name: "Silla Tejida Clásica",
    price: 180000,
    description: "Silla tejida a mano con fibras naturales de la región. Perfecta para espacios interiores y exteriores. Diseño tradicional sincelejano.",
    category: "Clásicas",
    image: "https://images.unsplash.com/photo-1760533537370-83c199073859?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    featured: true,
    stock: 15,
    material: "Fibra natural, madera de cedro",
    dimensions: "45cm x 50cm x 90cm"
  },
  {
    id: 2,
    name: "Silla Rattan Premium",
    price: 250000,
    description: "Elegante silla de rattan con acabados de lujo. Resistente y duradera, ideal para comedores y salas de estar.",
    category: "Premium",
    image: "https://images.unsplash.com/photo-1717911100010-cc15352ea502?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    featured: true,
    stock: 10,
    material: "Rattan natural, estructura de metal",
    dimensions: "50cm x 55cm x 85cm"
  },
  {
    id: 3,
    name: "Silla Artesanal Moderna",
    price: 220000,
    description: "Diseño contemporáneo que fusiona tradición y modernidad. Tejido artesanal con patrones únicos de la costa caribeña.",
    category: "Modernas",
    image: "https://images.unsplash.com/photo-1760325902589-fe244f204b08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    featured: true,
    stock: 8,
    material: "Fibra sintética premium, base de madera",
    dimensions: "48cm x 52cm x 88cm"
  },
  {
    id: 4,
    name: "Silla Exterior Tropical",
    price: 195000,
    description: "Perfecta para terrazas y jardines. Tratamiento especial anti-humedad y resistente al sol del caribe.",
    category: "Exterior",
    image: "https://images.unsplash.com/photo-1624755298656-b8565abb35e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    featured: false,
    stock: 20,
    material: "Mimbre tratado, estructura de aluminio",
    dimensions: "52cm x 58cm x 92cm"
  },
  {
    id: 5,
    name: "Silla Fibra Natural",
    price: 170000,
    description: "100% fibras naturales cosechadas localmente. Eco-friendly y sostenible. Apoya la economía local de Sincelejo.",
    category: "Ecológicas",
    image: "https://images.unsplash.com/photo-1760533534981-e6d2c1c73ea4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    featured: false,
    stock: 12,
    material: "Fibra de caña flecha, madera local",
    dimensions: "43cm x 48cm x 87cm"
  },
  {
    id: 6,
    name: "Silla Tejida Colores",
    price: 210000,
    description: "Silla vibrante con tejido multicolor. Perfecta para darle vida y alegría a cualquier espacio. Colores inspirados en el Caribe.",
    category: "Modernas",
    image: "https://images.unsplash.com/photo-1760533537370-83c199073859?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    featured: false,
    stock: 18,
    material: "Fibra teñida naturalmente, madera pintada",
    dimensions: "46cm x 51cm x 89cm"
  },
  {
    id: 7,
    name: "Silla Comedor Elegante",
    price: 240000,
    description: "Diseñada especialmente para comedores. Comodidad superior con respaldo ergonómico. Acabado refinado.",
    category: "Premium",
    image: "https://images.unsplash.com/photo-1717911100010-cc15352ea502?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    featured: false,
    stock: 14,
    material: "Rattan, cojín de lino natural",
    dimensions: "50cm x 54cm x 95cm"
  },
  {
    id: 8,
    name: "Silla Balcón Compacta",
    price: 160000,
    description: "Ideal para espacios pequeños. Ligera pero resistente. Perfecta para balcones y terrazas urbanas.",
    category: "Exterior",
    image: "https://images.unsplash.com/photo-1760325902589-fe244f204b08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    featured: false,
    stock: 25,
    material: "Mimbre sintético, estructura plegable",
    dimensions: "40cm x 45cm x 82cm"
  }
];

// Funciones del carrito
function getCart() {
  const cart = localStorage.getItem('cart');
  return cart ? JSON.parse(cart) : [];
}

function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const cart = getCart();
  const existingItem = cart.find(item => item.id === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
  }

  saveCart(cart);
  showNotification('Producto agregado al carrito');
}

function removeFromCart(productId) {
  let cart = getCart();
  cart = cart.filter(item => item.id !== productId);
  saveCart(cart);
  if (window.location.pathname.includes('carrito.html')) {
    loadCart();
  }
}

function updateQuantity(productId, quantity) {
  const cart = getCart();
  const item = cart.find(item => item.id === productId);
  
  if (item) {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      item.quantity = quantity;
      saveCart(cart);
      if (window.location.pathname.includes('carrito.html')) {
        loadCart();
      }
    }
  }
}

function getTotalItems() {
  const cart = getCart();
  return cart.reduce((total, item) => total + item.quantity, 0);
}

function getTotalPrice() {
  const cart = getCart();
  return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

function updateCartBadge() {
  const badge = document.querySelector('.cart-badge');
  const totalItems = getTotalItems();
  
  if (badge) {
    if (totalItems > 0) {
      badge.textContent = totalItems;
      badge.style.display = 'flex';
    } else {
      badge.style.display = 'none';
    }
  }
}

// Contador de visitas
function incrementVisitCount() {
  let count = localStorage.getItem('visitCount');
  count = count ? parseInt(count) + 1 : 1;
  localStorage.setItem('visitCount', count);
  return count;
}

function getVisitCount() {
  return parseInt(localStorage.getItem('visitCount') || '0');
}

// Notificaciones
function showNotification(message) {
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 80px;
    right: 20px;
    background: #10b981;
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    z-index: 9999;
    animation: slideIn 0.3s ease;
  `;
  notification.textContent = message;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => notification.remove(), 300);
  }, 2000);
}

// Formatear precio
function formatPrice(price) {
  return '$' + price.toLocaleString('es-CO');
}

// Mobile menu toggle
function toggleMobileMenu() {
  const nav = document.querySelector('nav');
  nav.classList.toggle('active');
}

// Cargar productos en catálogo
function loadCatalog(category = 'Todas') {
  const grid = document.getElementById('catalogGrid');
  if (!grid) return;

  const filteredProducts = category === 'Todas' 
    ? products 
    : products.filter(p => p.category === category);

  grid.innerHTML = filteredProducts.map(product => `
    <a href="producto.html?id=${product.id}" class="card">
      <div style="position: relative;">
        <img src="${product.image}" alt="${product.name}" class="card-image">
        ${product.featured ? '<span class="badge badge-featured" style="position: absolute; top: 1rem; left: 1rem;">Destacado</span>' : ''}
      </div>
      <div class="card-content">
        <h3 class="card-title">${product.name}</h3>
        <p class="card-description">${product.description}</p>
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span class="card-price">${formatPrice(product.price)}</span>
          <button onclick="event.preventDefault(); addToCart(${product.id})" class="btn btn-secondary" style="padding: 0.5rem 1rem;">
            🛒 Agregar
          </button>
        </div>
      </div>
    </a>
  `).join('');
}

// Cargar producto individual
function loadProduct() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = parseInt(urlParams.get('id'));
  const product = products.find(p => p.id === productId);

  if (!product) {
    document.querySelector('.container').innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">📦</div>
        <h2>Producto no encontrado</h2>
        <a href="catalogo.html" class="btn btn-secondary mt-4">Volver al catálogo</a>
      </div>
    `;
    return;
  }

  const container = document.getElementById('productDetail');
  if (!container) return;

  container.innerHTML = `
    <div class="product-detail">
      <div style="position: relative;">
        <img src="${product.image}" alt="${product.name}" class="product-image">
        ${product.featured ? '<span class="badge badge-featured" style="position: absolute; top: 1rem; left: 1rem;">Destacado</span>' : ''}
      </div>
      <div>
        <p class="text-amber mb-2">${product.category}</p>
        <h1 class="mb-4">${product.name}</h1>
        <div class="card-price mb-6" style="font-size: 2rem;">${formatPrice(product.price)}</div>
        <p class="text-gray mb-8" style="line-height: 1.8;">${product.description}</p>
        
        <div class="mb-8" style="display: grid; gap: 1rem;">
          <div style="display: flex; gap: 1rem;">
            <span style="font-size: 1.5rem;">🌿</span>
            <div>
              <h3 class="mb-2">Material</h3>
              <p class="text-gray">${product.material}</p>
            </div>
          </div>
          <div style="display: flex; gap: 1rem;">
            <span style="font-size: 1.5rem;">📏</span>
            <div>
              <h3 class="mb-2">Dimensiones</h3>
              <p class="text-gray">${product.dimensions}</p>
            </div>
          </div>
          <div style="display: flex; gap: 1rem;">
            <span style="font-size: 1.5rem;">📦</span>
            <div>
              <h3 class="mb-2">Disponibilidad</h3>
              <p class="text-gray">${product.stock} unidades disponibles</p>
            </div>
          </div>
        </div>

        <div class="quantity-selector">
          <button class="quantity-btn" onclick="decrementQuantity()">-</button>
          <span class="quantity-value" id="quantity">1</span>
          <button class="quantity-btn" onclick="incrementQuantity(${product.stock})">+</button>
          <button onclick="addProductToCart(${product.id})" class="btn btn-secondary" style="flex: 1;">
            🛒 Agregar al Carrito
          </button>
        </div>

        <div class="card p-6">
          <h3 class="mb-2">Información de envío</h3>
          <p class="text-gray">Envíos a todo Colombia. Tiempo estimado de entrega: 5-7 días hábiles.</p>
        </div>
      </div>
    </div>
  `;
}

let currentQuantity = 1;

function incrementQuantity(max) {
  if (currentQuantity < max) {
    currentQuantity++;
    document.getElementById('quantity').textContent = currentQuantity;
  }
}

function decrementQuantity() {
  if (currentQuantity > 1) {
    currentQuantity--;
    document.getElementById('quantity').textContent = currentQuantity;
  }
}

function addProductToCart(productId) {
  for (let i = 0; i < currentQuantity; i++) {
    addToCart(productId);
  }
  currentQuantity = 1;
  document.getElementById('quantity').textContent = '1';
}

// Cargar carrito
function loadCart() {
  const cart = getCart();
  const visitCount = getVisitCount();
  const container = document.getElementById('cartContent');
  
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🛒</div>
        <h2>Tu carrito está vacío</h2>
        <p class="text-gray mb-8">Agrega productos a tu carrito para comenzar tu compra</p>
        <a href="catalogo.html" class="btn btn-secondary">Ir al Catálogo</a>
      </div>
    `;
    return;
  }

  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice();

  container.innerHTML = `
    <h1 class="mb-8">Carrito de Compras</h1>

    <div class="stats-grid">
      <div class="stat-card blue">
        <div class="stat-value">${visitCount}</div>
        <div class="stat-label">👁️ Visitas Totales</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">${totalItems}</div>
        <div class="stat-label">🛒 Productos en Carrito</div>
      </div>
    </div>

    <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 2rem;">
      <div>
        ${cart.map(item => `
          <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
              <h3 class="mb-2">${item.name}</h3>
              <p class="card-price mb-4">${formatPrice(item.price)}</p>
              <div class="cart-item-actions">
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                <span class="quantity-value">${item.quantity}</span>
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                <button class="remove-btn" onclick="removeFromCart(${item.id})" title="Eliminar">🗑️</button>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
      
      <div>
        <div class="card p-6" style="position: sticky; top: 100px;">
          <h2 class="mb-6">Resumen del Pedido</h2>
          <div style="margin-bottom: 1.5rem;">
            <div class="flex justify-between mb-4">
              <span class="text-gray">Subtotal</span>
              <span style="font-weight: 600;">${formatPrice(totalPrice)}</span>
            </div>
            <div class="flex justify-between mb-4">
              <span class="text-gray">Envío</span>
              <span style="font-weight: 600;">Gratis</span>
            </div>
            <div class="flex justify-between" style="border-top: 2px solid var(--gray-100); padding-top: 1rem;">
              <span style="font-weight: 700;">Total</span>
              <span class="text-amber" style="font-weight: 700; font-size: 1.5rem;">${formatPrice(totalPrice)}</span>
            </div>
          </div>
          <a href="checkout.html" class="btn btn-secondary" style="width: 100%; text-align: center; display: block; margin-bottom: 1rem;">
            Proceder al Pago
          </a>
          <a href="catalogo.html" class="text-amber" style="display: block; text-align: center; text-decoration: none;">
            Continuar Comprando
          </a>
        </div>
      </div>
    </div>
  `;
}

// Cargar checkout
function loadCheckout() {
  const cart = getCart();
  if (cart.length === 0) {
    window.location.href = 'carrito.html';
    return;
  }

  const totalPrice = getTotalPrice();
  const summary = document.getElementById('checkoutSummary');
  
  if (summary) {
    summary.innerHTML = `
      <h2 class="mb-6">Resumen del Pedido</h2>
      <div style="margin-bottom: 1.5rem;">
        ${cart.map(item => `
          <div class="flex justify-between mb-2" style="font-size: 0.875rem;">
            <span class="text-gray">${item.name} x${item.quantity}</span>
            <span style="font-weight: 600;">${formatPrice(item.price * item.quantity)}</span>
          </div>
        `).join('')}
      </div>
      <div style="border-top: 2px solid var(--gray-100); padding-top: 1rem; margin-bottom: 1.5rem;">
        <div class="flex justify-between mb-2">
          <span class="text-gray">Subtotal</span>
          <span style="font-weight: 600;">${formatPrice(totalPrice)}</span>
        </div>
        <div class="flex justify-between mb-2">
          <span class="text-gray">Envío</span>
          <span style="font-weight: 600;">Gratis</span>
        </div>
        <div class="flex justify-between" style="font-weight: 700;">
          <span>Total</span>
          <span class="text-amber">${formatPrice(totalPrice)}</span>
        </div>
      </div>
      <button type="submit" form="checkoutForm" class="btn btn-secondary" style="width: 100%;">
        Confirmar Pedido
      </button>
    `;
  }
}

function submitCheckout(event) {
  event.preventDefault();
  
  const formData = new FormData(event.target);
  const cart = getCart();
  
  const order = {
    id: Date.now(),
    date: new Date().toISOString(),
    items: cart,
    total: getTotalPrice(),
    status: 'Procesando',
    customer: {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      address: formData.get('address'),
      city: formData.get('city')
    }
  };

  const orders = JSON.parse(localStorage.getItem('orders') || '[]');
  orders.push(order);
  localStorage.setItem('orders', JSON.stringify(orders));
  
  localStorage.removeItem('cart');
  updateCartBadge();
  
  window.location.href = 'compras.html';
}

// Cargar órdenes
function loadOrders() {
  const orders = JSON.parse(localStorage.getItem('orders') || '[]');
  const container = document.getElementById('ordersContent');
  
  if (!container) return;

  if (orders.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">📦</div>
        <h2>No tienes compras aún</h2>
        <p class="text-gray mb-8">Tus pedidos aparecerán aquí después de realizar una compra</p>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <h1 class="mb-8">Mis Compras</h1>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
      <div>
        ${orders.map((order, index) => `
          <div class="card p-6 mb-4" style="cursor: pointer;" onclick="showOrderDetail(${index})">
            <div class="flex justify-between mb-4">
              <div>
                <h3 class="mb-2">Pedido #${order.id}</h3>
                <p class="text-gray" style="font-size: 0.875rem;">
                  📅 ${new Date(order.date).toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>
              <span class="badge badge-status">${order.status}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray">${order.items.reduce((sum, item) => sum + item.quantity, 0)} producto(s)</span>
              <span class="text-amber" style="font-weight: 700;">${formatPrice(order.total)}</span>
            </div>
          </div>
        `).join('')}
      </div>
      <div>
        <div id="orderDetail" class="card p-6" style="position: sticky; top: 100px;">
          <div class="empty-state">
            <div class="empty-icon">📦</div>
            <p class="text-gray">Selecciona un pedido para ver los detalles</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

function showOrderDetail(index) {
  const orders = JSON.parse(localStorage.getItem('orders') || '[]');
  const order = orders[index];
  const detailContainer = document.getElementById('orderDetail');
  
  if (!detailContainer || !order) return;

  detailContainer.innerHTML = `
    <h2 class="mb-6">👁️ Detalle del Pedido #${order.id}</h2>
    
    <div class="mb-6">
      <h3 class="mb-4">Productos</h3>
      <div style="display: grid; gap: 0.5rem;">
        ${order.items.map(item => `
          <div class="flex justify-between">
            <span class="text-gray">${item.name} x${item.quantity}</span>
            <span style="font-weight: 600;">${formatPrice(item.price * item.quantity)}</span>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="mb-6" style="border-bottom: 2px solid var(--gray-100); padding-bottom: 1.5rem;">
      <h3 class="mb-4">Información de Entrega</h3>
      <div style="font-size: 0.875rem; display: grid; gap: 0.5rem;">
        <p class="text-gray">${order.customer.name}</p>
        <p class="text-gray">${order.customer.email}</p>
        <p class="text-gray">${order.customer.phone}</p>
        <p class="text-gray mt-4">📍 ${order.customer.address}</p>
        <p class="text-gray">${order.customer.city}</p>
      </div>
    </div>

    <div class="flex justify-between">
      <span style="font-weight: 700;">Total Pagado</span>
      <span class="text-amber" style="font-weight: 700; font-size: 1.5rem;">${formatPrice(order.total)}</span>
    </div>
  `;
}

function submitContact(event) {
  event.preventDefault();
  
  const successMsg = document.getElementById('contactSuccess');
  const form = event.target;
  
  successMsg.style.display = 'block';
  form.style.display = 'none';
  
  setTimeout(() => {
    form.reset();
    form.style.display = 'block';
    successMsg.style.display = 'none';
  }, 3000);
}

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
  // Incrementar contador de visitas
  incrementVisitCount();
  
  // Actualizar badge del carrito
  updateCartBadge();
  
  // Cargar contenido según la página
  const path = window.location.pathname;
  
  if (path.includes('catalogo.html')) {
    loadCatalog();
    
    // Event listeners para filtros
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
      btn.addEventListener('click', function() {
        filterButtons.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        loadCatalog(this.dataset.category);
      });
    });
  } else if (path.includes('producto.html')) {
    loadProduct();
  } else if (path.includes('carrito.html')) {
    loadCart();
  } else if (path.includes('checkout.html')) {
    loadCheckout();
  } else if (path.includes('compras.html')) {
    loadOrders();
  }
});

// Agregar estilos para animaciones
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(100%);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);



