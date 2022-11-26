// const headerCounter = () => {
//   const dishCounter = document.querySelector(".header__amount-number");

//   let count = 0;
//   dishCounter.innerText = count;

//   window.addEventListener("click", (e) => {
//     if (e.target.classList.contains("menu__dish-plus")) {
//       ++dishCounter.innerText;
//     }
//   });

//   window.addEventListener("click", (e) => {
//     if (e.target.classList.contains("menu__dish-minus")) {
//       if (dishCounter.innerText > 0) --dishCounter.innerText;
//     }
//   });

//   // window.addEventListener("click", (e) => {
//   //   const card = e.target.closest(".menu__dish"); // определяет в какой карточке произошло добавление
//   //   if (e.target.classList.contains("menu__dish-add")) {
//   //     console.log(card);
//   //   }
//   // });

//   function addHandlers(dish) {
//     const dishCost = dish.querySelector(".menu__dish-cost");
//     const addBtn = dish.querySelector(".menu__dish-plus");
//     const dishSumCounter = document.querySelector(".header__sum-cost");
//     // const dishBasketSumCounter = document.querySelector(".basket-order__sum"); // досутп к полю counter(сумме) в корзине

//     let sum = 0;

//     dishSumCounter.innerHTML = sum;
//     // dishBasketSumCounter.innerText = sum; //  сумма в корзине

//     addBtn.addEventListener("click", function () {
//       dishSumCounter.innerHTML =
//         Number(dishSumCounter.innerHTML) + Number(dishCost.innerHTML);
//       // dishBasketSumCounter.innerText =
//       //   Number(dishBasketSumCounter.innerHTML) + Number(dishCost.innerHTML); // увеличение суммы в корзине
//     });
//   }

//   let counts = document.querySelectorAll(".menu__dish");
//   counts.forEach(addHandlers);
// };

// headerCounter();

// const cardCounter = () => {
//   window.addEventListener("click", (e) => {
//     let counterInCard;

//     if (e.target.classList.contains("menu__dish-plus")) {
//       const card = e.target.closest(".menu__dish");
//       counterInCard = card.querySelector(".menu__dish-counter");
//     }

//     if (e.target.classList.contains("menu__dish-plus")) {
//       counterInCard.innerText = ++counterInCard.innerText;
//     }
//   });
// };

// headerCounter();

// _______________________________________________________________________________
const cardCounter = () => {
  let counterInCard = document.querySelector(".menu__dish-counter");

  window.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("menu__dish-plus") ||
      e.target.classList.contains("menu__dish-minus")
    ) {
      const card = e.target.closest(".menu__dish");
      counterInCard = card.querySelector(".menu__dish-counter");
    }

    if (e.target.classList.contains("menu__dish-plus")) {
      ++counterInCard.innerText;
    }

    if (e.target.classList.contains("menu__dish-minus")) {
      if (parseInt(counterInCard.innerText) > 0) {
        --counterInCard.innerText;
      }
    }
  });
};

cardCounter();
