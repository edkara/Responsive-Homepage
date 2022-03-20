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

function swiper() {
  var swiper = new Swiper(".home-slider", {
    loop: true, 
    grabCursor: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

function swiperLogos() {
  var swiper = new Swiper(".clients-slider", {
    loop:true,
    grabCursor:true,
    spaceBetween:20,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });
}

$(document).ready(function () {
  unfold_note();
  search();
  swiper();
  swiperLogos();
});
