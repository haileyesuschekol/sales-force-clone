const list = document.querySelector(".nav-1")
const menu = document.querySelector(".menu")
const xBtn = document.querySelector(".x-btn")
menu.addEventListener("click", () => {
  xBtn.classList.add("x-btn-visible")
  list.classList.toggle("expand")
  menu.classList.add("menu-visible")
})

xBtn.addEventListener("click", () => {
  xBtn.classList.remove("x-btn-visible")
  menu.classList.remove("menu-visible")
  list.classList.remove("expand")
})
