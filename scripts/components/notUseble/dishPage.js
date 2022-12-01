const dishInfoPage = () => {
  const infoContainer = document.querySelector(".info-container"); // обертка списка товара куда будут добавляться товары в корзине

  window.addEventListener("storage", () => {
    const dishHTML = localStorage.getItem("dishHTML"); // получаем отправляенное блюдо в корзине из localStorage

    let dishInfo = JSON.parse(dishHTML);
    
    // localStorage.removeItem("dishHTML");
    infoContainer.insertAdjacentHTML("beforeend", dishInfo); // рендер блюда в корзине
  });
};

dishInfoPage();
