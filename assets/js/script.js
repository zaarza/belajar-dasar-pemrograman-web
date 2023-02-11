let menuToggle = document.querySelector(`.menu__toggle`);
let nav = document.querySelector("nav");

// Dropdown navigation
menuToggle.addEventListener("click", function () {
  menuToggle.classList.toggle("menu--active");
  menuToggle.parentElement.classList.toggle("nav--black");
  menuToggle.previousElementSibling.classList.toggle("nav--active");
});

// Tambahkan background pada nav dengan cara menambahkan class
window.addEventListener("scroll", function () {
  // ScrollY dibawah 150
  if (this.window.scrollY < 150) {
    nav.classList.remove("nav--scroll");

    // ScrollY diatas 150
  } else {
    nav.classList.add("nav--scroll");
  }
});

// Nav aktif
let navLinks = document.querySelector(".nav__links");
let navItems = document.querySelectorAll(".nav__items");

navLinks.addEventListener("click", function (event) {
  navItems.forEach(function (e) {
    e.className = "nav__items";
  });
  if (event.target.className == "nav__items") {
    event.target.classList.add("nav--clicked");
  }
});

// Fitur komentar
let ul = document.querySelector(".comment__list");
let commentName = document.querySelector(".input__name");
let commentText = document.querySelector(".input__comment");
let commentButton = document.querySelector(".comment__button");
let commentDelete = document.querySelector(".comment__delete");
let comment = {};

// Sinkronkan
if (localStorage.getItem("comment")) {
  comment = JSON.parse(localStorage.getItem("comment"));

  for (item in comment) {
    if (comment[item] != "") {
      addComment(item, comment[item]);
    }
  }
}

// Function
// Tambah komentar
function addComment(name, teks) {
  let newComment = `<li class="comment__box">
                    <h3 class="comment__name">${name}</h3>
                    <p class="comment__text">${teks}</p>
                    </li>`;

  ul.insertAdjacentHTML("afterbegin", newComment);

  // Masukkan ke objek comment
  comment[commentName.value] = commentText.value;

  // Tambahkan ke localStorage
  localStorage.setItem("comment", JSON.stringify(comment));

  // Bersihkan input
  commentName.value = "";
  commentText.value = "";
}

commentButton.addEventListener("click", function () {
  addComment(commentName.value, commentText.value);
});
