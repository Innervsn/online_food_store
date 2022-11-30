// // Добавление товара в корзину
// const basketDishCounter = () => {
//   const basketList = document.querySelector(".basket-list"); // обертка списка товара куда будут добавляться товары
//   // const dishCounter = document.querySelector(".basket-dish__amount-number");

//   // let amountDish = 0;
//   // dishCounter.innerText = amountDish;

//   window.addEventListener("click", (e) => {
//     if (e.target.hasAttribute("data-cart")) {
//       // ++dishCounter.innerText;

//       const card = e.target.closest(".menu__dish"); // проверка клика кнопки в нужной карточке

//       // информация о блюде
//       const productInfo = {
//         id: card.dataset.id,
//         imgSrc: card.querySelector(".menu__dish-img").getAttribute("src"),
//         title: card.querySelector(".menu__dish-title").innerText,
//         description: card.querySelector(".menu__dish-description").innerText,
//         price: card.querySelector(".menu__dish-cost").innerText,
//         amount: card.querySelector(".menu__dish-counter").innerText,
//       };

//       // блюдо в корзине
//       const dishInBasket = basketList.querySelector(
//         `[data-id="${productInfo.id}"]`
//       );

//       // проверка добавлено ли блюдо в крозину по кли
//       if (dishInBasket) {
//         //если добавлено то обновляем счетчик
//         const counterElement = dishInBasket.querySelector(
//           ".basket-dish__amount-number"
//         );
//         counterElement.innerText =
//           // parseInt(counterElement.innerText) +
//           parseInt(productInfo.amount);
//       } else if (
//         !dishInBasket &&
//         card.querySelector(".menu__dish-counter").innerText > 0
//       ) {
//         // если не добавленно то добавляем при условии, что счетчик больше 0
//         const cartHTML = `     
//               <div class="basket-dish" data-id="${productInfo.id}">
//                 <div class="basket-dish__left-block">
//                   <img
//                     class="basket-dish__img"
//                     src="${productInfo.imgSrc}"
//                     alt="" />
  
//                   <span class="basket-dish__title">${productInfo.title}</span>
//                 </div>
  
//                 <div class="basket-dish__right-block">
//                 <button class="menu__dish-plus" data-action="plus-dish"></button>
//                   <span class="basket-dish__amount-number">${productInfo.amount}</span>
//                   <button class="menu__dish-minus" data-action="add-minus"></button>
//                   <span class="basket-dish__unit">шт.</span>
//                   <span class="basket-dish__price-text">сумма:</span>
//                   <span class="basket-dish__price">${productInfo.price}</span>
//                   <span class="basket-dish__rubles">₽</span>
//                   <button class="basket-dish__btn-del"></button>
//                 </div>
//               </div>
//               `;

//         basketList.insertAdjacentHTML("beforeend", cartHTML);
//       }
//     }
//   });
// };

// basketDishCounter();
