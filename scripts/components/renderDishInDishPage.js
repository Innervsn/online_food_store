const dishInfo = () => {
  window.addEventListener("click", (e) => {
    // const card = e.target.closest(".menu__dish");
    if (e.target.classList.contains("menu__dish-img")) {
      //проерка клика по блюду
      const card = e.target.closest(".menu__dish");
      fetch("./scripts/components/products.json")
        .then((res) => {
          return res.json();
        })
        .then((products) => {
          const productData = products.find((x) => x.id == card.dataset.id);
          if (productData) {
            const dishHTML = `
              <div class="info-main" data-id="${productData.id}">
                <img
                  class="info-main__dish-img"
                  src="${productData.imgSrc}"
                  alt="" />

                <div class="info-dish">
                  <h2 class="info-dish__title">${productData.title}</h2>
                  <p class="info-dish__description">${productData.description}</p>

                  <div class="info-dish__order">
                    <div class="info-dish__params">
                      <span class="info-dish__cost">${productData.price}</span>
                      <span class="info-dish__weight">${productData.weight}</span>
                    </div>
                    <button class="info-dish__add-btn">В корзину</button>
                  </div>
                </div>
              </div>
            `;
            localStorage.setItem("dishHTML", JSON.stringify(dishHTML));
            // localStorage.removeItem("dishHTML");
          }
        });
    }
  });
};

dishInfo();
