const menu = document.querySelector(".navigation");
const toggle = document.querySelector("#toggle");

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
  if (toggle.className === "fas fa-bars") toggle.className = "fas fa-times";
  else toggle.className = "fas fa-bars";
});
