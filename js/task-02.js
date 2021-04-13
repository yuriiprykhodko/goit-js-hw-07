const ingredients = ["Картошка", "Грибы", "Чеснок", "Помидоры", "Зелень", "Приправы"];
const potatosIngredientEl = document.createElement("li");
potatosIngredientEl.textContent = "Картошка";
const mushroomsIngredientEl = document.createElement("li");
mushroomsIngredientEl.textContent = "Грибы";
const garlicIngredientEl = document.createElement("li");
garlicIngredientEl.textContent = "Чеснок";
const tomatoIngredientEl = document.createElement("li");
tomatoIngredientEl.textContent = "Помидоры";
const greensIngredientEl = document.createElement("li");
greensIngredientEl.textContent = "Зелень";
const condimentsIngredientEl = document.createElement("li");
condimentsIngredientEl.textContent = "Приправы";
const ingredientsEl = document.querySelector("ul");
console.log(ingredientsEl);
ingredientsEl.append(
  potatosIngredientEl,
  mushroomsIngredientEl,
  garlicIngredientEl,
  tomatoIngredientEl,
  greensIngredientEl,
  condimentsIngredientEl
);
