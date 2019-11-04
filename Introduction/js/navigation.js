const li = document.querySelectorAll("nav ul li");
const contents = document.querySelectorAll(".main-contents .inner-contents");

$(document).ready(function () {
    clickAction();
});

function clickAction() {
    $("nav ul li").on("click", function () {
        //        console.log("clicked");
        $("nav ul li").removeClass("selected");
        $(".inner-contents").removeClass("selected");
        $(this).addClass("selected");
        $("#" + $(this).attr("data-tab")).addClass("selected");

        //        $(".inner-contents").hide();
        //        $("nav ul li").removeClass("selected");

        //        $(this).addClass("selected");
        //        index = $("nav ul li").index(this) + 1;
        //        $(".inner-contents:nth-child('+index+)").removeClass("selected");
        //        $(".inner-contents:nth-child('+index+)").fadeIn();
        //        $(".inner-contents:nth-child('+index+)").addClass("selected"); 
    })
}
