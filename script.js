const products = [
    {
        id: '1',
        name: 'AirFlow Runner Pro',
        brand: 'RunTech',
        price: 129.99,
        originalPrice: 159.99,
        images: [
            'https://images.unsplash.com/photo-1582231640349-6ea6881fabeb?w=800',
            'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800',
            'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800'
        ],
        description: 'Tenis de alto rendimiento diseñados para corredores serios. Tecnología de amortiguación avanzada y soporte óptimo para largas distancias.',
        colors: ['Blanco', 'Negro', 'Azul'],
        sizes: [38, 39, 40, 41, 42, 43, 44, 45],
        category: 'running',
        rating: 4.8,
        reviewCount: 234,
        featured: true
    },
    {
        id: '2',
        name: 'Urban Court Classic',
        brand: 'StreetStyle',
        price: 89.99,
        images: [
            'https://images.unsplash.com/photo-1761575074211-c58a7f782432?w=800',
            'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800',
            'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800'
        ],
        description: 'Tenis casual versátiles perfectos para el día a día. Estilo minimalista con máxima comodidad.',
        colors: ['Azul', 'Blanco', 'Gris'],
        sizes: [37, 38, 39, 40, 41, 42, 43, 44],
        category: 'casual',
        rating: 4.5,
        reviewCount: 156,
        featured: true
    },
    {
        id: '3',
        name: 'Slam Dunk Elite',
        brand: 'HoopMaster',
        price: 149.99,
        originalPrice: 179.99,
        images: [
            'https://images.unsplash.com/photo-1663166552284-b237542c82db?w=800',
            'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800',
            'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800'
        ],
        description: 'Diseñados para jugadores de baloncesto de alto nivel. Soporte de tobillo superior y tracción excepcional en la cancha.',
        colors: ['Negro', 'Rojo', 'Blanco'],
        sizes: [39, 40, 41, 42, 43, 44, 45, 46],
        category: 'basketball',
        rating: 4.9,
        reviewCount: 312,
        featured: true
    },
    {
        id: '4',
        name: 'Skate Flex Pro',
        brand: 'BoardLife',
        price: 79.99,
        images: [
            'https://images.unsplash.com/photo-1598500492955-42a76eea3c59?w=800',
            'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=800',
            'https://images.unsplash.com/photo-1603787081207-362bcef7f997?w=800'
        ],
        description: 'Tenis especializados para skateboarding. Suela de goma vulcanizada para máximo agarre y durabilidad.',
        colors: ['Rojo', 'Negro', 'Gris'],
        sizes: [38, 39, 40, 41, 42, 43, 44],
        category: 'skateboard',
        rating: 4.6,
        reviewCount: 89,
        featured: false
    },
    {
        id: '5',
        name: 'Sprint Max 360',
        brand: 'RunTech',
        price: 139.99,
        images: [
            'https://images.unsplash.com/photo-1621519765361-59e3295d0f2c?w=800',
            'https://images.unsplash.com/photo-1539185441755-769473a23570?w=800',
            'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800'
        ],
        description: 'Tenis de running con amortiguación de 360 grados. Perfectos para entrenamientos intensos y competencias.',
        colors: ['Verde', 'Azul', 'Negro'],
        sizes: [38, 39, 40, 41, 42, 43, 44, 45],
        category: 'running',
        rating: 4.7,
        reviewCount: 178,
        featured: false
    },
    {
        id: '6',
        name: 'Rose Street Walker',
        brand: 'StreetStyle',
        price: 99.99,
        originalPrice: 119.99,
        images: [
            'https://images.unsplash.com/photo-1739138053555-13321c306033?w=800',
            'https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=800',
            'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800'
        ],
        description: 'Tenis casual con diseño moderno y femenino. Comodidad todo el día con estilo urbano contemporáneo.',
        colors: ['Rosa', 'Blanco', 'Morado'],
        sizes: [35, 36, 37, 38, 39, 40, 41, 42],
        category: 'casual',
        rating: 4.4,
        reviewCount: 92,
        featured: true
    },
    {
        id: '7',
        name: 'Court Legend Pro',
        brand: 'HoopMaster',
        price: 169.99,
        images: [
            'https://images.unsplash.com/photo-1552346154-21d32810aba3?w=800',
            'https://images.unsplash.com/photo-1579338559194-a162d19bf842?w=800',
            'https://images.unsplash.com/photo-1556906781-9a412961c28c?w=800'
        ],
        description: 'La evolución del basketball. Tecnología Zoom Air para una respuesta explosiva en cada salto.',
        colors: ['Blanco/Oro', 'Negro/Rojo', 'Azul'],
        sizes: [39, 40, 41, 42, 43, 44, 45, 46],
        category: 'basketball',
        rating: 4.8,
        reviewCount: 256,
        featured: false
    },
    {
        id: '8',
        name: 'Velocity Trail',
        brand: 'RunTech',
        price: 119.99,
        images: [
            'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800',
            'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800',
            'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=800'
        ],
        description: 'Diseñados para trail running. Suela agresiva con tracción multi-dirección para terrenos difíciles.',
        colors: ['Negro/Naranja', 'Gris', 'Verde'],
        sizes: [38, 39, 40, 41, 42, 43, 44, 45],
        category: 'running',
        rating: 4.6,
        reviewCount: 143,
        featured: false
    }
];

// State Management
let state = {
    currentView: 'home',
    cart: [],
    currentUser: null,
    orders: [],
    selectedProduct: null,
    filters: {
        category: 'all',
        brand: 'all',
        priceMin: 0,
        priceMax: 200,
        search: ''
    },
    sortBy: 'featured'
};

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    loadFromLocalStorage();
    initBrandFilter();
    renderFeaturedProducts();
    updateCartBadge();
    showView('home');
});

// Local Storage
function loadFromLocalStorage() {
    const savedCart = localStorage.getItem('stridex_cart');
    if (savedCart) state.cart = JSON.parse(savedCart);
    
    const savedUser = localStorage.getItem('stridex_user');
    if (savedUser) state.currentUser = JSON.parse(savedUser);
    
    const savedOrders = localStorage.getItem('stridex_orders');
    if (savedOrders) state.orders = JSON.parse(savedOrders);
}

function saveCart() {
    localStorage.setItem('stridex_cart', JSON.stringify(state.cart));
}

function saveUser() {
    if (state.currentUser) {
        localStorage.setItem('stridex_user', JSON.stringify(state.currentUser));
    } else {
        localStorage.removeItem('stridex_user');
    }
}

function saveOrders() {
    localStorage.setItem('stridex_orders', JSON.stringify(state.orders));
}

// Navigation
function showView(view) {
    state.currentView = view;
    
    // Hide all views
    document.querySelectorAll('.view').forEach(v => v.style.display = 'none');
    
    // Show current view
    const viewElement = document.getElementById(view + 'View');
    if (viewElement) {
        viewElement.style.display = 'block';
    }
    
    // Render view content
    switch(view) {
        case 'home':
            renderFeaturedProducts();
            break;
        case 'catalog':
            renderCatalog();
            break;
        case 'cart':
            renderCart();
            break;
        case 'account':
            renderAccount();
            break;
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.style.display = menu.style.display === 'none' ? 'flex' : 'none';
}

function toggleSearch() {
    const searchBar = document.getElementById('searchBar');
    searchBar.style.display = searchBar.style.display === 'none' ? 'flex' : 'none';
    if (searchBar.style.display === 'flex') {
        document.getElementById('searchInput').focus();
    }
}

function handleSearch() {
    state.filters.search = document.getElementById('searchInput').value;
    showView('catalog');
}

// Product Rendering
function renderFeaturedProducts() {
    const container = document.getElementById('featuredProducts');
    const featuredProducts = products.filter(p => p.featured).slice(0, 4);
    container.innerHTML = featuredProducts.map(product => createProductCard(product)).join('');
}

function renderCatalog() {
    const filteredProducts = getFilteredProducts();
    const container = document.getElementById('catalogProducts');
    const noProducts = document.getElementById('noProducts');
    const productCount = document.getElementById('productCount');
    
    productCount.textContent = `${filteredProducts.length} ${filteredProducts.length === 1 ? 'producto' : 'productos'}`;
    
    if (filteredProducts.length === 0) {
        container.style.display = 'none';
        noProducts.style.display = 'block';
    } else {
        container.style.display = 'grid';
        noProducts.style.display = 'none';
        container.innerHTML = filteredProducts.map(product => createProductCard(product)).join('');
    }
}

function createProductCard(product) {
    const discount = product.originalPrice 
        ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
        : 0;
    
    return `
        <div class="product-card" onclick="viewProduct('${product.id}')">
            ${discount > 0 ? `<div class="product-badge">-${discount}%</div>` : ''}
            <button class="quick-view-btn" onclick="event.stopPropagation(); openQuickView('${product.id}')">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                </svg>
            </button>
            <div class="product-image">
                <img src="${product.images[0]}" alt="${product.name}">
            </div>
            <div class="product-info">
                <div class="product-brand">${product.brand}</div>
                <div class="product-name">${product.name}</div>
                <div class="product-rating">
                    <span class="star">★</span>
                    <span>${product.rating}</span>
                    <span class="text-muted">(${product.reviewCount})</span>
                </div>
                <div class="product-price">
                    <span class="price-current">$${product.price.toFixed(2)}</span>
                    ${product.originalPrice ? `<span class="price-original">$${product.originalPrice.toFixed(2)}</span>` : ''}
                </div>
                <div class="product-colors">
                    ${product.colors.slice(0, 3).map(color => `
                        <div class="color-dot" style="background: ${getColorHex(color)}" title="${color}"></div>
                    `).join('')}
                    ${product.colors.length > 3 ? `<span class="text-muted" style="font-size: 0.75rem;">+${product.colors.length - 3}</span>` : ''}
                </div>
            </div>
        </div>
    `;
}

function viewProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    state.selectedProduct = product;
    renderProductDetail(product);
    showView('productDetail');
}

function renderProductDetail(product) {
    const container = document.getElementById('productDetailContent');
    
    const discount = product.originalPrice 
        ? (product.originalPrice - product.price).toFixed(2)
        : 0;
    
    container.innerHTML = `
        <div class="product-detail">
            <div class="product-gallery">
                <div class="gallery-main" id="galleryMain">
                    <img src="${product.images[0]}" alt="${product.name}">
                </div>
                <div class="gallery-thumbs">
                    ${product.images.map((img, i) => `
                        <div class="thumb ${i === 0 ? 'active' : ''}" onclick="changeMainImage('${img}', ${i})">
                            <img src="${img}" alt="${product.name} - Vista ${i + 1}">
                        </div>
                    `).join('')}
                </div>
                <p style="text-align: center; font-size: 0.875rem; color: var(--color-gray-500); margin-top: 1rem;">
                    Selecciona una imagen para vista 360°
                </p>
            </div>
            
            <div class="product-detail-info">
                <div class="detail-brand">${product.brand}</div>
                <h1>${product.name}</h1>
                
                <div class="detail-rating">
                    ${[...Array(5)].map((_, i) => `
                        <span class="star" style="color: ${i < Math.floor(product.rating) ? 'var(--color-yellow)' : 'var(--color-gray-300)'}">★</span>
                    `).join('')}
                    <span>${product.rating}</span>
                    <span class="text-muted">(${product.reviewCount} reseñas)</span>
                </div>
                
                <div class="detail-price">
                    <span class="detail-price-current">$${product.price.toFixed(2)}</span>
                    ${product.originalPrice ? `
                        <span class="detail-price-original">$${product.originalPrice.toFixed(2)}</span>
                        <span class="savings-badge">Ahorra $${discount}</span>
                    ` : ''}
                </div>
                
                <div class="color-selector">
                    <label>Colores disponibles</label>
                    <div class="color-options">
                        ${product.colors.map(color => `
                            <div class="color-option">
                                <div class="color-circle" style="background: ${getColorHex(color)}"></div>
                                <div class="color-name">${color}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="size-selector">
                    <label>Selecciona tu talla</label>
                    <div class="size-grid" id="sizeGrid">
                        ${product.sizes.map(size => `
                            <button class="size-btn" onclick="selectSize(${size})">${size}</button>
                        `).join('')}
                    </div>
                </div>
                
                <div class="quantity-selector">
                    <label>Cantidad</label>
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="changeQuantity(-1)">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                        </button>
                        <span class="quantity-value" id="quantityValue">1</span>
                        <button class="quantity-btn" onclick="changeQuantity(1)">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                        </button>
                    </div>
                </div>
                
                <button class="add-to-cart-btn" onclick="addToCartFromDetail()">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="9" cy="21" r="1"></circle>
                        <circle cx="20" cy="21" r="1"></circle>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                    Agregar al Carrito
                </button>
                
                <div class="product-features">
                    <div class="feature">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="1" y="3" width="15" height="13"></rect>
                            <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                            <circle cx="5.5" cy="18.5" r="2.5"></circle>
                            <circle cx="18.5" cy="18.5" r="2.5"></circle>
                        </svg>
                        <div>
                            <div class="feature-title">Envío gratis en compras mayores a $100</div>
                            <div class="feature-description">Entrega en 3-5 días hábiles</div>
                        </div>
                    </div>
                    <div class="feature">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="23 4 23 10 17 10"></polyline>
                            <polyline points="1 20 1 14 7 14"></polyline>
                            <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                        </svg>
                        <div>
                            <div class="feature-title">Devoluciones gratuitas</div>
                            <div class="feature-description">30 días para cambios y devoluciones</div>
                        </div>
                    </div>
                    <div class="feature">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                        </svg>
                        <div>
                            <div class="feature-title">Garantía de calidad</div>
                            <div class="feature-description">Productos 100% auténticos</div>
                        </div>
                    </div>
                </div>
                
                <div style="margin-top: 2rem;">
                    <h3>Descripción</h3>
                    <p class="text-muted">${product.description}</p>
                    <ul style="color: var(--color-gray-600); margin-top: 1rem;">
                        <li style="margin-bottom: 0.5rem;">• Tecnología de amortiguación avanzada</li>
                        <li style="margin-bottom: 0.5rem;">• Materiales transpirables de alta calidad</li>
                        <li style="margin-bottom: 0.5rem;">• Diseño ergonómico para máximo confort</li>
                        <li style="margin-bottom: 0.5rem;">• Suela de goma antideslizante</li>
                        <li style="margin-bottom: 0.5rem;">• Ideal para uso diario y deportivo</li>
                    </ul>
                </div>
            </div>
        </div>
    `;
}

let selectedSize = null;
let quantity = 1;

function changeMainImage(imgSrc, index) {
    document.getElementById('galleryMain').innerHTML = `<img src="${imgSrc}" alt="Product">`;
    document.querySelectorAll('.thumb').forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
    });
}

function selectSize(size) {
    selectedSize = size;
    document.querySelectorAll('.size-btn').forEach(btn => {
        btn.classList.toggle('selected', parseInt(btn.textContent) === size);
    });
}

function changeQuantity(delta) {
    quantity = Math.max(1, quantity + delta);
    document.getElementById('quantityValue').textContent = quantity;
}

function addToCartFromDetail() {
    if (!selectedSize) {
        showToast('Por favor selecciona una talla', 'error');
        return;
    }
    
    addToCart(state.selectedProduct.id, selectedSize, quantity);
    showToast(`${quantity} ${quantity === 1 ? 'producto agregado' : 'productos agregados'} al carrito`, 'success');
}

// Quick View Modal
function openQuickView(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = `
        <div style="margin-bottom: 1rem;">
            <h3>${product.name}</h3>
            <p class="text-muted">${product.brand}</p>
        </div>
        <img src="${product.images[0]}" alt="${product.name}" style="width: 100%; aspect-ratio: 16/9; object-fit: cover; border-radius: 8px; margin-bottom: 1rem;">
        <div class="detail-price" style="margin-bottom: 1rem;">
            <span style="font-size: 1.5rem; font-weight: 700;">$${product.price.toFixed(2)}</span>
            ${product.originalPrice ? `<span class="detail-price-original">$${product.originalPrice.toFixed(2)}</span>` : ''}
        </div>
        <div class="size-selector">
            <label>Selecciona tu talla</label>
            <div class="size-grid" id="quickViewSizeGrid">
                ${product.sizes.map(size => `
                    <button class="size-btn" onclick="selectQuickViewSize(${size})">${size}</button>
                `).join('')}
            </div>
        </div>
        <div style="display: flex; gap: 1rem; margin-top: 1.5rem;">
            <button class="btn-primary" style="flex: 1;" onclick="addToCartFromQuickView('${product.id}')">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                Agregar al Carrito
            </button>
            <button class="btn-secondary" onclick="viewProduct('${product.id}'); closeModal();">
                Ver Detalles
            </button>
        </div>
    `;
    
    document.getElementById('modal').classList.add('show');
}

let quickViewSelectedSize = null;

function selectQuickViewSize(size) {
    quickViewSelectedSize = size;
    document.querySelectorAll('#quickViewSizeGrid .size-btn').forEach(btn => {
        btn.classList.toggle('selected', parseInt(btn.textContent) === size);
    });
}

function addToCartFromQuickView(productId) {
    if (!quickViewSelectedSize) {
        showToast('Por favor selecciona una talla', 'error');
        return;
    }
    
    addToCart(productId, quickViewSelectedSize, 1);
    showToast('Producto agregado al carrito', 'success');
    closeModal();
    quickViewSelectedSize = null;
}

function closeModal() {
    document.getElementById('modal').classList.remove('show');
}

// Cart Management
function addToCart(productId, size, qty = 1) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = state.cart.find(item => item.productId === productId && item.size === size);
    
    if (existingItem) {
        existingItem.quantity += qty;
    } else {
        state.cart.push({ productId, size, quantity: qty });
    }
    
    saveCart();
    updateCartBadge();
}

function updateCartQuantity(productId, size, newQuantity) {
    if (newQuantity <= 0) {
        removeFromCart(productId, size);
        return;
    }
    
    const item = state.cart.find(item => item.productId === productId && item.size === size);
    if (item) {
        item.quantity = newQuantity;
        saveCart();
        renderCart();
        updateCartBadge();
    }
}

function removeFromCart(productId, size) {
    state.cart = state.cart.filter(item => !(item.productId === productId && item.size === size));
    saveCart();
    renderCart();
    updateCartBadge();
    showToast('Producto eliminado del carrito', 'success');
}

function updateCartBadge() {
    const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartBadge').textContent = totalItems;
    document.getElementById('cartBadge').style.display = totalItems > 0 ? 'flex' : 'none';
}

function renderCart() {
    const container = document.getElementById('cartContent');
    
    if (state.cart.length === 0) {
        container.innerHTML = `
            <div class="cart-empty">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                <h2>Tu carrito está vacío</h2>
                <p class="text-muted">Agrega algunos productos para comenzar</p>
                <button class="btn-primary" onclick="showView('catalog')">Explorar Productos</button>
            </div>
        `;
        return;
    }
    
    const subtotal = calculateSubtotal();
    const shipping = subtotal > 100 ? 0 : 10;
    const total = subtotal + shipping;
    
    container.innerHTML = `
        <div class="cart-grid">
            <div class="cart-items">
                ${state.cart.map(item => {
                    const product = products.find(p => p.id === item.productId);
                    return `
                        <div class="cart-item">
                            <div class="cart-item-image">
                                <img src="${product.images[0]}" alt="${product.name}">
                            </div>
                            <div class="cart-item-details">
                                <div class="cart-item-header">
                                    <div>
                                        <div class="cart-item-name">${product.name}</div>
                                        <div class="cart-item-brand">${product.brand}</div>
                                    </div>
                                    <button class="remove-btn" onclick="removeFromCart('${item.productId}', ${item.size})">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <polyline points="3 6 5 6 21 6"></polyline>
                                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                        </svg>
                                    </button>
                                </div>
                                <div class="cart-item-size">Talla: ${item.size}</div>
                                <div class="cart-item-footer">
                                    <div class="item-quantity-controls">
                                        <button class="qty-btn" onclick="updateCartQuantity('${item.productId}', ${item.size}, ${item.quantity - 1})">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                            </svg>
                                        </button>
                                        <span class="qty-value">${item.quantity}</span>
                                        <button class="qty-btn" onclick="updateCartQuantity('${item.productId}', ${item.size}, ${item.quantity + 1})">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                            </svg>
                                        </button>
                                    </div>
                                    <div class="item-price">
                                        <div class="item-total">$${(product.price * item.quantity).toFixed(2)}</div>
                                        <div class="item-unit-price">$${product.price.toFixed(2)} c/u</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
            
            <div class="cart-summary">
                <h3>Resumen del Pedido</h3>
                <div class="summary-row">
                    <span class="summary-label">Subtotal</span>
                    <span>$${subtotal.toFixed(2)}</span>
                </div>
                <div class="summary-row">
                    <span class="summary-label">Envío</span>
                    <span>${shipping === 0 ? 'Gratis' : '$' + shipping.toFixed(2)}</span>
                </div>
                ${subtotal < 100 && shipping > 0 ? `
                    <p class="free-shipping-note">Agrega $${(100 - subtotal).toFixed(2)} más para envío gratis</p>
                ` : ''}
                <div class="summary-total">
                    <div class="summary-row">
                        <span>Total</span>
                        <span>$${total.toFixed(2)}</span>
                    </div>
                </div>
                <button class="checkout-btn" onclick="showView('checkout')">Proceder al Pago</button>
                <button class="continue-shopping-btn" onclick="showView('catalog')">Continuar Comprando</button>
                
                <div class="trust-badges">
                    <div class="trust-badge">
                        <div class="badge-dot"></div>
                        Pago 100% seguro
                    </div>
                    <div class="trust-badge">
                        <div class="badge-dot"></div>
                        Envío gratis en compras > $100
                    </div>
                    <div class="trust-badge">
                        <div class="badge-dot"></div>
                        Devoluciones gratuitas 30 días
                    </div>
                </div>
            </div>
        </div>
    `;
}

function calculateSubtotal() {
    return state.cart.reduce((sum, item) => {
        const product = products.find(p => p.id === item.productId);
        return sum + (product.price * item.quantity);
    }, 0);
}

// Checkout
function renderCheckout() {
    const container = document.getElementById('checkoutContent');
    const subtotal = calculateSubtotal();
    const shipping = subtotal > 100 ? 0 : 10;
    const total = subtotal + shipping;
    
    container.innerHTML = `
        <div class="checkout-steps">
            <div class="step active">
                <div class="step-number">1</div>
                <span>Envío</span>
            </div>
            <div class="step-divider"></div>
            <div class="step">
                <div class="step-number">2</div>
                <span>Pago</span>
            </div>
            <div class="step-divider"></div>
            <div class="step">
                <div class="step-number">3</div>
                <span>Confirmación</span>
            </div>
        </div>
        
        <div class="checkout-grid">
            <div class="checkout-form">
                <h2 style="margin-bottom: 1.5rem;">Información de Envío</h2>
                <form onsubmit="processCheckout(event)">
                    <div class="form-grid">
                        <div class="form-row">
                            <div class="form-group">
                                <label>Nombre completo</label>
                                <input type="text" required id="checkoutName">
                            </div>
                            <div class="form-group">
                                <label>Email</label>
                                <input type="email" required id="checkoutEmail">
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Dirección</label>
                            <input type="text" required id="checkoutAddress">
                        </div>
                        <div class="form-row">
                            <div class="form-group">
                                <label>Ciudad</label>
                                <input type="text" required id="checkoutCity">
                            </div>
                            <div class="form-group">
                                <label>Código Postal</label>
                                <input type="text" required id="checkoutPostal">
                            </div>
                            <div class="form-group">
                                <label>País</label>
                                <select id="checkoutCountry">
                                    <option>México</option>
                                    <option>Estados Unidos</option>
                                    <option>España</option>
                                    <option>Colombia</option>
                                    <option>Argentina</option>
                                </select>
                            </div>
                        </div>
                        
                        <h3 style="margin-top: 1.5rem; margin-bottom: 1rem;">Información de Pago</h3>
                        
                        <div class="form-group">
                            <label>Número de tarjeta</label>
                            <input type="text" placeholder="1234 5678 9012 3456" maxlength="19" required>
                        </div>
                        <div class="form-group">
                            <label>Nombre en la tarjeta</label>
                            <input type="text" required>
                        </div>
                        <div class="form-row">
                            <div class="form-group">
                                <label>Fecha de expiración</label>
                                <input type="text" placeholder="MM/AA" maxlength="5" required>
                            </div>
                            <div class="form-group">
                                <label>CVV</label>
                                <input type="text" placeholder="123" maxlength="4" required>
                            </div>
                        </div>
                        
                        <div class="security-notice">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                            </svg>
                            <p>Tu pago está protegido con cifrado SSL de 256 bits</p>
                        </div>
                    </div>
                    
                    <button type="submit" class="btn-primary" style="width: 100%; margin-top: 1rem;">
                        Realizar Pedido - $${total.toFixed(2)}
                    </button>
                </form>
            </div>
            
            <div class="order-summary">
                <h3>Resumen del Pedido</h3>
                <div class="order-items">
                    ${state.cart.map(item => {
                        const product = products.find(p => p.id === item.productId);
                        return `
                            <div class="order-item">
                                <div class="order-item-image">
                                    <img src="${product.images[0]}" alt="${product.name}">
                                </div>
                                <div class="order-item-info">
                                    <div class="order-item-name">${product.name}</div>
                                    <div class="order-item-details">Talla: ${item.size} × ${item.quantity}</div>
                                    <div class="order-item-price">$${(product.price * item.quantity).toFixed(2)}</div>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
                
                <div style="border-top: 1px solid var(--color-gray-300); padding-top: 1rem;">
                    <div class="summary-row">
                        <span class="summary-label">Subtotal</span>
                        <span>$${subtotal.toFixed(2)}</span>
                    </div>
                    <div class="summary-row">
                        <span class="summary-label">Envío</span>
                        <span>${shipping === 0 ? 'Gratis' : '$' + shipping.toFixed(2)}</span>
                    </div>
                    <div class="summary-row" style="padding-top: 0.75rem; border-top: 1px solid var(--color-gray-300); margin-top: 0.75rem; font-weight: 600;">
                        <span>Total</span>
                        <span>$${total.toFixed(2)}</span>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Pre-fill if user is logged in
    if (state.currentUser) {
        document.getElementById('checkoutName').value = state.currentUser.name || '';
        document.getElementById('checkoutEmail').value = state.currentUser.email || '';
    }
}

function processCheckout(e) {
    e.preventDefault();
    
    const subtotal = calculateSubtotal();
    const shipping = subtotal > 100 ? 0 : 10;
    const total = subtotal + shipping;
    
    const order = {
        id: Date.now().toString(),
        userId: state.currentUser?.id || 'guest',
        items: [...state.cart],
        total: total,
        shipping: {
            name: document.getElementById('checkoutName').value,
            email: document.getElementById('checkoutEmail').value,
            address: document.getElementById('checkoutAddress').value,
            city: document.getElementById('checkoutCity').value,
            postalCode: document.getElementById('checkoutPostal').value,
            country: document.getElementById('checkoutCountry').value
        },
        status: 'pending',
        createdAt: new Date().toISOString()
    };
    
    state.orders.push(order);
    saveOrders();
    
    // Clear cart
    state.cart = [];
    saveCart();
    updateCartBadge();
    
    // Show confirmation
    const container = document.getElementById('checkoutContent');
    container.innerHTML = `
        <div class="confirmation">
            <div class="confirmation-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
            </div>
            <h2>¡Pedido Confirmado!</h2>
            <p class="text-muted">Gracias por tu compra. Recibirás un email de confirmación en breve.</p>
            <p style="margin-top: 1rem;"><strong>Número de pedido:</strong> #${order.id}</p>
            <button class="btn-primary" onclick="showView('account')" style="margin-top: 2rem;">Ver Mis Pedidos</button>
        </div>
    `;
    
    showToast('¡Pedido realizado con éxito!', 'success');
}

// Account
function renderAccount() {
    const container = document.getElementById('accountContent');
    
    if (!state.currentUser) {
        container.innerHTML = `
            <div class="account-container">
                <div class="account-form">
                    <div class="account-header">
                        <div class="account-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                        </div>
                        <h2 id="authTitle">Iniciar Sesión</h2>
                        <p class="auth-toggle">
                            <span id="authToggleText">¿No tienes cuenta?</span>
                            <button onclick="toggleAuthMode()">
                                <span id="authToggleBtn">Regístrate</span>
                            </button>
                        </p>
                    </div>
                    
                    <form onsubmit="handleAuth(event)" id="authForm">
                        <div class="form-grid">
                            <div class="form-group" id="nameField" style="display: none;">
                                <label>Nombre completo</label>
                                <div class="input-with-icon">
                                    <svg class="input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                    <input type="text" id="authName" placeholder="Juan Pérez">
                                </div>
                            </div>
                            <div class="form-group">
                                <label>Email</label>
                                <div class="input-with-icon">
                                    <svg class="input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                        <polyline points="22,6 12,13 2,6"></polyline>
                                    </svg>
                                    <input type="email" id="authEmail" placeholder="tu@email.com" required>
                                </div>
                            </div>
                            <div class="form-group">
                                <label>Contraseña</label>
                                <div class="input-with-icon">
                                    <svg class="input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                    </svg>
                                    <input type="password" id="authPassword" placeholder="••••••••" required>
                                </div>
                            </div>
                        </div>
                        <button type="submit" class="btn-primary" style="width: 100%;" id="authSubmitBtn">
                            Iniciar Sesión
                        </button>
                    </form>
                    
                    <div class="form-footer">
                        Al continuar, aceptas nuestros términos y condiciones
                    </div>
                </div>
            </div>
        `;
        return;
    }
    
    // User is logged in
    const userOrders = state.orders.filter(o => o.userId === state.currentUser.id);
    const totalSpent = userOrders.reduce((sum, order) => sum + order.total, 0);
    
    container.innerHTML = `
        <div class="account-dashboard">
            <div>
                <div class="user-info-card">
                    <div class="dashboard-header">
                        <div>
                            <h1>Mi Cuenta</h1>
                            <p class="text-muted">Hola, ${state.currentUser.name}</p>
                        </div>
                    </div>
                    <div class="info-row">
                        <div class="info-label">Nombre</div>
                        <div class="info-value">${state.currentUser.name}</div>
                    </div>
                    <div class="info-row">
                        <div class="info-label">Email</div>
                        <div class="info-value">${state.currentUser.email}</div>
                    </div>
                    <div class="info-row">
                        <div class="info-label">Miembro desde</div>
                        <div class="info-value">${new Date(state.currentUser.createdAt).toLocaleDateString('es-ES')}</div>
                    </div>
                    <button class="btn-secondary" onclick="logout()" style="width: 100%; margin-top: 1.5rem;">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                            <polyline points="16 17 21 12 16 7"></polyline>
                            <line x1="21" y1="12" x2="9" y2="12"></line>
                        </svg>
                        Cerrar Sesión
                    </button>
                </div>
                
                <div class="stats-card">
                    <div class="stats-grid">
                        <div>
                            <div style="font-size: 1.5rem; font-weight: 700; margin-bottom: 0.25rem;">${userOrders.length}</div>
                            <div class="text-muted" style="font-size: 0.875rem;">Pedidos</div>
                        </div>
                        <div>
                            <div style="font-size: 1.5rem; font-weight: 700; margin-bottom: 0.25rem;">$${totalSpent.toFixed(2)}</div>
                            <div class="text-muted" style="font-size: 0.875rem;">Total gastado</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="orders-card">
                <div class="card-header">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line>
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                        <line x1="12" y1="22.08" x2="12" y2="12"></line>
                    </svg>
                    <h3>Historial de Pedidos</h3>
                </div>
                
                ${userOrders.length === 0 ? `
                    <div class="orders-empty">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line>
                            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                            <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                            <line x1="12" y1="22.08" x2="12" y2="12"></line>
                        </svg>
                        <p class="text-muted">No tienes pedidos aún</p>
                    </div>
                ` : `
                    <div class="order-list">
                        ${userOrders.reverse().map(order => `
                            <div class="order-card">
                                <div class="order-header">
                                    <div>
                                        <div class="order-id">Pedido #${order.id}</div>
                                        <div class="order-date">${new Date(order.createdAt).toLocaleDateString('es-ES', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}</div>
                                    </div>
                                    <span class="order-status status-${order.status}">
                                        ${getStatusText(order.status)}
                                    </span>
                                </div>
                                <div class="order-items-list">
                                    ${order.items.map(item => {
                                        const product = products.find(p => p.id === item.productId);
                                        return `
                                            <div class="order-item-row">
                                                <div class="order-item-row-image">
                                                    <img src="${product.images[0]}" alt="${product.name}">
                                                </div>
                                                <div class="order-item-row-info">
                                                    <div class="order-item-row-name">${product.name}</div>
                                                    <div class="order-item-row-details">Talla ${item.size} × ${item.quantity}</div>
                                                </div>
                                                <div>$${(product.price * item.quantity).toFixed(2)}</div>
                                            </div>
                                        `;
                                    }).join('')}
                                </div>
                                <div class="order-footer">
                                    <span class="text-muted">Total</span>
                                    <span style="font-weight: 600;">$${order.total.toFixed(2)}</span>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                `}
            </div>
        </div>
    `;
}

let isLoginMode = true;

function toggleAuthMode() {
    isLoginMode = !isLoginMode;
    
    document.getElementById('authTitle').textContent = isLoginMode ? 'Iniciar Sesión' : 'Crear Cuenta';
    document.getElementById('authToggleText').textContent = isLoginMode ? '¿No tienes cuenta?' : '¿Ya tienes cuenta?';
    document.getElementById('authToggleBtn').textContent = isLoginMode ? 'Regístrate' : 'Inicia sesión';
    document.getElementById('authSubmitBtn').textContent = isLoginMode ? 'Iniciar Sesión' : 'Crear Cuenta';
    document.getElementById('nameField').style.display = isLoginMode ? 'none' : 'block';
    
    if (!isLoginMode) {
        document.getElementById('authName').required = true;
    } else {
        document.getElementById('authName').required = false;
    }
}

function handleAuth(e) {
    e.preventDefault();
    
    const email = document.getElementById('authEmail').value;
    const password = document.getElementById('authPassword').value;
    const name = document.getElementById('authName').value;
    
    if (isLoginMode) {
        // Login
        state.currentUser = {
            id: Date.now().toString(),
            email: email,
            name: email.split('@')[0],
            createdAt: new Date().toISOString()
        };
        saveUser();
        showToast('¡Bienvenido de nuevo!', 'success');
    } else {
        // Register
        state.currentUser = {
            id: Date.now().toString(),
            email: email,
            name: name,
            createdAt: new Date().toISOString()
        };
        saveUser();
        showToast('¡Cuenta creada exitosamente!', 'success');
    }
    
    renderAccount();
}

function logout() {
    state.currentUser = null;
    saveUser();
    showToast('Sesión cerrada', 'success');
    showView('home');
}

function getStatusText(status) {
    const statusMap = {
        'pending': 'Pendiente',
        'processing': 'Procesando',
        'shipped': 'En camino',
        'delivered': 'Entregado'
    };
    return statusMap[status] || 'Pendiente';
}

// Filters
function initBrandFilter() {
    const brands = [...new Set(products.map(p => p.brand))].sort();
    const brandFilter = document.getElementById('brandFilter');
    brands.forEach(brand => {
        const option = document.createElement('option');
        option.value = brand;
        option.textContent = brand;
        brandFilter.appendChild(option);
    });
}

function toggleFilters() {
    const panel = document.getElementById('filtersPanel');
    panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
}

function applyFilters() {
    state.filters.category = document.getElementById('categoryFilter').value;
    state.filters.brand = document.getElementById('brandFilter').value;
    renderCatalog();
}

function updatePriceRange() {
    const min = parseInt(document.getElementById('priceMinSlider').value);
    const max = parseInt(document.getElementById('priceMaxSlider').value);
    
    if (min > max) {
        document.getElementById('priceMinSlider').value = max;
        document.getElementById('priceMaxSlider').value = min;
    }
    
    state.filters.priceMin = Math.min(min, max);
    state.filters.priceMax = Math.max(min, max);
    
    document.getElementById('priceMin').textContent = state.filters.priceMin;
    document.getElementById('priceMax').textContent = state.filters.priceMax;
    
    renderCatalog();
}

function clearFilters() {
    state.filters = {
        category: 'all',
        brand: 'all',
        priceMin: 0,
        priceMax: 200,
        search: ''
    };
    
    document.getElementById('categoryFilter').value = 'all';
    document.getElementById('brandFilter').value = 'all';
    document.getElementById('priceMinSlider').value = 0;
    document.getElementById('priceMaxSlider').value = 200;
    document.getElementById('priceMin').textContent = 0;
    document.getElementById('priceMax').textContent = 200;
    document.getElementById('searchInput').value = '';
    
    renderCatalog();
}

function applySorting() {
    state.sortBy = document.getElementById('sortSelect').value;
    renderCatalog();
}

function getFilteredProducts() {
    let filtered = [...products];
    
    // Search
    if (state.filters.search) {
        const query = state.filters.search.toLowerCase();
        filtered = filtered.filter(p => 
            p.name.toLowerCase().includes(query) ||
            p.brand.toLowerCase().includes(query) ||
            p.description.toLowerCase().includes(query)
        );
    }
    
    // Category
    if (state.filters.category !== 'all') {
        filtered = filtered.filter(p => p.category === state.filters.category);
    }
    
    // Brand
    if (state.filters.brand !== 'all') {
        filtered = filtered.filter(p => p.brand === state.filters.brand);
    }
    
    // Price
    filtered = filtered.filter(p => 
        p.price >= state.filters.priceMin && p.price <= state.filters.priceMax
    );
    
    // Sort
    filtered.sort((a, b) => {
        switch (state.sortBy) {
            case 'price-low':
                return a.price - b.price;
            case 'price-high':
                return b.price - a.price;
            case 'rating':
                return b.rating - a.rating;
            case 'featured':
            default:
                if (a.featured && !b.featured) return -1;
                if (!a.featured && b.featured) return 1;
                return 0;
        }
    });
    
    return filtered;
}

// Utilities
function getColorHex(colorName) {
    const colorMap = {
        'Blanco': '#FFFFFF',
        'Negro': '#000000',
        'Azul': '#3B82F6',
        'Rojo': '#EF4444',
        'Verde': '#10B981',
        'Amarillo': '#F59E0B',
        'Rosa': '#EC4899',
        'Gris': '#6B7280',
        'Morado': '#8B5CF6',
        'Naranja': '#F97316',
        'Blanco/Oro': '#FFD700',
        'Negro/Rojo': '#EF4444'
    };
    return colorMap[colorName] || '#9CA3AF';
}

function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast ${type}`;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Initialize checkout rendering when view changes
const originalShowView = showView;
showView = function(view) {
    originalShowView(view);
    if (view === 'checkout') {
        renderCheckout();
    }
};
// --- LABORATORIO: Productos y Carrito de Compras ---
const productos = [
    { id: 1, nombre: "Nike Air Zoom", precio: 250000, categoria: "running" },
    { id: 2, nombre: "Adidas Superstar", precio: 230000, categoria: "casual" },
    { id: 3, nombre: "Puma RS-X", precio: 210000, categoria: "running" },
    { id: 4, nombre: "Reebok Classic", precio: 190000, categoria: "casual" },
    { id: 5, nombre: "Jordan Retro", precio: 280000, categoria: "basketball" }
];

let carrito = [];

// Mostrar productos
function mostrarProductos(lista = productos) {
    const contenedor = document.getElementById("productos");
    if (!contenedor) return;
    contenedor.innerHTML = "";

    lista.forEach(prod => {
        const div = document.createElement("div");
        div.classList.add("producto", "card", "p-3", "m-2", "text-center");
        div.innerHTML = `
            <h5>${prod.nombre}</h5>
            <p>Precio: $${prod.precio.toLocaleString()}</p>
            <button class="btn btn-primary" onclick="agregarAlCarrito(${prod.id})">Agregar al carrito</button>
        `;
        contenedor.appendChild(div);
    });
}
mostrarProductos();

// Agregar producto al carrito
function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    carrito.push(producto);
    actualizarCarrito();
    actualizarContadorProductos();
}

// Mostrar carrito
function actualizarCarrito() {
    const lista = document.getElementById("listaCarrito");
    const total = document.getElementById("total");
    if (!lista || !total) return;

    lista.innerHTML = "";
    carrito.forEach((item, index) => {
        const li = document.createElement("li");
        li.classList.add("list-group-item", "d-flex", "justify-content-between");
        li.innerHTML = `
            ${item.nombre} - $${item.precio.toLocaleString()}
            <button class="btn btn-sm btn-outline-danger" onclick="eliminarProducto(${index})">❌</button>
        `;
        lista.appendChild(li);
    });

    const suma = carrito.reduce((acc, item) => acc + item.precio, 0);
    total.textContent = `Total: $${suma.toLocaleString()}`;
}

// Eliminar producto del carrito
function eliminarProducto(index) {
    carrito.splice(index, 1);
    actualizarCarrito();
    actualizarContadorProductos();
}

// Vaciar carrito
const btnVaciar = document.getElementById("vaciarCarrito");
if (btnVaciar) {
    btnVaciar.addEventListener("click", () => {
        carrito = [];
        actualizarCarrito();
        actualizarContadorProductos();
    });
}

// Filtro por categoría
function filtrarPorCategoria() {
    const categoria = document.getElementById("categoriaSelect").value;
    if (categoria === "todas") {
        mostrarProductos(productos);
    } else {
        const filtrados = productos.filter(p => p.categoria === categoria);
        mostrarProductos(filtrados);
    }
}

// Contador de visitas
let visitas = localStorage.getItem("visitas") ? parseInt(localStorage.getItem("visitas")) : 0;
visitas++;
localStorage.setItem("visitas", visitas);
const contadorVisitas = document.getElementById("contadorVisitas");
if (contadorVisitas) contadorVisitas.textContent = `Visitas: ${visitas}`;

// Contador de productos
function actualizarContadorProductos() {
    const contador = document.getElementById("contadorProductos");
    if (contador) contador.textContent = `Productos en carrito: ${carrito.length}`;
}

// --- Función para mostrar vistas ---
function showView(viewId) {
  const views = document.querySelectorAll('.view');
  views.forEach(view => view.style.display = 'none');
  document.getElementById(viewId + 'View').style.display = 'block';
}
