const refs = {
  decrement: document.querySelector("[data-action=decrement]"),
  increment: document.querySelector("[data-action=increment]"),
  counterValue: document.querySelector("#value"),
  step: 1,
  stepEl: -1,
};
refs.decrement.addEventListener("click", onDecrementClick);
function onDecrementClick() {
  return (refs.counterValue.textContent -= refs.step);
}
refs.increment.addEventListener("click", onIncrementClick);
function onIncrementClick() {
  return (refs.counterValue.textContent -= refs.stepEl);
}
