// Добавление товара в корзину
const addDishBasket = () => {
  let dishesInBasket = {};

  // document
  //   .querySelectorAll(".menu__dish-add")
  //   .forEach((x) => x.addEventListener("click", (event) => {}));

  window.addEventListener("click", (e) => {
    if (e.target.classList.contains("menu__dish-add")) {
      const card = e.target.closest(".menu__dish"); // проверка клика кнопки в нужной карточке в меню

      // информация о блюде
      const productInfo = {
        id: card.dataset.id,
        imgSrc: card.querySelector(".menu__dish-img").getAttribute("src"),
        title: card.querySelector(".menu__dish-title").innerText,
        description: card.querySelector(".menu__dish-description").innerText,
        price: card.querySelector(".menu__dish-cost").innerText,
        amount: 1,
      };

      // блюдо в корзине
      if (dishesInBasket[productInfo.id]) {
        // уже в корзине
      } else {
        // положить
        dishesInBasket[productInfo.id] = true;
        const cartHTML = `
          <div class="basket-dish" data-id="${productInfo.id}">
          <div class="basket-dish__left-block">
          <img
          class="basket-dish__img"
          src="${productInfo.imgSrc}"
                alt="" />

                <span class="basket-dish__title">${productInfo.title}</span>
                </div>

                <div class="basket-dish__right-block">
                <button class="basket-dish__plus" data-action="plus-dish"></button>
                <span class="basket-dish__amount-number">${productInfo.amount}</span>
                <span class="basket-dish__unit">шт.</span>
                <button class="basket-dish__minus" data-action="add-minus"></button>
                <span class="basket-dish__price-text">сумма:</span>
                <span class="basket-dish__price">${productInfo.price}</span>
              <span class="basket-dish__rubles">₽</span>
              <button class="basket-dish__btn-del"></button>
              </div>
          </div>
        `;

        localStorage.setItem("cartHTML", JSON.stringify(cartHTML));
      }

      // const dishInBasket = document.querySelector(
      //   `[data-id="${productInfo.id}"]`
      // );

      // console.log(dishInBasket);

      // // проверка добавлено ли блюдо в крозину по клику кнопки (+) в карточке меню
      // if (dishInBasket) {
      //   // если не добавлено то добавляем блюдо в корзину

      // }
    }
  });


  window.addEventListener("click", (e) => {
    if (e.target.classList.contains("info-dish__add-btn")) {
      const card = e.target.closest(".info-main"); // проверка клика кнопки в нужной карточке в меню

      // информация о блюде
      const productInfo = {
        id: card.dataset.id,
        imgSrc: card.querySelector(".info-main__dish-img").getAttribute("src"),
        title: card.querySelector(".info-dish__title").innerText,
        description: card.querySelector(".info-dish__description").innerText,
        price: card.querySelector(".info-dish__cost").innerText,
        amount: 1,
      };

      // блюдо в корзине
      if (dishesInBasket[productInfo.id]) {
        // уже в корзине
      } else {
        // положить
        dishesInBasket[productInfo.id] = true;
        const cartHTML = `
          <div class="basket-dish" data-id="${productInfo.id}">
          <div class="basket-dish__left-block">
          <img
          class="basket-dish__img"
          src="${productInfo.imgSrc}"
                alt="" />

                <span class="basket-dish__title">${productInfo.title}</span>
                </div>

                <div class="basket-dish__right-block">
                <button class="basket-dish__plus" data-action="plus-dish"></button>
                <span class="basket-dish__amount-number">${productInfo.amount}</span>
                <span class="basket-dish__unit">шт.</span>
                <button class="basket-dish__minus" data-action="add-minus"></button>
                <span class="basket-dish__price-text">сумма:</span>
                <span class="basket-dish__price">${productInfo.price}</span>
              <span class="basket-dish__rubles">₽</span>
              <button class="basket-dish__btn-del"></button>
              </div>
          </div>
        `;

        localStorage.setItem("cartHTML", JSON.stringify(cartHTML));
      }

      // const dishInBasket = document.querySelector(
      //   `[data-id="${productInfo.id}"]`
      // );

      // console.log(dishInBasket);

      // // проверка добавлено ли блюдо в крозину по клику кнопки (+) в карточке меню
      // if (dishInBasket) {
      //   // если не добавлено то добавляем блюдо в корзину

      // }
    }
  });
};

addDishBasket();

// Передача информации о блюде на страницу "О блюде"
