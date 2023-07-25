const products = [
    {
      name: "Product 1",
      price: "$10",
      image: "images/product1.jpg",
    },
    {
      name: "Product 2",
      price: "$15",
      image: "images/product2.jpg",
    },
    {
      name: "Product 3",
      price: "$20",
      image: "images/product3.jpg",
    },
    {
      name: "Product 4",
      price: "$125",
      image: "images/product2.jpg",
    },
    {
      name: "Product 5",
      price: "$220",
      image: "images/product3.jpg",
    },
    {
      name: "Product 6",
      price: "$115",
      image: "images/product2.jpg",
    },
    {
      name: "Product 7",
      price: "$120",
      image: "images/product3.jpg",
    },
    {
      name: "Product 8",
      price: "$15",
      image: "images/product2.jpg",
    },
    {
      name: "Product 9",
      price: "$20",
      image: "images/product3.jpg",
    },
    // Add more product items here
  ];
  
  function createProductCard(product) {
    const card = document.createElement("div");
    card.classList.add("product");
  
    const image = document.createElement("img");
    image.src = product.image;
    image.alt = product.name;
  
    const name = document.createElement("h2");
    name.textContent = product.name;
  
    const price = document.createElement("p");
    price.textContent = product.price;
  
    const addToCartBtn = document.createElement("button");
    addToCartBtn.textContent = "Add to Cart";
  
    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(price);
    card.appendChild(addToCartBtn);
  
    return card;
  }
  
  function renderProducts() {
    const productList = document.getElementById("product-list");
    products.forEach((product) => {
      const card = createProductCard(product);
      productList.appendChild(card);
    });
  }
  
  renderProducts();
  