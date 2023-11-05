const form = document.getElementById("form");
const success = document.getElementById("success");
const textareas = document.querySelectorAll("textarea");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  success.style.opacity = "0.5";

  setTimeout(() => {
    success.style.opacity = "0";
  }, 6000);

  form.reset();
});

textareas.forEach((textarea) => {
  textarea.addEventListener("input", function () {
    const characterCount = this.value.length;
    const current = document.getElementById("current");
    const maximum = document.getElementById("maximum");

    current.textContent = characterCount;
  });
});

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the form from submitting

  // Do any other form submission logic here

  // Reset character count
  const current = document.getElementById("current");
  current.textContent = "0";
});
