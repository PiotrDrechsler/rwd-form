document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
  const success = document.getElementById("success");
  success.style.display = "block";

  setTimeout(() => {
    success.style.display = "none";
  }, 4000);
});
