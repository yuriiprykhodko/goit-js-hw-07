const refs = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
};
refs.input.addEventListener("input", onInputClick);

function onInputClick(event) {
  if (event.currentTarget.value === "") {
    return (refs.output.textContent = "незнакомец");
  }
  return (refs.output.textContent = event.currentTarget.value);
}
