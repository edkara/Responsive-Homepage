function unfold_nav_item() {
  alert("HAAAAALOOOOOOOOOO!");
}

function unfold_note() {
  $("#note").click(function () {
    $(this).toggleClass("open");
  });
}

function sticked() {
  let note = document.getElementById("note");
  let notePos = note.getBoundingClientRect().bottom();
  window.addEventListener("scroll", (e) => {
    scrollPos = window.scrollY;
    if (scrollPos < notePos) {
    }
  });
}

function search() {
  let searchForm = document.querySelector(".search-form");
  document.querySelector("#search-btn").onclick = () => {
    searchForm.classList.add("active");
  };

  document.querySelector("#close-search").onclick = () => {
    searchForm.classList.remove("active");
  };
}

$(document).ready(function () {
  unfold_note();
  search();
  // remove_logo_font();
});
