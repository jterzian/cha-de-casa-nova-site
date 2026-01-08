const form = document.getElementById("rsvpForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Aqui futuramente entra backend / planilha / PDF
  successMessage.classList.remove("hidden");
  form.reset();
});
