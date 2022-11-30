const basketStatus = () => {
  const basketList = document.querySelector(".basket-list"); // возможно нужно переименовать
  const basketListStatus = document.querySelector(".basket-empty");

  if (basketList.children.length > 0) {
    basketListStatus.style.display = "none";
  } else {
    basketListStatus.style.display = "block";
    // localStorage.clear();
    localStorage.clear("cartHTML");
  }
};

basketStatus();

//_____________________________________________________________________________
const basketSwitcher = () => {
  const backBtn = document.querySelector(".header__btn-back");
  const menuTitle = document.querySelector(".header__title");
  const basketTitle = document.querySelector(".header__title--basket");
  const basketBtn = document.querySelector(".header__basket-link");
  const headerList = document.querySelector(".header__list");
  const menuPage = document.querySelector(".menu");
  const basketPage = document.querySelector(".basket");
  const basketLine = document.querySelector(".line");
  // const menuBackground = document.querySelector(".body-menu");
  // const basketBackground = document.querySelector(".body-basket");

  basketBtn.addEventListener("click", () => {
    backBtn.style.display = "block";
    basketTitle.style.display = "block";
    basketPage.style.display = "block";
    basketLine.style.display = "block";
    // basketBackground.style.display = "block";
    // menuBackground.style.display = "none";
    menuPage.style.display = "none";
    menuTitle.style.display = "none";
    headerList.style.display = "none";
    basketBtn.style.display = "none";
  });
};

basketSwitcher();

const backMenuBtn = () => {
  const backBtn = document.querySelector(".header__btn-back");
  const menuTitle = document.querySelector(".header__title");
  const basketTitle = document.querySelector(".header__title--basket");
  const basketBtn = document.querySelector(".header__basket-link");
  const headerList = document.querySelector(".header__list");
  const menuPage = document.querySelector(".menu");
  const basketPage = document.querySelector(".basket");
  const basketLine = document.querySelector(".line");

  backBtn.addEventListener("click", () => {
    backBtn.style.display = "none";
    basketTitle.style.display = "none";
    basketPage.style.display = "none";
    basketLine.style.display = "none";
    menuPage.style.display = "block";
    menuTitle.style.display = "block";
    headerList.style.display = "block";
    basketBtn.style.display = "block";
  });
};

backMenuBtn();

// const textSwitcher = () => { // окончание слова "товар" в соответствии с кол-вом
//   const text1 = document.querySelector(".header__amount-text");
//   const counter = document.querySelector(".header__amount-number");

//   if (counter.innerText == 0) {
//     text1.innerText = "товаров";
//   } else if (counter.innerText == 1) {
//     text1.innerText = "товар";
//   } else if (counter.innerText > 4) {
//     text1.innerText = "товаров";
//   } else {
//     text1.innerText = "товара";
//   }
// };

// textSwitcher();
