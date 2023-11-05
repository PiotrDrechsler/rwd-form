const textareas = document.querySelectorAll("textarea");

textareas.forEach((textarea) => {
  textarea.addEventListener("keyup", function () {
    const characterCount = this.value.length;
    const current = document.getElementById("current");
    const maximum = document.getElementById("maximum");
    const theCount = document.getElementById("the-count");

    current.textContent = characterCount;
  });
});
