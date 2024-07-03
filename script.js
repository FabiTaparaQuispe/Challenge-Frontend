document.addEventListener("DOMContentLoaded", function() {
    const addProductForm = document.getElementById("addProductForm");
    const productsContainer = document.getElementById("products");

    addProductForm.addEventListener("submit", function(event) {
	event.preventDefault();

	const productName = document.getElementById("productName").value;
	const productPrice = document.getElementById("productPrice").value;
	const productImage = document.getElementById("productImage").files[0];

	if (productName && productPrice && productImage) {
	    const reader = new FileReader();
	    reader.onload = function(e) {
		addProduct(productName, productPrice, e.target.result);
	    }
	    reader.readAsDataURL(productImage);
	    addProductForm.reset();
	} else {
	    alert("Please, fill all fields.");
	}
    });

    function addProduct(name, price, image) {
	const productCard = document.createElement("div");
	productCard.classList.add("product-card");

	productCard.innerHTML = `
	    <img class="product-image" src="${image}" alt="${name}">
	    <div class="product-name">${name}</div>
	    <div>
		<div class="product-price">$ ${price}</div>
		<button class="delete-btn">Delete</button>
	    </div>
	`;

	productCard.querySelector(".delete-btn").addEventListener("click", function() {
	    productCard.remove();
	});

	productsContainer.appendChild(productCard);
    }
});
