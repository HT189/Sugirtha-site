fetch("https://script.google.com/macros/s/AKfycby3pbrTuskOi4851nkCn7g9avvj9LsE5llqNnOcxX0SDGgDiaQYrGnK0yETd3_cQZigPA/exec")
  .then(response => response.json())
  .then(products => {
    const grid = document.getElementById("product-grid");

    products.forEach(item => {
      console.log("Rendering:", item.image); // For debugging

      const card = document.createElement("div");
      card.className = "border rounded-2xl shadow p-4 bg-white";

      card.innerHTML = `
        <img src="${item.image}" alt="${item.title}" style="width:100%; height:300px; object-fit:contain; border-radius:1rem; margin-bottom:1rem;">
        <h2 class="text-xl font-semibold">${item.title}</h2>
        <p class="text-sm text-gray-600">${item.description}</p>
        <p class="mt-2 text-lg font-bold text-pink-600">${item.price}</p>
      `;

      grid.appendChild(card);
    });
  })
  .catch(error => {
    console.error("Failed to load products:", error);
  });
