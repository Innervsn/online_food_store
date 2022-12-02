const menuList = () => {
  getDish();

  async function getDish() {
    const response = await fetch("./scripts/components/products.json");

    const dishArray = await response.json();

    renderDish(dishArray);
  }

  const renderDish = (dishList) => {
    const menuBlock = document.querySelector(".menu-container");

    dishList.forEach((dish) => {
      const dishItem = document.createElement("div");
      dishItem.classList.add("menu__dish");
      dishItem.setAttribute("data-id", `${dish.id}`);

      dishItem.innerHTML = `
      <div class="menu__dish-image">
          
            <img
              class="menu__dish-img"
              src="${dish.imgSrc}"
              alt="" />
              </div>

              <div class="menu__dish-about">
          <h2 class="menu__dish-title">
            ${dish.title}
            </h2>
            
            <p class="menu__dish-description">
            ${dish.description}
            </p>
            </div>
          
          <div class="menu__dish-price">
            <div class="menu__dish-params">
            <span class="menu__dish-cost">${dish.price}</span>
              <span class="menu__dish-weight">${dish.weight}</span>
              </div>

              <button class="menu__dish-add" data-cart="add-dish"></button>
              </div>
              `;

      menuBlock.appendChild(dishItem);

      //_____Поиск
      document.querySelector(".header__search").oninput = function () {
        let val = this.value.trim().toLowerCase();
        let dishes = document.querySelectorAll(".menu__dish");

        if (val != "") {
          dishes.forEach(function (dishElement) {
            let titleElement = dishElement.querySelector(".menu__dish-title");

            if (titleElement.innerText.toLowerCase().includes(val)) {
              dishElement.classList.remove("hide");
            } else {
              dishElement.classList.add("hide");
            }
          });
        } else {
          dishes.forEach(function (dishElement) {
            dishElement.classList.remove("hide");
          });
        }
      };

      const modalWindow = document.querySelector(".info");

      dishItem.addEventListener("click", (e) => {
        if (e.target.classList.contains("menu__dish-img")) {
          const card = e.target.closest(".menu__dish");

          const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector(".menu__dish-img").getAttribute("src"),
            title: card.querySelector(".menu__dish-title").innerText,
            description: card.querySelector(".menu__dish-description")
              .innerText,
            price: card.querySelector(".menu__dish-cost").innerText,
            weight: card.querySelector(".menu__dish-weight").innerText,
          };

          const openModalWindow = () => {
            modalWindow.classList.add("info-show");
            document.body.classList.add("stop-scrolling");

            modalWindow.innerHTML = `
            <div class="info-container">
            <button class="info__btn-back"></button>
            <div class="info-main" data-id="${productInfo.id}">
            <img
            class="info-main__dish-img"
                  src="${productInfo.imgSrc}"
                    alt="" />
          
                    <div class="info-dish">
                    <h2 class="info-dish__title">${productInfo.title}</h2>
                    <p class="info-dish__description">${productInfo.description}</p>
                    
                    <div class="info-dish__order">
                      <div class="info-dish__params">
                        <span class="info-dish__cost">${productInfo.price}</span>
                        <span class="info-dish__weight">${productInfo.weight}</span>
                      </div>
                      <button class="info-dish__add-btn">В корзину</button>
                    </div>
                  </div>
                </div>
                </div>
              `;
          };

          openModalWindow();

          const closeBtn = document.querySelector(".info__btn-back");
          closeBtn.addEventListener("click", () => closeBntModalWindow());
        }

        const closeBntModalWindow = () => {
          modalWindow.classList.remove("info-show");
          document.body.classList.remove("stop-scrolling");
        };

        window.addEventListener("click", (e) => {
          if (e.target === modalWindow) {
            closeBntModalWindow();
          }
        });

        window.addEventListener("keydown", (e) => {
          if (e.keyCode === 27) {
            closeBntModalWindow();
          }
        });
      });
    });
  };
};

menuList();


//__________Получение кол-ва товаров из local storage
const countSum = () => {
  window.addEventListener("storage", function () {
    let headerSumCounter = localStorage.getItem("totalPriceInHeader");
    let count = document.querySelector(".header__sum-cost");
    count.innerText = JSON.parse(headerSumCounter);
  });
};

countSum();

const countAmount = () => {
  window.addEventListener("storage", function () {
    let headerAmountCounter = localStorage.getItem("totalAmountInHeader");
    let count = document.querySelector(".header__amount-number");
    count.innerText = JSON.parse(headerAmountCounter);
  });
};

countAmount();
