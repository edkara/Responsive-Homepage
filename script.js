function unfold_nav_item() {
    alert("HAAAAALOOOOOOOOOO!");
}

function unfold_note() {
    $("#note").click(function() {
        $(this).toggleClass("open");
    });
}

function sticked() {
    let note = document.getElementById("note");
    let notePos = note.getBoundingClientRect().bottom();
    window.addEventListener("scroll", e => {
        scrollPos = window.scrollY;
        if (scrollPos < notePos) {

        }
    })
}

$(document).ready(function() {
    unfold_note();
    // remove_logo_font();
});