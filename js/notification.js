const form = document.getElementById("form");
const success = document.getElementById("success");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  success.style.display = "block";

  setTimeout(() => {
    success.style.display = "none";
  }, 4000);

  form.reset();
});
