const sidebar = document.querySelector(".sidebar");
const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("show-sidebar");
});

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("show-sidebar");
});
