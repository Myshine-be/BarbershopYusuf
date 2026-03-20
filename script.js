
const STRIPE_PAYMENT_LINK = "https://buy.stripe.com/test_4gMfZif64ckKbXsdMGbMQ00";

const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const timeSelect = document.getElementById("timeSelect");
const bookingForm = document.getElementById("bookingForm");
const bookingDate = document.getElementById("bookingDate");
const formMessage = document.getElementById("formMessage");

if (menuToggle) {
  menuToggle.addEventListener("click", () => mobileMenu.classList.toggle("open"));
  mobileMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => mobileMenu.classList.remove("open"));
  });
}

[
  "10:00","11:00","12:00","13:00","14:00","15:00","16:00",
  "17:00","18:00","19:00","20:00","21:00","22:00","23:00"
].forEach(time => {
  const option = document.createElement("option");
  option.value = time;
  option.textContent = time;
  timeSelect.appendChild(option);
});

const today = new Date();
bookingDate.min = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2,"0")}-${String(today.getDate()).padStart(2,"0")}`;

bookingForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(bookingForm);

  const name = data.get("name");
  const date = data.get("date");
  const time = data.get("time");

  if (!name || !date || !time) {
    formMessage.textContent = "Vul eerst alle verplichte velden in.";
    return;
  }

  formMessage.textContent = `Bedankt ${name}. Je wordt doorgestuurd naar de betaalpagina voor ${date} om ${time}.`;

  setTimeout(() => {
    window.location.href = STRIPE_PAYMENT_LINK;
  }, 700);
});
