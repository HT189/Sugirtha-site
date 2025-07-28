const API_URL = "AKfycbwewJvTHpzR9HnFDuvFKTk9DEWPg2HlsGQdMHXyEwVl";

fetch(API_URL)
  .then(response => response.json())
  .then(products => {
    const grid = document.getElementById("product-grid");

    products.forEach(item => {
      const card = document.createElement("div");
      card.className = "border rounded-2xl shadow p-4 bg-white";

      card.innerHTML = `
        <img src="${item.image}" alt="${item.title}" class="w-full h-64 object-cover rounded-xl mb-4">
        <h2 class="text-xl font-semibold">${item.title}</h2>
        <p class="text-sm text-gray-600">${item.description}</p>
        <p class="mt-2 text-lg font-bold text-pink-600">${item.price}</p>
      `;

      grid.appendChild(card);
    });
  })
  .catch(err => {
    console.error("Error fetching products:", err);
  });
