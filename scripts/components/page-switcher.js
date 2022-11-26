const basketSwitcher = () => {
  const backBtn = document.querySelector(".header__btn-back");
  const menuTitle = document.querySelector(".header__title");
  const basketTitle = document.querySelector(".header__title--basket");
  const basketBtn = document.querySelector(".header__basket-link");
  const headerList = document.querySelector(".header__list");
  const menuPage = document.querySelector(".menu");
  const basketPage = document.querySelector(".basket");
  const basketLine = document.querySelector(".line");

  basketBtn.addEventListener("click", () => {
    backBtn.style.display = "block";
    basketTitle.style.display = "block";
    basketPage.style.display = "block";
    basketLine.style.display = "block";
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
