function initState() {
  return {
    dishesInBasket: [],
  };
}

function loadState() {
  const loadedState = JSON.parse(localStorage.getItem("state"));
  if (!loadedState) {
    const netState = initState();
    saveState(netState);
    return netState;
  } else {
    return loadedState;
  }
}

function saveState(state) {
  localStorage.setItem("state", JSON.stringify(state));
}

function removeBasketDish(productId) {
  const state = loadState();
  state.dishesInBasket = state.dishesInBasket.filter(
    (product) => product.id != productId
  );
  saveState(state);
}