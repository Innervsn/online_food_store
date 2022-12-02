// Добавление товара в корзину
const addDishBasket = () => {
  window.addEventListener("click", (e) => {
    if (e.target.classList.contains("menu__dish-add")) {
      const card = e.target.closest(".menu__dish"); // проверка клика кнопки в нужной карточке в меню
      const productId = card.dataset.id;

      const state = loadState();

      // блюдо в корзине
      if (state.dishesInBasket.find((product) => product.id == productId)) {
        // уже в корзине
      } else {
        // положить
        // информация о блюде
        const productInfo = {
          id: card.dataset.id,
          imgSrc: card.querySelector(".menu__dish-img").getAttribute("src"),
          title: card.querySelector(".menu__dish-title").innerText,
          description: card.querySelector(".menu__dish-description").innerText,
          price: card.querySelector(".menu__dish-cost").innerText,
          amount: 1,
        };

        state.dishesInBasket.push(productInfo);

        saveState(state);
      }
    }
  });

  window.addEventListener("click", (e) => {
    if (e.target.classList.contains("info-dish__add-btn")) {
      const card = e.target.closest(".info-main"); // проверка клика кнопки в нужной карточке в меню
      const productId = card.dataset.id;

      const state = loadState();

      // блюдо в корзине
      if (state.dishesInBasket.find((product) => product.id == productId)) {
        // уже в корзине
      } else {
        // положить
        // информация о блюде
        const productInfo = {
          id: card.dataset.id,
          imgSrc: card.querySelector(".info-main__dish-img").getAttribute("src"),
          title: card.querySelector(".info-dish__title").innerText,
          description: card.querySelector(".info-dish__description").innerText,
          price: card.querySelector(".info-dish__cost").innerText,
          amount: 1,
        };

        state.dishesInBasket.push(productInfo);

        saveState(state);
      }
    }
  });

};

addDishBasket();
