fetch("https://script.google.com/macros/s/AKfycbzvWvW1IwKRMRho_9p1rMTJYzf91i5T6nauFrKM1mu7rOAJMtvwAKiXGo_Z70dP7JFNjw/exec")
  .then(response => response.json())
  .then(products => {
    const grid = document.getElementById("product-grid");

    products.forEach(item => {
      console.log("Image URL:", item.image); // ✅ Logs each image URL

      const card = document.createElement("div");
      card.className = "border rounded-2xl shadow p-4 bg-white";

      card.innerHTML = `
        <img src="${item.image}" alt="${item.title}" style="width:100%; max-height:300px; object-fit:cover; border:3px solid red; margin-bottom:1rem;">
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
