// ==== Productos ====
const products = [
    {id: 1, name: "Collar artesanal", price: 25, image: "assets/images/collar.jpg", desc: "Hecho a mano con materiales naturales."},
    {id: 2, name: "Pulsera de cuero", price: 15, image: "assets/images/pulsera.jpg", desc: "Pulsera trenzada con cuero auténtico."},
    {id: 3, name: "Anillo hecho a mano", price: 20, image: "assets/images/anillo.jpg", desc: "Diseño único, ajustable a cualquier talla."},
    {id: 4, name: "Bolso tejido", price: 35, image: "assets/images/bolso.jpg", desc: "Bolso artesanal tejido con hilos reciclados."}
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];

// ==== Mostrar productos ====
function displayProducts(containerId){
    const container = document.getElementById(containerId);
    if(!container) return;
    container.innerHTML = "";
    products.forEach(p=>{
        container.innerHTML += `
            <div class="col-md-3 mb-3">
                <div class="card h-100">
                    <img src="${p.image}" class="card-img-top" alt="${p.name}">
                    <div class="card-body text-center">
                        <h5>${p.name}</h5>
                        <p>$${p.price}</p>
                        <a href="product.html?id=${p.id}" class="btn btn-outline-primary">Ver más</a>
                        <button class="btn btn-primary mt-2" onclick="addToCart(${p.id})">Agregar</button>
                    </div>
                </div>
            </div>
        `;
    });
}
displayProducts('featured-products');
displayProducts('product-list');

// ==== Agregar al carrito ====
function addToCart(id){
    const product = products.find(p=>p.id===id);
    if(product){
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${product.name} agregado al carrito`);
    }
}

// ==== Mostrar carrito ====
function renderCart(){
    const container = document.getElementById('cart-items');
    if(!container) return;

    if(cart.length === 0){
        container.innerHTML = "<p>Tu carrito está vacío</p>";
        document.getElementById('cart-total').innerText = "0";
        return;
    }

    let total = 0;
    container.innerHTML = "";
    cart.forEach((item, index)=>{
        total += item.price;
        container.innerHTML += `
            <div class="d-flex justify-content-between align-items-center border-bottom p-2">
                <div>
                    <strong>${item.name}</strong> - $${item.price}
                </div>
                <button class="btn btn-danger btn-sm" onclick="removeFromCart(${index})">Eliminar</button>
            </div>
        `;
    });
    document.getElementById('cart-total').innerText = total.toFixed(2);
}
renderCart();

// ==== Eliminar del carrito ====
function removeFromCart(index){
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

// ==== Checkout resumen ====
function renderCheckout(){
    const summary = document.getElementById('checkout-summary');
    if(!summary) return;

    let total = 0;
    summary.innerHTML = "";
    cart.forEach(p=>{
        summary.innerHTML += `<p>${p.name} - $${p.price}</p>`;
        total += p.price;
    });
    document.getElementById('checkout-total').innerText = total.toFixed(2);
}
renderCheckout();

// ==== Confirmar compra ====
const checkoutForm = document.getElementById('checkout-form');
if(checkoutForm){
    checkoutForm.addEventListener('submit', e=>{
        e.preventDefault();
        localStorage.removeItem('cart');
        window.location.href = "purchases.html";
    });
}

// ==== Página individual de producto ====
function renderProductDetail(){
    const detail = document.getElementById('product-detail');
    if(!detail) return;
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id'));
    const product = products.find(p=>p.id===id);
    if(!product) return;
    detail.innerHTML = `
        <div class="row">
            <div class="col-md-6">
                <img src="${product.image}" class="img-fluid rounded">
            </div>
            <div class="col-md-6">
                <h2>${product.name}</h2>
                <p>${product.desc}</p>
                <h4>$${product.price}</h4>
                <button class="btn btn-primary" onclick="addToCart(${product.id})">Agregar al carrito</button>
            </div>
        </div>
    `;
}
renderProductDetail();


