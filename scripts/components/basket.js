const sumCounter = () => {
  const dishCards = document.querySelectorAll(".basket-dish"); // блюдо в корзине
  const totalPriceInHeader = document.querySelector(".header__sum-cost");
  const totalPriceInBasket = document.querySelector(".basket-order__sum");
  let totalPrice = 0; // устанавливаем значение счетчика

  dishCards.forEach((dish) => {
    //проходимся по каждому блюду
    const dishSumCounter = dish.querySelector(".basket-dish__amount-number"); // счетчик кол-ва в карточке в корзине
    const dishCost = dish.querySelector(".basket-dish__price"); // цена блюда
    const dishCardSum =
      parseInt(dishSumCounter.innerText) * parseInt(dishCost.innerText); // сумма одного блюда

    totalPrice += dishCardSum; // прибавляем к счетчику сумму одного блюда
  });

  totalPriceInHeader.innerText = totalPrice; // передаем значение счетчика в счтечик header HTML
  totalPriceInBasket.innerText = totalPrice; // передаем значение счетчика в счтечик basket HTML

  // localStorage.setItem(
  //   "totalPriceInBasket",
  //   JSON.stringify(totalPriceInBasket.innerText)
  // );

  // localStorage.setItem(
  //   "totalPriceInHeader",
  //   JSON.stringify(totalPriceInHeader.innerText)
  // );
};

sumCounter();

// const counterPrice = () => {
//   window.addEventListener("storage", function () {
//     console.log("change");

//     let totalPriceInBasket = localStorage.getItem("totalPriceInBasket");
//     let count = document.querySelector(".basket-order__sum");

//     count.innerText = JSON.parse(totalPriceInBasket);

//     let totalPriceInHeader = localStorage.getItem("totalPriceInHeader");
//     let countSum = document.querySelector(".header__sum-cost");

//     countSum.innerText = JSON.parse(totalPriceInHeader);

//     // let dishInBasket = localStorage.getItem("dish");

//     // dishInBasket = JSON.parse(dishInBasket);
//   });
// };

// counterPrice();

// const countAmount = () => {
//   window.addEventListener("storage", function () {
//     let headerCounter = localStorage.getItem("headerCounter");
//     let count = document.querySelector(".header__amount-number");
//     count.innerText = JSON.parse(headerCounter);
//   });
// };

// countAmount();

const dishInBasket = () => {
  let counterInHeader = document.querySelector(".header__amount-number"); // Счетчик в header
  let headerCounter = 0;
  counterInHeader.innerText = headerCounter;
  const basketList = document.querySelector(".basket-list"); // обертка списка товара куда будут добавляться товары в корзине

  window.addEventListener("storage", () => {
    const cartHTML = localStorage.getItem("cartHTML"); // получаем отправляенное блюдо в корзине из localStorage

    basketList.insertAdjacentHTML("beforeend", JSON.parse(cartHTML)); // рендер блюда в корзине

    counterInHeader.innerText = basketList.children.length;

    basketStatus();
    sumCounter();
  });
};

dishInBasket();

const counterDishAmountInCart = () => {
  let counterInBasket = document.querySelector(".basket-dish__amount-number"); // счетчик в корзине
  let counterInHeader = document.querySelector(".header__amount-number"); // Счетчик в header

  window.addEventListener("click", (e) => {
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
      }
    }
    sumCounter();
  });
};

counterDishAmountInCart();

//__________________________________________________________
// Счетчик в header
const counterDishAmountInHeader = () => {
  let counterInHeader = document.querySelector(".header__amount-number"); // Счетчик в header

  window.addEventListener("click", (e) => {
    if (e.target.classList.contains("basket-dish__plus")) {
      ++counterInHeader.innerText; // увеличение кол-ва
      sumCounter();
    }

    if (e.target.classList.contains("basket-dish__minus")) {
      if (parseInt(counterInHeader.innerText) > 0) {
        --counterInHeader.innerText; // уменьшение кол-ва, но не меньше 1
        sumCounter();
      }
    }
  });
};

counterDishAmountInHeader();
