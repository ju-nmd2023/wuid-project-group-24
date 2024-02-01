document.querySelectorAll(".js-add-to-cart").forEach(function (button) {
  button.addEventListener("click", function () {
    document.getElementById("confirmationMessage").style.display = "block";

    setTimeout(function () {
      document.getElementById("confirmationMessage").style.display = "none";
    }, 4000);
  });
});
