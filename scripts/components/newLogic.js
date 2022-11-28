const sumCounter = () => {
  const dishCards = document.querySelectorAll(".basket-dish"); // блюдо в корзине
  const totalPriceInHeader = document.querySelector(".header__sum-cost");
  const totalPriceInBasket = document.querySelector(".basket-order__sum");
  let totalPrice = 0; // устанавливаем значение счетчика

  dishCards.forEach(function (dish) {
    //прохожимся по каждому блюду
    const dishSumCounter = dish.querySelector(".basket-dish__amount-number"); // счетчик кол-ва в карточке в корзине
    const dishCost = dish.querySelector(".basket-dish__price"); // цена блюда
    const dishCardSum =
      parseInt(dishSumCounter.innerText) * parseInt(dishCost.innerText); // сумма одного блюда

    totalPrice += dishCardSum; // прибавляем к счетчику сумму ожного блюда
  });

  totalPriceInHeader.innerText = totalPrice; // передаем значение счетчика в счтечик header HTML
  totalPriceInBasket.innerText = totalPrice; // передаем значение счетчика в счтечик basket HTML
};

sumCounter();

// Добавление товара в корзину
const basketDishCounter = () => {
  const basketList = document.querySelector(".basket-list"); // обертка списка товара куда будут добавляться товары в корзине
  let counterInHeader = document.querySelector(".header__amount-number"); // Счетчик в header
  let counterInBasket = document.querySelector(".basket-dish__amount-number"); // счетчик в корзине
  let headerCounter = 0;
  counterInHeader.innerHTML = headerCounter;

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
      const dishInBasket = basketList.querySelector(
        `[data-id="${productInfo.id}"]`
      );

      // проверка добавлено ли блюдо в крозину по клику кнопки (+) в карточке меню
      if (dishInBasket) {
        //если добавлено, то увеличиваем количество в счетчике карточки в корзине
        const counterElement = dishInBasket.querySelector(
          ".basket-dish__amount-number"
        );
        ++counterElement.innerText;
      } else {
        // если не добавлено то добавляем блюдо в корзину
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

        basketList.insertAdjacentHTML("beforeend", cartHTML);
      }

      basketStatus(); // статус корзины (пустая/полная)
      sumCounter();
    }

    // _______________________________________________
    // Изменение кол-ва добавленного товара в корзине

    if (
      //клик по кнопке (+) или (-) в карточке товара в корзине
      e.target.classList.contains("basket-dish__plus") ||
      e.target.classList.contains("basket-dish__minus")
    ) {
      // проверка в какой карточке произошел "клик"
      const card = e.target.closest(".basket-dish");
      counterInBasket = card.querySelector(".basket-dish__amount-number");
    }

    if (e.target.classList.contains("basket-dish__plus")) {
      ++counterInBasket.innerText; // увеличение кол-ва
    }

    if (e.target.classList.contains("basket-dish__minus")) {
      //проверка на товар котрый находится в корзине

      if (parseInt(counterInBasket.innerText) > 1) {
        counterInBasket.innerText == --counterInBasket.innerText; // уменьшение кол-ва, но не меньше 1
      } else if (
        // удаление из корзины при нажатии на кнопку (-) полсе того как счетчик уже опустился до 1
        e.target.closest(".basket-list")
      ) {
        e.target.closest(".basket-dish").remove();

        basketStatus(); // статус корзины (пустая/полная)
        sumCounter();
      }
    }

    if (e.target.classList.contains("basket-dish__btn-del")) {
      // обращение к кнопке удаления
      // удаление товара из корзины
      if (e.target.closest(".basket-list")) {
        //обращение к обертке где находится карточка
        const card = e.target.closest(".basket-dish"); // даем имя блюду где произощел клик
        counterInBasket = card.querySelector(".basket-dish__amount-number"); //получаем счетчик из карточке в каторой произошел клик
        counterInHeader.innerText =
          counterInHeader.innerText - counterInBasket.innerText; // отнимаем из общего счетчика кол-во блюд в удаляемой карточке

        e.target.closest(".basket-dish").remove(); // удаляем карточку
        basketStatus(); // статус корзины (пустая/полная)
        sumCounter();
      }
    }

    //__________________________________________________________
    // Счетчик в header
    if (
      e.target.classList.contains("basket-dish__plus") ||
      e.target.classList.contains("menu__dish-add")
    ) {
      ++counterInHeader.innerText; // увеличение кол-ва
      sumCounter();
      // textSwitcher();
    }

    if (e.target.classList.contains("basket-dish__minus")) {
      if (parseInt(counterInHeader.innerText) > 0) {
        --counterInHeader.innerText; // уменьшение кол-ва, но не меньше 1
        sumCounter();
        // textSwitcher();
      }
    }
  });
};

basketDishCounter();

// // ____________________Счетчик Суммы_______________________
// function addHandlers(dish) {
//   const dishCost = dish.querySelector(".menu__dish-cost");
//   const addBtn = dish.querySelector(".menu__dish-add");
//   const dishSumCounter = document.querySelector(".header__sum-cost");
//   // const dishBasketSumCounter = document.querySelector(".basket-order__sum"); // досутп к полю counter(сумме) в корзине

//   let sum = 0;

//   dishSumCounter.innerHTML = sum;
//   // dishBasketSumCounter.innerText = sum; //  сумма в корзине

//   addBtn.addEventListener("click", function () {
//     dishSumCounter.innerHTML =
//       Number(dishSumCounter.innerHTML) + Number(dishCost.innerHTML);
//     // dishBasketSumCounter.innerText =
//     //   Number(dishBasketSumCounter.innerHTML) + Number(dishCost.innerHTML); // увеличение суммы в корзине
//   });
// }

// let counts = document.querySelectorAll(".menu__dish");
// counts.forEach(addHandlers);
// // _________________________________________________________________

// // ____________________Счетчик Суммы (еще один)_______________________
