const menuList = () => {
  const menuContainer = document.querySelector(".menu-container");
  getDish();
  
  async function getDish() {
    const response = await fetch("./scripts/components/products.json");

    const dishArray = await response.json();

    renderDish(dishArray);
  }

  const renderDish = (dishArray) => {
    dishArray.forEach((element) => {
      const dishHTML = `
      <div class="menu__dish menu__dish--1" data-id="${element.id}">
          <div class="menu__dish-image">
            <img
              class="menu__dish-img menu__dish-image--img"
              src="${element.imgSrc}"
              alt="" />
          </div>

          <div class="menu__dish-about">
            <h2 class="menu__dish-title menu__dish-title">
            ${element.title}
            </h2>

            <p class="menu__dish-description menu__dish-description">
            ${element.description}
            </p>
          </div>

          <div class="menu__dish-price">
            <div class="menu__dish-params">
              <span class="menu__dish-cost menu__dish-cost--1">${element.price}</span>
              <span class="menu__dish-weight">${element.weight}</span>
            </div>

            <button class="menu__dish-add" data-cart="add-dish"></button>
          </div>
        </div>
      `;

      menuContainer.insertAdjacentHTML("beforeend", dishHTML);
    });
  };
};

menuList();
