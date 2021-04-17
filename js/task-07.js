const refs = {
  input: document.querySelector("#font-size-control"),
  spanText: document.querySelector("#text"),
};
refs.input.addEventListener("input", oninput);
function oninput(event) {
  return (refs.spanText.style.fontSize = `${event.currentTarget.value}px`);
}
