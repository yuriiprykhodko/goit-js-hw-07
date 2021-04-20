const refs = {
  renderBox: document.querySelector("input"),
  buttonRander: document.querySelector("[data-action=render]"),
  buttonDestroy: document.querySelector("[data-action=destroy]"),
  boxesEl: document.querySelector("#boxes"),
};
refs.boxesEl.classList.add("boxes");
refs.buttonRander.addEventListener("click", () => createBoxes(refs.renderBox.value));
refs.buttonDestroy.addEventListener("click", destroyBoxes);
function getRandomRgb() {
  const rgbNum = () => Math.floor(Math.random() * 256);
  const r = rgbNum();
  const g = rgbNum();
  const b = rgbNum();
  return `rgb(${r},${g},${b})`;
}
function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const newBox = document.createElement("div");
    newBox.style.width = `${30 + i * 10}px`;
    newBox.style.height = `${30 + i * 10}px`;
    newBox.style.backgroundColor = getRandomRgb();
    refs.boxesEl.append(newBox);
  }
}
function destroyBoxes() {
  refs.renderBox.value = "";
  return (refs.boxesEl.innerHTML = "");
}
