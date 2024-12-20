let mobileImg = document.querySelector(".mobile");
let form = document.querySelector(".form");
let errorMsg = document.querySelector(".left .error");
let input = document.querySelector(".left input");
let submit = document.querySelector(".left button");

let success = document.querySelector(".success");
let span = document.querySelector(".success span");
let dismiss = document.querySelector(".success button");


submit.addEventListener('click', () => {
  const valid = validateEmail(input.value);
  if (valid) {
    form.style.display = "none";
    mobileImg.style.display = "none";
    success.style.display = "block";
    span.innerHTML = input.value;
  } else {
    input.classList.add("errorInp");
    errorMsg.style.display = "block";
  }
})

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}


dismiss.addEventListener('click', () => {
  form.style.display = "flex";
  mobileImg.style.display = "none";
  success.style.display = "none";
  errorMsg.style.display = "none";
  input.focus();
  if (input.classList.contains("errorInp")) {
    input.classList.remove("errorInp");
  }
})
