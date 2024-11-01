// Dropdown pada navigasi
const tombolMenu = document.getElementById("tombol-menu");
const menuList = document.getElementById("menu-list");

tombolMenu.addEventListener("click", () => {
  menuList.classList.toggle("hidden");
});
