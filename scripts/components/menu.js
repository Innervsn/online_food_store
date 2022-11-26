const menuList = [
  {
    img: "images/menu/dish_1.svg",
    title: "Устрицы",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi maxime voluptas earum quisquam!i",
    price: 2700,
    weight: "500 г.",
    id: 1,
  },
  {
    img: "images/menu/dish_2.svg",
    title: "Свиные ребрышки на гриле с зеленью",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo porro expedita adipisci inventore ducimus laboriosam, blandi",
    price: 1600,
    weight: "750 г.",
    id: 2,
  },
  {
    img: "images/menu/dish_3.svg",
    title: "Креветки по-королевски в лимонном соке",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam ipsum molestias quos minus deserunt? Optio laudantium voluptates non. Repudiandae, officia!",
    price: 1820,
    weight: "7 шт.",
    id: 3,
  },
  {
    img: "images/menu/dish_2.svg",
    title: "Устрицы по рокфеллеровски",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi maxime voluptas earum quisquam!i",
    price: 2700,
    weight: "500 г.",
    id: 4,
  },
  {
    img: "images/menu/dish_1.svg",
    title: "Устрицы по рокфеллеровски",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi maxime voluptas earum quisquam!i",
    price: 2700,
    weight: "500 г.",
    id: 5,
  },
  {
    img: "images/menu/dish_2.svg",
    title: "Свиные ребрышки на гриле с зеленью",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo porro expedita adipisci inventore ducimus laboriosam, blandi",
    price: 1600,
    weight: "750 г.",
    id: 6,
  },
  {
    img: "images/menu/dish_3.svg",
    title: "Креветки по-королевски в лимонном соке",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam ipsum molestias quos minus deserunt? Optio laudantium voluptates non. Repudiandae, officia!",
    price: 1820,
    weight: "7 шт.",
    id: 7,
  },
  {
    img: "images/menu/dish_2.svg",
    title: "Устрицы по рокфеллеровски",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi maxime voluptas earum quisquam!i",
    price: 2700,
    weight: "500 г.",
    id: 8,
  },
  {
    img: "images/menu/dish_1.svg",
    title: "Устрицы по рокфеллеровски",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi maxime voluptas earum quisquam!i",
    price: 2700,
    weight: "500 г.",
    id: 9,
  },
  {
    img: "images/menu/dish_2.svg",
    title: "Свиные ребрышки на гриле с зеленью",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo porro expedita adipisci inventore ducimus laboriosam, blandi",
    price: 1600,
    weight: "750 г.",
    id: 10,
  },
  {
    img: "images/menu/dish_3.svg",
    title: "Креветки по-королевски в лимонном соке",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam ipsum molestias quos minus deserunt? Optio laudantium voluptates non. Repudiandae, officia!",
    price: 1820,
    weight: "7 шт.",
    id: 11,
  },
  {
    img: "images/menu/dish_2.svg",
    title: "Устрицы по рокфеллеровски",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi maxime voluptas earum quisquam!i",
    price: 2700,
    weight: "500 г.",
    id: 12,
  },
  {
    img: "images/menu/dish_1.svg",
    title: "Устрицы по рокфеллеровски",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi maxime voluptas earum quisquam!i",
    price: 2700,
    weight: "500 г.",
    id: 13,
  },
  {
    img: "images/menu/dish_2.svg",
    title: "Свиные ребрышки на гриле с зеленью",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo porro expedita adipisci inventore ducimus laboriosam, blandi",
    price: 1600,
    weight: "750 г.",
    id: 14,
  },
  {
    img: "images/menu/dish_3.svg",
    title: "Креветки по-королевски в лимонном соке",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam ipsum molestias quos minus deserunt? Optio laudantium voluptates non. Repudiandae, officia!",
    price: 1820,
    weight: "7 шт.",
    id: 15,
  },
  {
    img: "images/menu/dish_4.svg",
    title: "Устрицы по рокфеллеровски",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi maxime voluptas earum quisquam!i",
    price: 2700,
    weight: "500 г.",
    id: 16,
  },
];

// const menu = () => {
//   let mainMenu = "";
//   menuList.forEach(({ img, title, description, price, weight, id }) => {
//     console.log(img, title, description, price, weight, id);
//   });
// };

// _____________________________________________________________________
// //Поле подсчета кол-ва добавленных блюд
// const dishCounter = document.querySelector(".main-header__amount-number");

// //Кнопка добавления блюда
// const btnAdd = document.querySelector(".menu__dish-add");

// btnAdd.addEventListener("click", function () {
//   console.log("click");
//   dishCounter.innerHTML = ++dishCounter.innerHTML;
// });

// !!! Сделать кнопку удаления из корзины
// Кнопка удаления блюда
// const btnDel = document.querySelector(".menu__dish-add");
// btnDel.addEventListener("click", function () {
//   console.log("click");
// if (parseInt(dishCounter.innerHTML) > 0)
//   dishCounter.innerHTML = --dishCounter.innerHTML;
// });

// _______________________________________________

// Счетчик добавление кол-ва блюд по каждой отдельной кнопке
// const counter = () => {
//   const dishCounter = document.querySelector(".main-header__amount-number");
//   const btnAdd = document.querySelectorAll(".menu__dish-add");
//   const dishSumCounter = document.querySelector(".main-header__sum-cost");
//   const dishCost = document.querySelector(".menu__dish-cost");

//   for (let button of btnAdd) {
//     let countDish = 0;
//     dishCounter.innerHTML = countDish;

//     button.addEventListener("click", () => {
//       ++dishCounter.innerHTML; // прибавляем +1 к счетчику внутри count
//     });
//   }

//   let countSum = 0;
//   dishSumCounter.innerHTML = countSum;

//   window.addEventListener("click", (e) => {
//     if (e.target.classList.contains("menu__dish-add")) {
//       dishSumCounter += dishCost;
//     }
//   });
// };

// counter();

// Счетчик уменьшения кол-ва блюд по каждой отдельной кнопке
// const counterMinus = () => {
//   const dishCounter = document.querySelector(".main-header__amount-number");
//   const btnAdd = document.querySelectorAll(".menu__dish-add");
//   let count = 13;
//   dishCounter.innerHTML = count;

//   for (let button of btnAdd) {
//     button.addEventListener("click", () => {
//       if (parseInt(dishCounter.innerHTML) > 0) --dishCounter.innerHTML; // уменьшаем  на 1 кол-во внутри count
//     });
//   }
// };

// counterMinus();

// Еще один вариант счетчика добавления кол-ва блюд по каждой отдельной кнопке (Лучший?)
const amountCounter = () => {
  const dishCounter = document.querySelector(".main-header__amount-number");

  let count = 0;
  dishCounter.innerHTML = count;

  window.addEventListener("click", (e) => {
    if (e.target.classList.contains("menu__dish-add")) {
      ++dishCounter.innerHTML;
    }
  });
  // const dishSumCounter = document.querySelector(".main-header__sum-cost");
  // const dishCost = document.querySelector(".menu__dish-cost");

  // let sum = 0;
  // dishSumCounter.innerHTML = sum;

  // window.addEventListener("click", (e) => {
  //   if (e.target.classList.contains("menu__dish-add")) {
  //     dishSumCounter.innerHTML =
  //       Number(dishSumCounter.innerHTML) + Number(dishCost.innerHTML)
  //   }
  // });
};

amountCounter();

const sumCounter = () => {
  function addHandlers(dish) {
    const dishCost = dish.querySelector(".menu__dish-cost");
    const addBtn = dish.querySelector(".menu__dish-add");
    const dishSumCounter = document.querySelector(".main-header__sum-cost");

    let sum = 0;

    dishSumCounter.innerHTML = sum;

    addBtn.addEventListener("click", function () {
      dishSumCounter.innerHTML =
        Number(dishSumCounter.innerHTML) + Number(dishCost.innerHTML);
    });
  }

  let counts = document.querySelectorAll(".menu__dish");
  counts.forEach(addHandlers);
};

sumCounter();
