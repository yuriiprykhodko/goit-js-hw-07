const ingredients = ["Картошка", "Грибы", "Чеснок", "Помидоры", "Зелень", "Приправы"];
const IngredientsEl = ingredients.map((element) => {
  const a = document.createElement("li");
  a.textContent = element;
  const ingredientsRef = document.querySelector("ul");
  return ingredientsRef.append(a);
});
