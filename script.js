function unfold_nav_item() {
    $("#icon").hover(function(){
        $(".text").show("slide", {direction: "left"}, 1000);
    }, function() {
        $(".text").show("slide", {direction: "right"}, 1000);
    })

    let a = 5;
    console.log(a);
}