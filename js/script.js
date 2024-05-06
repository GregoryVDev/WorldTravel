const nav = document.getElementById("nav");
const menuBurger = document.getElementById("burger");

menuBurger.addEventListener("click", () => {
  nav.classList.toggle("active");
  menuBurger.classList.toggle("active");
});

// const nav = document.getElementById("nav");
// const menuBurger = document.getElementById("burger");

// menuBurger.addEventListener("click", () => {
//   // Toggle the 'active' class on the navigation menu and menu burger icon
//   nav.classList.toggle("active");
//   menuBurger.classList.toggle("active");

//   // Toggle the body's overflow property to prevent scrolling when the menu is open
//   if (nav.classList.contains("active")) {
//     document.body.style.overflow = "hidden";
//   } else {
//     document.body.style.overflow = "auto";
//   }
// });
