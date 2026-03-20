const menuToggle=document.getElementById("menuToggle");
const mobileMenu=document.getElementById("mobileMenu");
const timeSelect=document.getElementById("timeSelect");
const bookingForm=document.getElementById("bookingForm");
const formMessage=document.getElementById("formMessage");
const bookingDate=document.getElementById("bookingDate");

if(menuToggle){
  menuToggle.addEventListener("click",()=>mobileMenu.classList.toggle("open"));
  mobileMenu.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>mobileMenu.classList.remove("open")));
}

["10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00"].forEach(time=>{
  const option=document.createElement("option");
  option.value=time;
  option.textContent=time;
  timeSelect.appendChild(option);
});

const today=new Date();
bookingDate.min=`${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,"0")}-${String(today.getDate()).padStart(2,"0")}`;

bookingForm.addEventListener("submit",(e)=>{
  e.preventDefault();
  const data=new FormData(bookingForm);
  formMessage.textContent=`Demo actief: ${data.get("name")}, jouw Ultra VIP Haircut op ${data.get("date")} om ${data.get("time")} is klaar om aan een betaalpagina gekoppeld te worden.`;
});

/*
LATER TOEVOEGEN:
window.location.href = "JOUW_STRIPE_PAYMENT_LINK";
of Stripe Checkout via backend.
*/
