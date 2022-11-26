"use strict";

//Страница регистрации
const registration = () => {
  // ЛОГИН
  const regLoginInput = document.querySelector(
    ".registration-form__input--login"
  ); // поле логина

  const regLoginErrorEmpty = document.querySelector(
    ".registration-form__error--empty-log"
  ); // ошибка пустого поля

  const regLoginErrorLength = document.querySelector(
    ".registration-form__error--length-log"
  ); // ошибка длинны

  const regLoginErrorValid = document.querySelector(
    ".registration-form__error--valid-log"
  ); // ошибка валидности email

  let regLoginData = ""; // пустые данные логина (переменная должна быть изменяемая)

  // введенные данные логина
  regLoginInput.addEventListener("input", (e) => {
    regLoginData = e.target.value.trim();
  });

  // ПАРОЛЬ
  const regPassInput = document.querySelector(
    ".registration-form__input--pass"
  ); // поле пароля

  const regPassErrorEmpty = document.querySelector(
    ".registration-form__error--empty-pass"
  ); // ошибка пустого поля

  const regPassErrorLength = document.querySelector(
    ".registration-form__error--length-pass"
  ); // ошибка длинны

  let regPassData = ""; // пустые данные пароля (переменная должна быть изменяемая)

  // введенные данные пароля
  regPassInput.addEventListener("input", (e) => {
    regPassData = e.target.value.trim();
  });

  // CHECKBOX
  const regCheckboxInput = document.querySelector(
    ".registration-form__input--checkbox"
  ); // поле checkbox

  const regCheckboxErrorEmpty = document.querySelector(
    ".registration-form__error--empty-check"
  ); // ошибка пустого поля

  let regCheckboxFill = false; // пустой Checkbox (изначально false)

  // заполненный Checkbox
  regCheckboxInput.addEventListener("change", (e) => {
    regCheckboxFill = e.target.checked;
  });

  // КНОПКА РЕГИСТРАЦИИ
  const btnRegistration = document.querySelector(".registration-form__btn"); // кнопка

  // Передача данных и проверка заданных условий при нажатии кнопки Регистрации
  btnRegistration.addEventListener("click", (e) => {
    e.preventDefault();

    let regLoginValid,
      regPassValid,
      regCheckboxValid = false; // переменные корректности ввода данных (изначально false)

    const validReg = () => {
      // проверка валидонсти email
      const validateEmail = (email) => {
        const re =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        return re.test(String(email).toLowerCase());
      };

      // Проверка логина
      // проверка на пустую строку
      if (regLoginData == "") {
        regLoginErrorEmpty.style.display = "block";
        regLoginErrorLength.style.display = "none";
        regLoginErrorValid.style.display = "none";
      }

      // проверка на количество символов
      else if (regLoginData.length <= 4) {
        regLoginErrorLength.style.display = "block";
        regLoginErrorEmpty.style.display = "none";
        regLoginErrorValid.style.display = "none";
      }

      // проверка на валидность email
      else if (!validateEmail(regLoginData)) {
        regLoginErrorValid.style.display = "block";
        regLoginErrorEmpty.style.display = "none";
        regLoginErrorLength.style.display = "none";
      } else {
        regLoginErrorValid.style.display = "none";
        regLoginErrorLength.style.display = "none";
        regLoginErrorEmpty.style.display = "none";
        regLoginValid = true;
      }

      //Проверка пароля
      // проверка на пустую строку
      if (regPassData == "") {
        regPassErrorEmpty.style.display = "block";
        regPassErrorLength.style.display = "none";
      }
      // проверка на количество символов
      else if (regPassData.length <= 4) {
        regPassErrorLength.style.display = "block";
        regPassErrorEmpty.style.display = "none";
      } else {
        regPassErrorLength.style.display = "none";
        regPassErrorEmpty.style.display = "none";
        regPassValid = true;
      }

      //Проверка Checkbox
      if (!regCheckboxFill) {
        regCheckboxErrorEmpty.style.display = "block";
      } else {
        regCheckboxErrorEmpty.style.display = "none";
        regCheckboxValid = true;
      }

      // сохраняемая информация из формы регистрации в Local Storage
      if (
        regLoginValid === true &&
        regPassValid === true &&
        regCheckboxValid === true
      ) {
        function store() {
          localStorage.setItem("login", regLoginInput.value);
          localStorage.setItem("password", regPassInput.value);
        }
        store();

        //алерт (!!!Заменить на картинку "Вы успешно зарегистрированы!")
        alert("Вы успешно зарегистрированы!");

        //Таймаут на автоматическое переключение на страницу входа 0.5 сек
        setTimeout(function autoSwitchPage() {
          document.querySelector(".registration").style.display = "none";
          document.querySelector(".entry").style.display = "block";
        }, 500);

        //Правило моментальное переключение на страницу входа
        // document.querySelector(".registration").style.display = "none";
        // document.querySelector(".entry").style.display = "block";
      }
    };
    validReg();
  });
};

registration();

// Страница входа
const authentication = () => {
  //ЛОГИН
  const entryLoginInput = document.querySelector(".entry-form__input--login"); // поле логина

  const entryLoginErrorEmpty = document.querySelector(
    ".entry-form__error--empty-log"
  ); // ошибка пустого поля

  let entryLoginData = ""; // пустые данные логина (переменная должна быть изменяемая)

  // введенные данные логина
  entryLoginInput.addEventListener("input", (e) => {
    entryLoginData = e.target.value.trim();
  });

  //ПАРОЛЬ
  const entryPassInput = document.querySelector(".entry-form__input--password"); // поле пароля

  const entryPassErrorEmpty = document.querySelector(
    ".entry-form__error--empty-pass"
  ); // ошибка пустого поля

  let entryPassData = ""; // пустые данные пароля (переменная должна быть изменяемая)

  entryPassInput.addEventListener("input", (e) => {
    entryPassData = e.target.value.trim();
  });

  // CHECKBOX
  const entryCheckboxInput = document.querySelector(
    ".entry-form__input--checkbox"
  ); // поле checkbox

  const entryCheckboxErrorEmpty = document.querySelector(
    ".entry-form__error--empty-check"
  ); // ошибка пустого поля

  let entryCheckboxFill = false; // пустой Checkbox (изначально false)

  // заполненный Checkbox
  entryCheckboxInput.addEventListener("change", (e) => {
    entryCheckboxFill = e.target.checked;
  });

  // Ошибка логина и пароля
  const entryError = document.querySelector(".entry-form__error--wrong");

  // КНОПКА РЕГИСТРАЦИИ
  const btnEntry = document.querySelector(".entry-form__btn"); // кнопка

  btnEntry.addEventListener("click", (e) => {
    e.preventDefault();
    const validAuthentication = () => {
      // проверка на пустое поле
      if (entryLoginData != "") {
        entryLoginErrorEmpty.style.display = "none";
      } else {
        entryLoginErrorEmpty.style.display = "block";
        entryError.style.display = "none";
      }

      if (entryPassData != "") {
        // проверка на пустое поле
        entryPassErrorEmpty.style.display = "none";
      } else {
        entryPassErrorEmpty.style.display = "block";
        entryError.style.display = "none";
      }

      // проверка checkbox
      if (!entryCheckboxFill) {
        entryCheckboxErrorEmpty.style.display = "block";
        entryError.style.display = "none";
      } else {
        entryCheckboxErrorEmpty.style.display = "none";
      }

      // Проверка Логин/Пароль
      const checkLoginPass = () => {
        // получение сохраненной информации после регистрации
        let storedLogin = localStorage.getItem("login");
        let storedPassword = localStorage.getItem("password");

        // проверка на совпадение информации из памяти
        if (
          // проверка вводимой информации в форме входа
          entryLoginData == storedLogin &&
          entryPassData == storedPassword &&
          entryCheckboxFill == true
        ) {
          alert("Вы успешно вошли!");
          entryError.style.display = "none";
        } else if (
          // если пароль не верен и поля не пусты
          entryLoginData != "" &&
          entryPassData != "" &&
          entryCheckboxFill == true
        ) {
          entryError.style.display = "block";
        } else {
          entryError.style.display = "none";
        }
      };
      checkLoginPass();
    };

    validAuthentication();
  });
};

authentication();

//Переключение страниц Вход/Регистрация
const switchPage = () => {
  const regLink = document.querySelector(".entry-form__registration-link");
  const entryLink = document.querySelector(".registration-form__entry-link");
  const entryPage = document.querySelector(".entry");
  const regPage = document.querySelector(".registration");

  regLink.addEventListener("click", (e) => {
    e.preventDefault();
    entryPage.style.display = "none";
    regPage.style.display = "block";
  });

  entryLink.addEventListener("click", (e) => {
    e.preventDefault();
    regPage.style.display = "none";
    entryPage.style.display = "block";
  });
};

switchPage();
