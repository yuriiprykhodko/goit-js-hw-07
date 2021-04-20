const inputTarget = document.querySelector("#validation-input");
inputTarget.addEventListener("blur", onBlurInput);
inputTarget.addEventListener("blur", offBlurInput);
function onBlurInput(event) {
  if (Number(inputTarget.dataset.length) === event.target.value.length) {
    inputTarget.classList.remove("invalid");
    inputTarget.classList.add("valid");
    console.log("+");
  }
}
function offBlurInput(event) {
  if (Number(inputTarget.dataset.length) !== event.target.value.length) {
    inputTarget.classList.remove("valid");
    inputTarget.classList.add("invalid");
    console.log("-");
  }
}
