document.addEventListener("DOMContentLoaded", () => {
    
    const products = [
        { id: 1, name: "Book", price: 5},
        { id: 2, name: "Keyboard", price: 25.99},
        { id: 3, name: "Mouse", price: 15.95},
    ];
    
    const cart = [];

    const productList = document.getElementById("product-list");
    const cartItems = document.getElementById("cart-items");
    const emptyCart = document.getElementById("empty-cart");
    const cartTotal = document.getElementById("cart-total");
    const totalPriceDisplay = document.getElementById("total-price");
    const checkoutButton = document.getElementById("checkout-btn");

    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
        <span>${product.name} - $${product.price.toFixed(2)}</span>
        <button data-id="${product.id}">Add to cart</button>`;
        productList.appendChild(productDiv);
    });

    productList.addEventListener("click", (e) => {
    if(e.target.tagName === "BUTTON"){
        const productId = parseInt(e.target.getAttribute("data-id"));
        const product = products.find((p) => p.id === productId);
        addToCart(product);
        }
    });

    function addToCart(product){
        cart.push(product);
        renderCart();
    };

    function renderCart(){
        cartItems.innerText = "";
        let totalPrice = 0;

        if(cart.length > 0 ){
            emptyCart.classList.add("hidden");
            cartTotal.classList.remove("hidden");
            cart.forEach((item , index) => {
                totalPrice +=item.price;
                const cartItem = document.createElement("div");
                cartItem.innerHTML= `
                ${item.name} - $${item.price.toFixed(2)}`;
                cartItems.appendChild(cartItem);
                totalPriceDisplay.textContent = `$${totalPrice.toFixed(2)}`;
            });
        }else{
            emptyCart.classList.remove("hidden");
            totalPriceDisplay.textContent = `$0.00`;
        }
    };

    checkoutButton.addEventListener("click" , () => {
        cart.length = 0;
        alert("checkout successfully");
        renderCart();
    });

});